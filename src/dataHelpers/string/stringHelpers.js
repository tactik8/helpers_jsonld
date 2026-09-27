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
export function clean(value, defaultValue=""){
    return cleanString(value) || defaultValue
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isString(value)
}





// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Returns true if string
 * @param {*} value 
 */
export function isString(value){

    return typeof value == 'string'
    
}

/**
 * Returns string clean
 * @param {*} value 
 */
export function toString(value){

    if(typeof value == 'string'){
        return value
    }

    let r = value?.toString()
    if(r !== undefined){
        return r
    }

    return String(value)
    
}


/**
 * Returns string clean
 * @param {*} value 
 */
export function cleanString(value){

    if(!isString(value)){
        return undefined
    }
    
    value = value.trim()

    return value

}


