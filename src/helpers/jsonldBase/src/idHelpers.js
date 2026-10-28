import { jsonldBase as h } from '../jsonldBase.js';
import * as recordIDHelpers from '../../recordIdHelpers/recordIdHelpers.js';

/**
 * Normalize record_ids and their references
 * @param {*} value
 */
export function normalizeRecordId(value, baseUrl) {
    // Step 1. Set temp ID if missing
    value = setTempID(value);

    // Gather list of normalized ids
    let normalizedIDs = getNormalizedIDs(value, baseUrl);

    // Repalce IDs
    let normalizedValue = replaceIds(value, normalizedIDs);

    //
    return normalizedValue;
}

/**
 * Returns list of replacee / replacers
 * @param {*} value
 * @param {*} baseUrl
 * @returns
 */
function getNormalizedIDs(value, baseUrl) {
    function _getNormalizedIDs(value, baseUrl) {
        baseUrl = baseUrl || 'https://www.test.com/';

        // Deal with array
        if (h.isArray(value)) {
            let results = [];
            for (let v of value) {
                results = results.concat(_getNormalizedIDs(v));
            }
            return results;
        }

        // Deal with non object
        if (h.isObject(value) == false) {
            return [];
        }

        // Deal with object
        let results = [
            {
                replacee: h.record_id(value),
                replacer: recordIDHelpers.get(value, baseUrl),
            },
        ];

        for (let k of Object.keys(value)) {
            results = results.concat(_getNormalizedIDs(value[k], baseUrl));
        }
        return results;
    }

    let results = _getNormalizedIDs(value, baseUrl);

    results = results.filter((x) => x);

    return results;
}

/**
 * Fill in missing @id
 * @param {*} value
 * @returns
 */
export function setTempID(value) {
    // Deal with array
    if (Array.isArray(value)) {
        return value.map((x) => h.assignId(x));
    }

    // Deal with non object
    if (h.isObject(value) == false) {
        return value;
    }

    // Assign temp id if missing
    value['@id'] = value?.['@id'] || '_:' + h.randomUUID();

    // iterate
    for (let k of Object.keys(value)) {
        value[k] = h.assignId(value[k]);
    }

    //
    return value;
}

export function getGenericRecordID(url) {
    return recordIDHelpers.getGenericRecordID(url);
}

/**
 * Fill in missing @id
 * @param {*} value
 * @returns
 */
export function assignId(value, parentIDs=[]) {
    if (h.isArray(value)) {
        return value.map((x) => h.assignId(x,parentIDs));
    }

    if (h.isObject(value) == false) {
        return value;
    }

    if(parentIDs.includes(value)){
        return value
    }
    parentIDs.push(value)

    for (let k of Object.keys(value)) {
        value['@id'] = value?.['@id'] || '_:' + h.randomUUID();
        value[k] = h.assignId(value[k], parentIDs);
    }
    return value;
}

/**
 * Replace @id from one value to another
 * idsMap {"replacee": "xxx", "replacer": "xxx"}
 * @param {*} value
 * @param {*} idsMap
 * @returns
 */
export function replaceIds(value, idsMap) {
    function _replaceIds(value, idsMap) {
        if (Array.isArray(value)) {
            return value.map((x) => h.replaceIds(x, idsMap));
        }

        if (!value?.['@id']) {
            return value;
        }

        // Check if a replacer value exist for the current @id
        let replacee = value?.['@id'];
        let replacer = idsMap.get(replacee);

        if (replacer) {
            value['@id'] = replacer;
        }

        // iterate keys
        for (let k of Object.keys(value)) {
            value[k] = h.replaceIds(value?.[k], idsMap);
        }

        return value;
    }
    // Convert to map if not already
    if (!(idsMap instanceof Map)) {
        let newIdsMap = new Map();
        idsMap = Array.isArray(idsMap) ? idsMap : idsMap;
        idsMap.forEach((x) => newIdsMap.set(x.replacee, x.replacer));
        idsMap = newIdsMap;
    }

    return _replaceIds(value, idsMap);
}
