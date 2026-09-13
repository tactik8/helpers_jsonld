/**
 * Database to store jsonld records to disk
 */

import { _h } from '../index.js'


export class DbDisk {
    constructor(directoryPath) {

        this.path = directoryPath


    }


    async set(record) {

        let tempDB = new _h.DB()

        tempDB.set(record)

        for (let record of tempDB) {

            let c = JSON.stringify(record, null, 4)
            let record_id = _h.record_id(record)
            f = urlToFilename(record_id)
            let r = await _h.disk.save(this.path, f, c)
        }

    }

    async post(record) {
        return this.set(record)
    }

    async get(record_id, expand = true) {

        // Expand false
        if (expand == false) {
            if (_h.isArray(record_id)) {
                let results = []
                for (let r of record_id) {
                    let c = await this._getRecord(r)
                    results.push(c)
                }
                return results
            } else {
                return await this._getRecord(record_id)
            }
        }


        // 
        let dbHelper = new _h.DatabaseHelper({ "@id": record_id })

        while (dbHelper.isActive) {

            let r = await this._getRecord(dbHelper.next)
            r = r || { "@id": record_id }
            dbHelper.add(r)
            
        }
        return dbHelper.result



    }


    async _getRecord(record_id) {

        f = urlToFilename(record_id)

        let c = await _h.disk.load(this.path, f)

        if (!c || c == "") {
            return undefined
        }

        try {
            let r = JSON.parse(c)
            r = _h.simplify(r)
            return r
        } catch (err) {
            console.log('error')
            return {}
        }

    }


    async exists(record_id) {

        let r = await this.get(record_id, false)
        if(!r){
            return false
        }
        if(Object.keys(r).length < 2){
            return false
        }
        return true

    }


    async purge() {
        let r = await _h.disk.dir.delete(this.path)
        return
    }

}

/**
 * Converts any URL or path string into a safe, valid filename.
 * @param {string} url - The URL or string to process.
 * @param {number} [maxLength=200] - Optional max character limit.
 * @returns {string} Safe filename string.
 */
function urlToFilename(url, maxLength = 200) {
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
        .replace(/--+/g, '-')       // Collapse multiple hyphens
        .replace(/\.\.+/g, '.')     // Collapse multiple dots
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

    result = result + '.json'
    return result;
}