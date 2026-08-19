



import { jsonldBase as h} from '../jsonldBase.js'


import * as recordIDHelpers from '../../recordIdHelpers/recordIdHelpers.js'



/**
 * returns true if object is valid jsonld
 * @param {*} record 
 */
export function isValid(record) {
    return isJsonld(record)
}

/**
 * Returns true if valid ojsonld object (returns false for arrays)
 * @param {*} record 
 */
export function isJsonld(record) {
    return record?.['@type'] || record?.['@id']
}



/**
 * Replace record_ids by standardized record_id. Sets permanent id if _:
 * @param {*} value 
 * @returns 
 */
export function clean(value, baseUrl) {

    if (Array.isArray(value) && value.length > 1) {
        return value.map(x => clean(x, baseUrl))
    }

    if (!value?.['@type'] || !value?.['@id']) {
        return value
    }

    try {
        clone(value)
    } catch (err) {

    }

    value = setTempID(value)

    let flatRecords = h.flatten(value)

    // Order keys
    flatRecords = flatRecords.map(x => JSON.parse(JSON.stringify(x, Object.keys(x).sort(), 4)))

    // 
    let replacements = []

    // Get combinations of replacer, replacees
    for (let f of flatRecords) {

        // Ensure id not array
        f['@id'] = Array.isArray(f?.['@id']) ? f?.['@id'][0] : f?.['@id']

        // Validate id, skip if ok
        if (recordIDHelpers.validate(f) == true) {
            continue
        }


        // Get standard id
        let newID = recordIDHelpers.getStandardID(f, baseUrl)

        if (newID && f?.['@id'] != newID) {
            let r = {
                "replacer": newID,
                "replacee": f?.['@id']
            }
            replacements.push(r)
        }

        if (!newID && f?.['@id'].startsWith('_:')) {
            let r = {
                "replacer": h.getGenericRecordID(baseUrl),
                "replacee": f?.['@id']
            }
            replacements.push(r)
        }

    }

    // Execute replacement
    value = h.replaceIds(value, replacements)

    //
    return value
}

// -----------------------------------------------------------------------
// Utility
// -----------------------------------------------------------------------

export function clone(value) {

    try {
        value = structuredClone(value)
        return value

    } catch (err) {

    }

    return value
}
