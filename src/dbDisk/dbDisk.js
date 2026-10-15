/**
 * Database to store jsonld records to disk
 */

import { jsonldBase as _h } from '../jsonldBase/jsonldBase.js';

import { things } from '../things/things.js';

import { diskHelpers as disk } from '../diskHelpers/diskHelpers.js';

/**
 * @fileoverview Tools to read write JSON-LD records to disk.
 * @module dbDisk
 */

/**
 * Creates a new DbDisk instance to read/write JSON-LD records to disk.
 * Does not flatten objects
 * @class
 */
export class DbDisk {
    /**
     *
     * @param {*} directoryPath - the directory wjhere to store records
     * @param {*} flattenRecords - when true, flattens records
     */
    constructor(directoryPath, flattenRecords = true) {
        this.path = directoryPath;
        this.flattenRecords = flattenRecords;
        this._isInitializedFlag = false;
    }

    /**
     * Add / replace record(s) to the database
     * @param {*} record
     * @returns
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
     * @returns
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
        if(!record_id){
            action.setFailed('No @id provided')
            return action.record
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
     */
    async getAll(expand = true) {
        let action = new things.Action('Get all records');

        // Get filenames
        let filenames;
        try {
            filenames = await disk.dir.list(this.path);
            filenames = filenames || []
            filenames = _h.toArray(filenames);
        } catch (err) {
            action.setFailed(err);
            return action.record;
        }

        if(filenames.length == 0) {
            action.setCompleted([])
            return action.record
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
     * @returns
     */
    async exists(record_id) {
        let r = await this.get(record_id, false);

        return _h.isCompleted(r);
    }

    /**
     * Delete record
     * @param {*} record_id 
     * @returns 
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
            let r = await disk.file.delete(this.path, filename);
            action.setCompleted();
            return action.record;
        } catch (err) {
            console.log('err', err)
            action.setFailed(err);
            return action.record;
        }
    }

    /**
     * Remove all records from database
     * @returns
     */
    async purge() {
        let action = new things.Action('Purge database');

        try {
            let r = await disk.dir.delete(this.path);
            action.setCompleted();
            return action.record;
        } catch (err) {
            action.setFailed(err);
            return action.record;
        }

        return;
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

/**
 * Converts any URL or path string into a safe, valid filename.
 * @param {string} url - The URL or string to process.
 * @param {number} [maxLength=200] - Optional max character limit.
 * @returns {string} Safe filename string.
 */
function urlToFilenameOLD(url, maxLength = 200) {
    if (typeof url !== 'string' || !url.trim()) {
        return 'unnamed-file';
    }

    let result = url.trim();

    // 1. Remove literal "undefined" or "null" substrings created by prior operations
    result = result.replace(/(undefined|null)/gi, '');

    // 2. Strip protocol (http://, https://, file://, etc.)
    result = result.replace(/^[a-z]+:\/\//i, '');

    // 3. Remove accent diacritics
    result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 4. Convert all non-alphanumeric chars (except dots and hyphens) to dashes
    result = result.replace(/[^a-zA-Z0-9.-]/g, '-');

    // 5. Clean up redundant, leading, and trailing characters
    result = result
        .replace(/--+/g, '-') // Collapse multiple hyphens
        .replace(/\.\.+/g, '.') // Collapse multiple dots
        .replace(/^[-.]+|[-.]+$|\.$/g, ''); // Strip leading/trailing dots and hyphens

    // 6. Handle edge cases
    if (!result) {
        return 'unnamed-file';
    }

    // 7. Enforce max length limit while preserving file extension if present
    if (result.length > maxLength) {
        const extIndex = result.lastIndexOf('.');
        if (extIndex > result.length - 10 && extIndex > 0) {
            const ext = result.slice(extIndex);
            result = result.slice(0, maxLength - ext.length) + ext;
        } else {
            result = result.slice(0, maxLength);
        }
    }

    result = result + '.json';
    return result;
}
