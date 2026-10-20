import { jsonldBase as h } from '../jsonldBase.js';

export function expand(store, record, allowCircular = true) {
    
    // 1. Convert store to a Map and unwrap if _storeToMap returns a wrapper object
    let storeMap = h._storeToMap(store);

    // 2. Cache to track expanded objects and break circular recursion loops
    const cache = new Map();

    /**
     * Recursive internal expand function
     */
    function _expand(target) {
        // Return primitives, null, or undefined as-is
        if (!target || typeof target !== 'object') {
            return target;
        }

        // Handle arrays: expand each item recursively
        if (Array.isArray(target)) {
            return target.map((item) => _expand(item));
        }

        // Extract record ID if present
        const recordId = h.record_id(target);

        // Check if we already processed this entity in the current expansion chain
        if (recordId && cache.has(recordId)) {
            const cachedRecord = cache.get(recordId);
            if (allowCircular) {
                return cachedRecord;
            }
            return h.ref ? h.ref(cachedRecord) : { '@id': recordId };
        }

        // Fetch full entity from store if available, fallback to target
        let fullRecord = recordId && storeMap instanceof Map ? storeMap.get(recordId) : null;
        let baseObj = fullRecord || target;

        // Shallow clone to avoid mutating original objects in store
        let expanded = Array.isArray(baseObj) ? [...baseObj] : { ...baseObj };

        // Register in cache BEFORE recursing into children to prevent circular stack overflow
        if (recordId) {
            cache.set(recordId, expanded);
        }

        // Recurse over object properties
        for (const key of Object.keys(expanded)) {
            // Skip linked-list pointers or meta fields if configured
            if (key === 'previousItem' || key === 'nextItem') {
                continue;
            }

            expanded[key] = _expand(expanded[key]);
        }

        return expanded;
    }

    // Handle initial string input (e.g. expand(store, 'c1'))
    if (typeof record === 'string') {
        record = { '@id': record };
    }

    return _expand(record);
}


/**
 * Replaces all children objects by their _id ref equivalent.
 * @param {object | object[]} record - the record(s) to process
 * @returns {object | object[]} The stripped record(s)
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
 * Flattens jsonld record, replacing all child values by their _id ref equivalent.
 * @param {object | object[]} record
 * @returns {object[]} An array of flattened records
 */
export function flatten(record) {
    function _flatten(record) {
        let records = [];

        // Handle null
        if (!record) {
            return [];
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
        if (Object.prototype.toString.call(record) !== '[object Object]') {
            return [];
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
    record = h.setTempID(record);

    // Deal with special cases - 2 way relationships
    record = handleRelationships(record);

    // Flatten
    let result = _flatten(record);

    // remove empties
    result = result.filter((x) => x);

    // remove refs 
    result = result.filter((x) => h.isRef(x) === false);

    // return
    return result;
}

/**
 * Fix parent - child relationships reciprocity (offer and products for example)
 * @param {object | object[]} value - The record to be fixed
 * @returns {object | object[]} The records with relationship reciprocity fixed
 */
export function handleRelationships(value) {
    // handle array
    if (h.isArray(value)) {
        return value.map((x) => handleRelationships(x));
    }

    //
    let record = value;

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

    return record;
}

/**
 * Removes empty values and transform arrys of 1 into value
 * @param {object | object[]} value - The value(s) to simplify.
 * @returns {object | object[]} The simplified value(s)
 */
export function simplify(value) {
    function _simplify(value, depth = 0) {
        if (depth > 20) {
            return value;
        }
        depth += 1;

        if (value === undefined) {
            return undefined;
        }

        if (Array.isArray(value)) {
            value = value.map((x) => _simplify(x, depth));
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
                let r = _simplify(value?.[k], depth);

                if (k == 'itemListElement') {
                    r = h.toArray(r);
                }

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
 * Returns the jsonld values that are in the record regardless of depth.
 * @param {*} record - The parent record to extract jsonld children from
 * @returns {object[]} An array of children jsonld records
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
