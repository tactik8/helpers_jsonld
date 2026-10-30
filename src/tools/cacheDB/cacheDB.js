/**
 * @fileoverview In-memory cache database for storing, expanding, and retrieving JSON-LD records.
 */

import { jsonldBase as h } from '../../helpers/jsonldBase/jsonldBase.js'

/**
 * In-memory cache database for JSON-LD records with TTL (Time-To-Live) support and graph expansion.
 */
export class CacheDB {
    /**
     * Creates an instance of CacheDB.
     *
     * @param {number|string} [expiryInMilliseconds] - Cache expiration threshold in milliseconds. If omitted or invalid, records will not expire.
     */
    constructor(expiryInMilliseconds) {
        /**
         * Storage for individual records keyed by record ID.
         * @type {Object.<string, {value: Object, modifiedDate: Date}>}
         * @private
         */
        this._cache = {};

        /**
         * Storage for cached search queries keyed by filter string.
         * @type {Object.<string, {value: Array<Object>, records: Array<Object>, modifiedDate: Date}>}
         * @private
         */
        this._searchCache = {};

        /**
         * Duration in milliseconds before a cached item is deemed stale.
         * @type {number|undefined}
         * @private
         */
        this._expiryDuration = !isNaN(Number(expiryInMilliseconds))
            ? Number(expiryInMilliseconds)
            : undefined;
    }

    /**
     * Retrieves all cached records.
     *
     * @param {boolean} [expand=true] - Whether to expand referenced entities using graph relationships.
     * @returns {Array<Object>} List of cached records.
     */
    getAll(expand = true) {
        let records = [];
        for (let k of Object.keys(this._cache)) {
            records.push(this.get(k, expand));
        }

        return records;
    }

    /**
     * Retrieves a single record (or batch of records) by ID.
     * Returns `undefined` if the record is missing or expired.
     *
     * @param {string|Object|Array<string|Object>} record_id - The ID, JSON-LD object, or an array of IDs/objects to retrieve.
     * @param {boolean} [expand=true] - Whether to expand nested references and simplify the result.
     * @returns {Object|Array<Object>|undefined} The simplified record, array of records, or `undefined` if not found or expired.
     */
    get(record_id, expand = true) {
        if (h.isArray(record_id)) {
            return record_id.map((x) => this.get(x));
        }

        record_id = h.toRecordID(record_id);

        if (!this._cache?.[record_id]) {
            return undefined;
        }

        if (!this._cache?.[record_id]?.modifiedDate) {
            return undefined;
        }

        let now = new Date();
        let duration = now - this._cache[record_id].modifiedDate;

        if (
            this._expiryDuration === undefined &&
            duration > this._expiryDuration
        ) {
            this._cache[record_id] = undefined;
            return undefined;
        }

        let record = this._cache[record_id]?.value;

        if (expand === true) {
            record = h.expand(this.getAll(false), record);
        }

        record = h.simplify(record);

        return record;
    }

    /**
     * Flattens and stores one or more JSON-LD records into the cache.
     * Updates timestamps and merges referenced objects.
     *
     * @param {Object|Array<Object>} value - A JSON-LD entity or array of entities to store.
     * @returns {void}
     */
    set(value) {
        let records = h.flatten(value);

        for (let record of records) {
            let record_id = h.record_id(record);
            this._cache[record_id] = this._cache?.[record_id] || {};
            this._cache[record_id].value = h.isRef(record)
                ? this._cache[record_id]?.value || record
                : record;
            this._cache[record_id].modifiedDate = new Date();
        }
    }

    /**
     * Alias for {@link CacheDB#set}. Adds or updates records in the cache.
     *
     * @param {Object|Array<Object>} value - A JSON-LD entity or array of entities to store.
     * @returns {void}
     */
    post(value) {
        return this.set(value);
    }

    // ------------------------------------------------------------
    // search
    // ------------------------------------------------------------

    /**
     * Retrieves the result of a previous cached search query if still valid.
     * Automatically expands references against current cached entities.
     *
     * @param {string} [filter='all'] - The search filter/query key to look up.
     * @returns {Array<Object>|undefined} The hydrated search result list, empty array if not found, or `undefined` if expired.
     */
    getSearch(filter) {
        filter = filter || 'all';

        if (!this._searchCache?.[filter]) {
            return [];
        }

        if (!this._searchCache?.[filter]?.modifiedDate) {
            return undefined;
        }

        let now = new Date();
        let duration = now - this._searchCache[filter].modifiedDate;

        if (
            this._expiryDuration === undefined &&
            duration > this._expiryDuration
        ) {
            this._searchCache[filter] = undefined;
            return undefined;
        }

        let result = this._searchCache[filter]?.value;

        // Refresh with latest records
        result = h.expand(this.getAll(false), result);

        return result;
    }

    /**
     * Caches search query results and flattens underlying entities into the primary cache.
     *
     * @param {string} filter - The filter key or query identifier.
     * @param {Object|Array<Object>} result - The search result items to cache.
     * @returns {void}
     */
    setSearch(filter, result) {
        result = h.toArray(result);

        // Add to normal cache
        this.set(result);

        // Add to search Cache
        this._searchCache[filter] = this._searchCache?.[filter] || {};
        this._searchCache[filter].value = result;
        this._searchCache[filter].records = h.flatten(result);
        this._searchCache[filter].modifiedDate = new Date();
    }
}
