/**
 * Database to store jsonld records to disk
 */

import { jsonldBase as _h } from '../../helpers/jsonldBase/jsonldBase.js';

import { things } from '../../helpers/things/things.js';

import { diskHelpers as disk } from '../../helpers/diskHelpers/diskHelpers.js';

/**
 * @fileoverview Tools to read write JSON-LD records to disk.
 * @module dbDisk
 */

/**
 * Creates a new DbDisk instance to read/write JSON-LD records to disk.
 * Does not flatten objects
 * @class
 */
export class DiskDB {
    /**
     * Tool to store jsonld data as json files on local disk.
     * @param {*} directoryPath - the directory where to store records
     * @param {*} flattenRecords - when true (default), flattens records
     */
    constructor(directoryPath, flattenRecords = true) {
        this.path = directoryPath;
        this.flattenRecords = flattenRecords;
        this._isInitializedFlag = false;
    }

    /**
     * Add / replace record(s) to the database
     * @param {*} record
     * @returns {action} An action object
     */
    async set(record) {
        if (this.flattenRecords === true) {
            return await this._set_flattened(record);
        } else {
            return await this._set(record);
        }
    }

    async _set(record) {
        let action = new things.Action('Saving record');
        action.object = record;

        // hadle null
        if (!record) {
            action.setFailed('No record provided');
            return action.record;
        }

        // Handle array
        if (_h.isArray(record)) {
            for (let r of record) {
                let a = await this._set(r);
                action.addPart(a);
            }
            action.setCompleted(record);
            return action.record;
        }

        try {
            // Handle object
            let c = JSON.stringify(record, null, 4);
            let record_id = _h.record_id(record);
            let f = urlToFilename(record_id);
            // eslint-disable-next-line no-unused-vars
            let r = await disk.save(this.path, f, c);

            action.setCompleted(record);
            return action.record;
        } catch (err) {
            action.setFailed(String(err));
            return action.record;
        }
    }

    async _set_flattened(record) {
        let action = new things.Action('Saving record');
        action.object = record;

        // hadle null
        if (!record) {
            action.setFailed('No record provided');
            return action.record;
        }

        // Set in tempDB to flatten
        let tempDB = new _h.DB();
        tempDB.set(record);

        // Save records
        for (let record of tempDB) {
            let a = new things.Action('Saving record ' + _h.record_id(record));
            try {
                // Save record
                let c = JSON.stringify(record, null, 4);
                let record_id = _h.record_id(record);
                let f = urlToFilename(record_id);
                // eslint-disable-next-line no-unused-vars
                let r = await disk.save(this.path, f, c);

                a.setCompleted(record);
                action.addPart(a);
            } catch (err) {
                a.setFailed(String(err));
                action.addPart(a);
            }
        }

        action.setCompleted(record);
        return action.record;
    }

    /**
     * Add / replace record(s) to the database (same as set)
     * @param {*} record
     * @returns {action} An action object
     */
    async post(record) {
        return await this.set(record);
    }

    /**
     * Get an individual record from the database
     * @param {*} record_id
     * @param {*} expand
     * @returns
     */
    async get(record_id, expand = true) {
        if (expand == false || this.flattenRecords == false) {
            return await this._get(record_id);
        } else {
            return await this._getNested(record_id);
        }
    }

    async _get(record_id) {
        let action = new things.Action('Get record from db');
        action.object = _h.ref(record_id);

        // Handle null
        if (!record_id) {
            action.setFailed('No @id provided');
            return action.record;
        }

        // Handle array
        if (_h.isArray(record_id)) {
            let results = [];
            for (let r of record_id) {
                let a = await this._get(r);
                action.addPart(a);
                results = results.concat(_h.toArray(a.result));
            }
            action.setCompleted(results);
            return action.record;
        }

        //
        let f = urlToFilename(record_id);

        let c = await disk.load(this.path, f);

        if (!c || c == '') {
            action.setFailed('No records found');
            return action.record;
        }

        try {
            let r = JSON.parse(c);
            r = _h.simplify(r);
            action.setCompleted(r);
            return action.record;
        } catch (err) {
            action.setFailed(err);
            return action.record;
        }
    }

    async _getNested(record_id) {
        let action = new things.Action('Get nested record');
        action.object = _h.ref(record_id);

        //
        let dbHelper = new _h.DatabaseHelper({ '@id': record_id });

        // Retrieve all children values
        while (dbHelper.isActive) {
            let next_id = dbHelper.next;
            let a = await this._get(next_id);
            action.addPart(a);
            if (a?.result) {
                _h.toArray(a.result).map((x) => dbHelper.add(x || _h.ref(x)));
            } else {
                dbHelper.add(_h.ref(next_id));
            }
        }

        action.setCompleted(dbHelper.result);
        return action.record;
    }

    /**
     * Return all records
     * @param {boolean} expand - Expand all records (
     * @returns {action} An action object
     */
    async getAll(expand = true) {
        let action = new things.Action('Get all records');

        // Get filenames
        let filenames;
        try {
            filenames = await disk.dir.list(this.path);
            filenames = filenames || [];
            filenames = _h.toArray(filenames);
        } catch (err) {
            action.setFailed(err);
            return action.record;
        }

        if (filenames.length == 0) {
            action.setCompleted([]);
            return action.record;
        }

        let record_ids = filenames.map((x) => filenameToUrl(x));

        let a = await this.get(record_ids, expand);

        action.addPart(a);

        action.setCompleted(a.result);

        return action.record;
    }

    /**
     * Checks if a record exists
     * @param {*} record_id
     * @returns {boolean} True if exists, false
     */
    async exists(record_id) {
        let r = await this.get(record_id, false);

        return _h.isCompleted(r);
    }

    /**
     * Delete record
     * @param {*} record_id
     * @returns {action} An action object
     */
    async delete(record_id) {
        let action = new things.Action('Delete record');
        action.object = _h.ref(record_id);

        // if null
        if (!record_id) {
            action.setCompleted();
            return action.record;
        }

        // handle array
        if (_h.isArray(record_id)) {
            for (let r of record_id) {
                let a = await this.delete(r);
                action.addPart(a);
            }
            action.setCompleted();
            return action.record;
        }

        // Ensure string (convert from ref if needed)
        record_id = _h.toRecord_id(record_id);

        // Delete file
        try {
            let filename = urlToFilename(record_id);
            // eslint-disable-next-line no-unused-vars
            let r = await disk.file.delete(this.path, filename);
            action.setCompleted();
            return action.record;
        } catch (err) {
            console.log('err', err);
            action.setFailed(err);
            return action.record;
        }
    }

    /**
     * Remove all records from database
     * @returns {action} An action object
     */
    async purge() {
        let action = new things.Action('Purge database');

        try {
            // eslint-disable-next-line no-unused-vars
            let r = await disk.dir.delete(this.path);
            action.setCompleted();
            return action.record;
        } catch (err) {
            action.setFailed(err);
            return action.record;
        }

        
    }
}

/**
 * Safely converts a URL into a 100% reversible filename.
 */
function urlToFilename(url) {
    if (!url) return 'unnamed-file.json';
    // URL-safe Base64 encoding
    const encoded = Buffer.from(url).toString('base64url');
    return `${encoded}.json`;
}

/**
 * Exactly restores the original URL from a filename created by urlToFilenameLossless.
 */
function filenameToUrl(filename) {
    if (!filename || filename === 'unnamed-file.json') return '';
    const nameWithoutExt = filename.replace(/\.json$/, '');
    return Buffer.from(nameWithoutExt, 'base64url').toString('utf-8');
}
