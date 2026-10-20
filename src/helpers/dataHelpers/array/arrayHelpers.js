import dataHelpers, { dataHelpers as h } from '../dataHelpers.js'





// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Clean array
 * @param {*} value 
 * @returns 
 */
export function clean(value){
    return toArray(value)
}


/**
 * Returns true if array is valid
 * @param {*} value 
 */
export function isValid(value){
    return isArray(value)
}




// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Returns true if array
 * @param {*} value 
 * @returns 
 */
export function isArray(value) {
    if(value === undefined){
        return false
    }
    return Array.isArray(value) && typeof value != "string"
}

/**
 * Converts to array if not one already
 * @param {*} value 
 * @returns 
 */
export function toArray(value) {
    if(isNull(value)){
        return []
    }

    value = isArray(value) ? value : [value]

    value = value.filter(x => x !== undefined)

    return value

}