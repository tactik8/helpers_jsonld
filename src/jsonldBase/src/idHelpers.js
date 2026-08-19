

import { jsonldBase as h} from '../jsonldBase.js'
import * as recordIDHelpers from '../../recordIdHelpers/recordIdHelpers.js'



/**
 * Fill in missing @id
 * @param {*} value 
 * @returns 
 */
export function setTempID(value) {

    if (Array.isArray(value)) {
        return value.map(x => h.assignId(x))
    }

    if (!value?.['@id'] && !value?.['@type']) {
        return value
    }

    for (let k of Object.keys(value)) {
        value['@id'] = value?.["@id"] || "_:" + h.randomUUID();
        value[k] = h.assignId(value[k])
    }
    return value
}

export function getGenericRecordID(url){
    return recordIDHelpers.getGenericRecordID(url)
}


/**
 * Fill in missing @id
 * @param {*} value 
 * @returns 
 */
export function assignId(value) {

    if (Array.isArray(value)) {
        return value.map(x => h.assignId(x))
    }

    if (!value?.['@id'] && !value?.['@type']) {
        return value
    }

    for (let k of Object.keys(value)) {
        value['@id'] = value?.["@id"] || "_:" + h.randomUUID();
        value[k] = h.assignId(value[k])
    }
    return value
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
            return value.map(x => h.replaceIds(x, idsMap))
        }

        if (!value?.['@id']) {
            return value
        }

        // Check if a replacer value exist for the current @id
        let replacee = value?.['@id']
        let replacer = idsMap.get(replacee)

        if (replacer) {
            value['@id'] = replacer
        }

        // iterate keys
        for (let k of Object.keys(value)) {
            value[k] = h.replaceIds(value?.[k], idsMap)
        }




        return value

    }
    // Convert to map if not already
    if (!(idsMap instanceof Map)) {
        let newIdsMap = new Map()
        idsMap = Array.isArray(idsMap) ? idsMap : idsMap
        idsMap.forEach(x => newIdsMap.set(x.replacee, x.replacer))
        idsMap = newIdsMap
    }

    return _replaceIds(value, idsMap)

}

