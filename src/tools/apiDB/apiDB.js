/**
 * Same as api db but ocnnects to an api end point
 */

import { h } from '../../helpers/helpers.js'

import { CacheDB} from '../cacheDB/cacheDB.js'

export class ApiDB {
    constructor(base_url, databaseID, tenantID) {
        this._base_url = base_url;
        this._databaseID = databaseID;
        this._tenantID = tenantID;
        this._expiryDuration = 5000;

        this._cacheDB = new CacheDB();
    }

    async get(record_id) {
        record_id = h.toRecordID(record_id);

        // Check in cache
        let record_in_cache = this._cacheDB.get(record_id);

        // Return if complete
        if (record_in_cache) {
            console.log('record retrieved from cache');
            return record_in_cache;
        }

        console.log('record not found in cache');

        // Get records from db
        let path = '/' + this._databaseID + '/' + this._tenantID;
        let url = h.dataHelpers.url.getUrl(this._base_url, path, {
            record_id: record_id,
        });

        let r = await fetch(url);

        let result = await r.json();

        // Add to cache
        this._cacheDB.set(result);

        console.log('record retrieved from db');

        return result;
    }

    /**
     * Search records. Does not use cache
     * @param {*} filter
     * @returns
     */
    async search(filter, offset, limit, orderBy, orderDirection) {
        

        
        let params = { ...filter}
        if(offset){ params.offset = offset }
        if(limit){ params.limit = limit }
        if(orderBy){ params.orderBy = orderBy }
        if(orderDirection){ params.orderDirection = orderDirection }


        console.log('pp', params)
       

        
        // Check in cache
        if(1==0){
            let records_in_cache = this._cacheDB.getSearch(params);

            // Return if complete
            if (records_in_cache) {
                console.log('record retrieved from cache');
                return record_in_cache;
            }

            console.log('record not found in cache');
        }


        // Get records from db
        let path = '/' + this._databaseID + '/' + this._tenantID;
        let url = h.dataHelpers.url.getUrl(this._base_url, path, params);

        console.log('url', url);
        let r = await fetch(url);

        let action = await r.json();
        let result = h.getResult(action)

        // Add to cache
        this._cacheDB.setSearch(params, result);

        console.log('record retrieved from db');

        return result;
    }

    async post(records) {
        let path = '/';
        let url = h.dataHelpers.url.getUrl(this._base_url, path);

        let r = await fetch(url, {
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json', // Explicitly tell the server you are sending JSON
            },
            body: JSON.stringify(records), // Convert your JavaScript object into a JSON string
        });

        let action = await r.json();

        let results = h.getResults(action);

        // Add to cache
        this._cache.set(results);

        return results.length == 1 ? results[0] : results;
    }
}
