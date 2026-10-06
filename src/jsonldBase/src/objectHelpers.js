import { jsonldBase as h } from '../jsonldBase.js';

import * as recordIDHelpers from '../../recordIdHelpers/recordIdHelpers.js';

import { dataHelpers } from '../../dataHelpers/dataHelpers.js';

/**
 * returns true if object is valid jsonld
 * @param {*} record
 */
export function isValid(record) {
    return isJsonld(record);
}

/**
 * Returns true if valid ojsonld object (returns false for arrays)
 * @param {*} record
 */
export function isJsonld(record) {
    return record?.['@type'] || record?.['@id'];
}

/**
 * Replace record_ids by standardized record_id. Sets permanent id if _:
 * @param {*} value
 * @returns
 */
export function clean(value, baseUrl) {
    if (Array.isArray(value) && value.length > 1) {
        return value.map((x) => clean(x, baseUrl));
    }

    if (!value?.['@type'] || !value?.['@id']) {
        return value;
    }

    // Clone
    try {
        value = clone(value);
    } catch (err) {}

    // Set id
    value = setTempID(value);

    // Flatten
    let flatRecords = h.flatten(value);

    // Order keys
    flatRecords = flatRecords.map((x) =>
        JSON.parse(JSON.stringify(x, Object.keys(x).sort(), 4)),
    );

    //
    let replacements = [];

    // Get combinations of replacer, replacees
    for (let f of flatRecords) {
        // Ensure id not array
        f['@id'] = Array.isArray(f?.['@id']) ? f?.['@id'][0] : f?.['@id'];

        // Validate id, skip if ok
        if (recordIDHelpers.validate(f) == true) {
            continue;
        }

        // Get standard id
        let newID = recordIDHelpers.getStandardID(f, baseUrl);

        if (newID && f?.['@id'] != newID) {
            let r = {
                replacer: newID,
                replacee: f?.['@id'],
            };
            replacements.push(r);
        }

        if (!newID && f?.['@id'].startsWith('_:')) {
            let r = {
                replacer: h.getGenericRecordID(baseUrl),
                replacee: f?.['@id'],
            };
            replacements.push(r);
        }
    }

    // Execute replacement
    value = h.replaceIds(value, replacements);

    //
    return value;
}

/**
 * Converts all nested values in record to @values objects
 * @param {*} value
 */
export function expandAtValue(value) {
    function _expandAtValue(value, isValueAlready = false) {
        // @value
        let v = h.getAtValue(value);
        if (v && v.length > 0) {
            return h.setAtValue(value, _expandAtValue(v, true));
        }

        // Arrays
        if (h.isArray(value)) {
            return value.map((x) => _expandAtValue(x, isValueAlready));
        }

        // object
        if (h.isJsonld(value)) {
            for (let k of Object.keys(value?.record || value)) {
                value = h.setValues(
                    value,
                    k,
                    _expandAtValue(h.getValues(value, k), false),
                );
            }
            return value;
        }

        //
        if (isValueAlready === false) {
            return { '@value': value };
        }

        return value;
    }
    return _expandAtValue(value, false);
}

/**
 * Removes @value from record
 * @param {*} value
 */
export function contractAtValue(value) {
    // @value
    let v = h.getAtValue(value);
    if (v && v.length > 0) {
        return contractAtValue(h.getAtValue(value));
    }

    // array
    if (h.isArray(value)) {
        return value.map((x) => contractAtValue(x));
    }

    // Object
    if (h.isJsonld(value)) {
        for (let k of Object.keys(value?.record || value)) {
            h.setValues(value, k, contractAtValue(h.getValues(value, k)));
        }
        return value;
    }

    return value;
}

// -----------------------------------------------------------------------
// Utility
// -----------------------------------------------------------------------

export function clone(value) {
    try {
        value = structuredClone(value);
        return value;
    } catch {}

    try {
        value = JSON.parse(JSON.stringify(value));
        return value;
    } catch {}

    return value;
}

/**
 * Merges two jsonld values, skips duplicates by default
 * @param {*} value1
 * @param {*} value2
 * @param {*} skipDuplicates (default true)
 */
export function merge(item1, item2, skipDuplicates = true) {
    item1 = h.isArray(item1) && item1.length == 1 ? item1[0] : item1;
    item2 = h.isArray(item2) && item1.length == 2 ? item2[0] : item2;

    item1 = item1 ?? {};
    item2 = item2 ?? {};

    let keys = [];
    keys = keys.concat(Object.keys(item1));
    keys = keys.concat(Object.keys(item2));
    keys = [...new Set(keys)];

    let mergedRecord = {
        '@id': item1?.['@id'] || item2?.['@id'],
    };

    for (let k of keys) {
        if (k == '@id') {
            continue;
        }
        let values1 = h.toArray(item1?.[k] || undefined);
        let values2 = h.toArray(item2?.[k] || undefined);
        let values = values1.concat(values2);

        if (skipDuplicates == true) {
            values = h.dedupe(values);
        }
        mergedRecord[k] = values;
    }

    return mergedRecord;
}

/**
 * Overwrites values of item1 with values of item2
 * @param {*} item1
 * @param {*} item2
 * @param {*} skipDuplicates
 */
export function patch(item1, item2) {
    item1 = h.isArray(item1) && item1.length == 1 ? item1[0] : item1;
    item2 = h.isArray(item2) && item1.length == 2 ? item2[0] : item2;

    item1 = item1 ?? {};
    item2 = item2 ?? {};

    for (let k of h.keys(item2)) {
        
        let v = h.getValues(item2, k);
        item1 = h.setValues(item1, k, v);
    }

    return item1;
}

/**
 * Returns a url for the record based on baseUrl (https://www.test.com/api/https%3A%2F%2Ftenantid...)
 * @param {*} record
 * @param {*} baseUrl
 * @returns
 */
export function getRecordUrl(record, baseUrl) {
    baseUrl = baseUrl?.baseUrl ?? baseUrl;
    try {
        return dataHelpers.url.getUrl(
            baseUrl,
            encodeURIComponent(h.record_id(record)),
        );
    } catch (err) {
        console.log('Err getRecordUrl');
        return '';
    }
}
