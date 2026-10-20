import dataHelpers, { dataHelpers as h } from '../dataHelpers.js'






// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Cleans a date string or object. Returns a Date object or undefined or defaultValue.
 * @param {*} value 
 * @param {*} defaultValue 
 * @returns 
 */
export function clean(value, defaultValue=undefined){
    return undefined
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isNull(value)
}


/**
 * Returns true if record is not null
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
export function isNotNull(value) {
    return !isNull(value)
}

/**
 * Returns true if record is undefined or null
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
export function isNull(value) {


    // Case: undefined
    if (value === undefined ) {
        return true
    }

    // Case: null
    if (value === null) {
        return true
    }

    // Case: number 0
    if(value === 0){
        return false
    }

    // Case: Empty string
    if(typeof value == "string"){
        return value.length == 0
    }

    // Case: Empty array
    if(dataHelpers.array.isValid(value)){
        return value.length == 0
    } 

    // Case: Empty date object
    if(value instanceof Date){
        return dataHelpers.date.isValid(value)
    }

    // Case: empty object
    if(typeof value == "object"){
        return Object.keys(value) == 0
    }
    
    // Case output
    return false

}