
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
    return toDate(value) || defaultValue
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isDate(value)
}



// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------

/**
 * Returns true if value is Date object
 * @param {*} value 
 * @returns 
 */
export function isDate(value) {
    if(value === undefined){
        return false
    }
     if(value === ""){
        return false
    }
   
    return value instanceof Date && !Number.isNaN(value.getTime());
}

/**
 * Returns true if value is not date
 * @param {*} value 
 * @returns 
 */
export function isNotDate(value) {
    return !isDate(value)
}

/**
 * Convert a value to a Date object. Returns undefined if no possible.
 * @param {*} value 
 * @returns 
 */
export function toDate(value) {
    if(h.isNull(value)){
        return undefined
    }

    if(isDate(value) == true){
        return value
    }


    if(!isNaN(Number(value))){
        return undefined
    }

    const timestamp = Date.parse(value);
    if(!isNaN(timestamp) == false){
        return undefined
    }


    value = new Date(value)
    value = isDate(value) ? value : undefined

    return value

}
