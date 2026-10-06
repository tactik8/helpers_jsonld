import { setValues } from '../../jsonldBase/src/propertyHelpers.js'
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
    return toNumber(value) ?? defaultValue
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isNumber(value)
}






// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------


/**
 * Returns a string with the correct number of decimals
 * @param {*} value 
 * @param {*} decimalsLength 
 */
export function format(value, nbOfDecimals){
    return formatDecimals(value, nbOfDecimals)
}

/**
 * Returns a string with the correct number of decimals
 * @param {*} value 
 * @param {*} decimalsLength 
 */
export function formatDecimals(value, decimalsLength){

    value = Number(value)
    if(isNaN(value)){ return undefined }

    if(decimalsLength !== undefined){
        return value.toFixed(decimalsLength)
    }

    return value
}


/**
 * Return true if value is anumber
 * @param {*} value 
 */
export function isNumber(value) {

    if(value === undefined){
        return false
    }

    if(value === ""){
        return false
    }

    value = Number(value)
    return !isNaN(value)

}

/**
 * Return true if value is anumber
 * @param {*} value 
 */
export function isNotNumber(value) {

    return !isNumber(value)

}

/**
 * Ensure a value is a number
 * @param {*} value 
 * @returns 
 */
export function toNumber(value) {
    if(value === undefined){
        return undefined
    }
    value = Number(value)

    if (!isNaN(value)) {
        return value
    }
    return undefined
}
