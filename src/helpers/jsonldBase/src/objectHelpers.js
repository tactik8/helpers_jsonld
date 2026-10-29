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
 * Replace circular json elements with ref
 * @param {*} value
 */
export function removeCircularRefs(value) {
    return _removeCircular(value, new Set());
}

function _removeCircular(value, db) {

    db = new Set([...db])

    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (h.isArray(value)) {
        return value.map((x) => _removeCircular(x, db));
    }

    if (!h.isObject(value)) {
        return value;
    }

    let id = h.record_id(value);
    if (db.has(id)) {
        return h.ref(value);
    }
    db.add(id);

    for (let k of Object.keys(value)) {
        value[k] = _removeCircular(value[k], db);
    }

    return value;
}

export function sortedReplacer(key, value) {
    if (value instanceof Object && !(value instanceof Array)) {
        return Object.keys(value)
            .sort()
            .reduce((sorted, k) => {
                sorted[k] = value[k];
                return sorted;
            }, {});
    }
    return value;
}

/**
 *
 * @param {*} value
 * @returns
 */
export function JSON_stringify(value) {
    value = removeCircularRefs(value);
    return JSON.stringify(value, sortedReplacer, 4);
}

export function stringify(value) {
    return JSON_stringify(value);
}

/**
 *
 * @param {*} value
 * @returns
 */
export function JSON_parse(value) {
    return JSON.parse(value);
}

// -------------------------------------------------------------

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

/**
 * Clone an object JSON.parse(JSON.stringify())
 * @param {*} value - Value to clone
 * @returns {*} Cloned value
 */
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
 * @param {object} value1 - First item to merge
 * @param {object} value2 - Second item to merge
 * @param {boolean} skipDuplicates (default true) - Will not merge if same value.
 * @returns {object} The merged object
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
 * @param {object} item1 - The initial record
 * @param {object} item2 - The record with the new values
 * @returns {object} The merged record
 */
export function patch(item1, item2) {
    item1 = h.isArray(item1) && item1.length == 1 ? item1[0] : item1;
    item2 = h.isArray(item2) && item1.length == 2 ? item2[0] : item2;

    item1 = item1 ?? {};
    item2 = item2 ?? {};

    item2 = item2?.record || item2

    for (let k of h.keys(item2)) {
        
        let v = h.toArray(item2?.[k])
       
        item1 = h.setValues(item1, k, v);
    }

    return item1;
}

/**
 * Returns a url for the record based on baseUrl (https://www.test.com/api/https%3A%2F%2Ftenantid...)
 * @param {object} record - The record for which to obtain an url
 * @param {string} baseUrl - The base url for the record api
 * @returns {string} The url of the record
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
