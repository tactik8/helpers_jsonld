import { jsonldBase as h } from '../jsonldBase.js';

export function expand(store, record) {
    function _expand(store, record, cache) {
        let storeRecord = h._storeToMap(store);

        if (h.isArray(record)) {
            return record.map((x) => _expand(storeRecord, x, cache));
        }

        if (!record?.['@id']) {
            return record;
        }

        // Check in cache
        let newRecord = cache.get(record?.['@id']);
        if (newRecord) {
            return newRecord;
            //todo: why did it do this?? return { "@id": newRecord?.["@id"] }
        }

        // Check in storeRecord
        newRecord = h.getRecord(storeRecord, record?.['@id'], false);
        record = newRecord || record;

        cache.set(newRecord?.['@id'], newRecord);

        for (let k of Object.keys(record)) {
            if (k == 'previousItem' || k == 'nextItem') {
                continue;
            }
            record[k] = _expand(storeRecord, record[k], cache);
        }

        return record;
    }

    let cache = new Map();
    return _expand(store, record, cache);
}

/**
 * Replaces all children objects by @id
 * @param {*} record
 * @returns
 */
export function strip(record) {
    function _strip(record, maxLevel, currentLevel) {
        if (Array.isArray(record)) {
            return record.map((x) => _strip(x, maxLevel, currentLevel));
        }

        if (record?.['@type'] || record?.['@id']) {
            if (currentLevel > maxLevel) {
                return { '@id': record?.['@id'] };
            } else {
                let newRecord = {};
                for (let k of Object.keys(record).sort()) {
                    newRecord[k] = _strip(
                        record?.[k],
                        maxLevel,
                        currentLevel + 1,
                    );
                }
                return newRecord;
            }
        }
        return record;
    }

    return _strip(record, 0, 0);
}

/**
 * Returns an array of all objects in a record, including main record
 * @param {*} record 
 * @returns 
 */
export function flatten(record) {
    function _flatten(record) {
        let records = [];

        // Handle null
        if(!record){
            return []
        }

        // Handle array
        if (h.isArray(record)) {
            let results = [];
            for (let r of record) {
                results = results.concat(_flatten(r));
            }

            return results;
        }

        // Handle non object
        if(Object.prototype.toString.call(record) !== '[object Object]'){
            return []
        }
        
        // Handle objects
        for (let k of Object.keys(record)) {
            // Deal with key exceptions
            if (k == '@id') {
                continue;
            }
            if (k == 'previousItem') {
                record[k] = h.ref(record?.[k]);
                continue;
            }
            if (k == 'nextItem') {
                record[k] = h.ref(record?.[k]);
                continue;
            }

            let values = record[k];
            values = h.toArray(values);

            record[k] = [];
            for (let v of values) {
                if (v?.['@id']) {
                    record[k].push({ '@id': v?.['@id'] });
                } else {
                    record[k].push(v);
                }
                records = records.concat(_flatten(v));
            }
        }
        records = [record].concat(records);

        return records;
    }

    // clone
    record = h.clone(record);

    // ensure ids 
    record = h.setTempID(record)

    // Deal with special cases - 2 way relationships
    record = handleRelationships(record)

    // Flatten
    let result = _flatten(record);

    // remove empties
    result = result.filter(x => x)

    // return
    return result
}

/**
 * Fix parent - child relationships (offer and products for example)
 * @param {*} value
 */
export function handleRelationships(value) {

    let record = value

    // Deal with special cases - 2 way relationships
    // Case 1. If product
    if (h.record_type(record) == 'Product') {

        // assign the product to the offers
        let offers = h.getValues(record, 'offers');
        offers = offers.map((x) =>
            h.insertValue(x, 'itemOffered', h.ref(record)),
        );
        record = h.setValues(record, 'offers', offers);

         // assign the product to item reviewed
        let reviews = h.getValues(record, 'review');
        reviews = reviews.map((x) =>
            h.insertValue(x, 'itemReviewed', h.ref(record)),
        );
        record = h.setValues(record, 'review', reviews);

        // assign the product to item aggregate rating
        let ratings = h.getValues(record, 'aggregateRating');
        ratings = ratings.map((x) =>
            h.insertValue(x, 'itemReviewed', h.ref(record)),
        );
        record = h.setValues(record, 'aggregateRating', ratings);
    }


    // Case 2. If offers,
    if (h.record_type(record) == 'Offer') {
        //  assign the offer to the product
        let products = h.getValues(record, 'itemOffered');
        products = products.map((x) =>
            h.insertValue(x, 'offers', h.ref(record)),
        );
        record = h.setValues(record, 'itemOffered', products);

        // assign the offer to item reviewed
        let reviews = h.getValues(record, 'review');
        reviews = reviews.map((x) =>
            h.insertValue(x, 'itemReviewed', h.ref(record)),
        );
        record = h.setValues(record, 'review', reviews);

        // assign the offer to item aggregate rating
        let ratings = h.getValues(record, 'aggregateRating');
        ratings = ratings.map((x) =>
            h.insertValue(x, 'itemReviewed', h.ref(record)),
        );
        record = h.setValues(record, 'aggregateRating', ratings);

    }



    // 



    //

    return record

}





/**
 * Removes empty values and transform arrys of 1 into value
 * @param {*} value 
 * @returns 
 */
export function simplify(value) {
    function _simplify(value) {
        if (value === undefined) {
            return undefined;
        }

        if (Array.isArray(value)) {
            value = value.map((x) => simplify(x));
            value = value.filter((x) => x !== undefined);

            if (value.length == 1) {
                value = value[0];
                return value;
            }
            if (value.length == 0) {
                return undefined;
            }

            return value;
        }

        if (
            value &&
            typeof value == 'object' &&
            Object.keys(value).length > 0
        ) {
            let newValue = {};
            for (let k of Object.keys(value)) {
                let r = simplify(value?.[k]);

                if (r !== undefined) {
                    newValue[k] = r;
                }
            }

            newValue['@id'] = h.toArray(newValue?.['@id'])?.[0];

            return newValue;
        }

        return value;
    }

    value = h.clone(value);

    let result = _simplify(value);
    return result;
}

/**
 * Returns all jsonld children of the record(s) (excluding main record)
 * @param {*} record
 */
export function getChildren(record) {
    function _getChildren(record, level) {
        if (h.isArray(record)) {
            let results = [];
            for (let x of record) {
                let r = _getChildren(x, level);
                results = results.concat(r);
            }
            return results;
        }

        // Handle not jsonld
        if (!(record?.['@id'] || record?.['@type'])) {
            return [];
        }

        //
        let result = [];
        if (level > 0) {
            result.push(record);
        }
        for (let k of Object.keys(record)) {
            result = result.concat(_getChildren(record[k], level + 1));
        }

        result = result.filter((x) => x);

        return result;
    }

    return _getChildren(record, 0);
}
