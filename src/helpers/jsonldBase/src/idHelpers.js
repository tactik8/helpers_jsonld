import { jsonldBase as h } from '../jsonldBase.js';
import * as recordIDHelpers from '../../recordIdHelpers/recordIdHelpers.js';

/**
 * Normalize record_ids and their references
 * @param {*} value
 */
export function normalizeRecordId(value, baseUrl) {
    // Step 1. Set temp ID if missing
    value = fillMissingIDs(value, baseUrl) //setTempID(value);

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
        let replacee = h.record_id(value)
        let replacer = getNormalizedRecordID(value, baseUrl)

        let results = []
        if(replacee != replacer){
            results.push({replacee, replacer})
        }
        let resultsOLD = [
            {
                replacee: h.record_id(value),
                replacer: getNormalizedRecordID(value, baseUrl) //recordIDHelpers.get(value, baseUrl),
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

function getNormalizedRecordID(record, baseUrl){

    baseUrl = baseUrl || '_:'
    baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'

    let record_type = h.record_type(record)
    let record_id = h.record_id(record)
    let suffix = "#" + (record_type || "").toLowerCase()

    // Case: No record_type
    if(!record_type){ 
        return record_id
    }
    
    // Case: Blank record_id
    if(!record_id){ 
        return baseUrl + h.randomUUID() + suffix
    }

    if(!record_id.includes('#')){
        return record_id + suffix
    }

    let currentSuffix = "#" + (record_id.split('#')?.[1] || '')

    if(currentSuffix !== suffix){
        return record_id.replace(currentSuffix, suffix)

    }

    return record_id


}



/**
 * Fill in missing @id
 * @param {*} value
 * @returns
 */
export function setTempID_OLD(value) {
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


/**
 * Fill in missing @id. Use own url or url of parent record. 
 * @param {*} value
 * @param {String | undefined} url - The url of the webpage the record is from
 * @returns
 */
export function fillMissingIDs(value, url) {

    function _fillMissingIDs(value, url, position=0){

        // Deal with array
        if (Array.isArray(value)) {

            let positions = {}
            let newValues = []
            for(let v of value){

                // Increment position type by type
                let record_type = h.record_type(v) || 'na'
                positions[record_type] = positions?.[record_type] + 1 || 0

                // 
                newValues.push(_fillMissingIDs(v, url, positions?.[record_type] || 0))
            }

            return newValues
        }

        // Deal with non object
        if (h.isObject(value) == false) {
            return value;
        }


        // Handle objects
        url = h.getValue(value, 'url') || url || ''
        url = url.split('#')[0]
        position = position ?? 0
        let positionString = position == 0 ? "" : String(position)
        let record_type = h.record_type(value)
        let tempID = url + "#" + record_type + positionString


        // Assign temp id if missing
        value['@id'] = value?.['@id'] || tempID

        // iterate
        for (let k of Object.keys(value)) {
            value[k] = _fillMissingIDs(value[k], url);
        }

        //
        return value;
    }

    return _fillMissingIDs(value, url)
}



/**
 * Fill in missing @id. Use own url or url of parent record. 
 * @param {*} value
 * @param {String | undefined} url - The url of the webpage the record is from
 * @returns
 */
export function setTempID(value, url) {

    function _setTempID(value, url, position=0){

        // Deal with array
        if (Array.isArray(value)) {

            let positions = {}
            let newValues = []
            for(let v of value){

                // Increment position type by type
                let record_type = h.record_type(v) || 'na'
                positions[record_type] = positions?.[record_type] + 1 || 0

                // 
                newValues.push(_setTempID(v, url, positions?.[record_type] || 0))
            }

            return newValues
        }

        // Deal with non object
        if (h.isObject(value) == false) {
            return value;
        }


        // Handle objects
        url = h.getValue(value, 'url') || url || ''
        url = url.split('#')[0]
        position = position ?? 0
        let positionString = position == 0 ? "" : String(position)
        let record_type = h.record_type(value)
        let tempID = url + "#" + record_type + positionString


        // Assign temp id if missing
        value['@id'] = value?.['@id'] || tempID

        // iterate
        for (let k of Object.keys(value)) {
            value[k] = _setTempID(value[k]);
        }

        //
        return value;
    }

    return _setTempID(value, url)
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
