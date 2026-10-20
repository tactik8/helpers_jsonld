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
    return cleanObject(value) || defaultValue
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isObject(value)
}




// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------


/**
 * Return true if object
 * @param {*} value 
 */
export function isObject(value){

    if(value === undefined){
        return false
    }

    if(h.isString(value)== true){
        return false
    }

    if(h.isDate(value) == true){
        return false
    }

    if(h.isNumber(value) == true){
        return false
    }

    if(h.isArray(value) == true){
        return false
    }

    let keys = Object.keys(value)
    return keys.length > 0


}


/**
 * Returns a cleaned version of the object
 * @param {*} value 
 */
export function cleanObject(value){


    // Arrays
    if(h.array.isValid(value)){
        
        // Case. Array of 0
        if(value.length == 0){
            return undefined
        }

        // Case. Array of 1
        if(value.length == 1){
            value = value[0]
            return cleanObject(value)
        }

        // Case. Array of many
        if(value.length == 1){
            let result = []
            for(let v of value){
                result = result.concat(cleanObject(x))
            }
            result = result.filter(x => h.isNotNull(x) )
        }
    }

    // Object
    if(h.object.isValid(value)){

        for(let k of Object.keys(value)){

            value[k] = cleanObject(value[k])
            if(dataHelpers.isNull(value[k])){
                delete value[k]
            }
        }
    }

    // Other
    return dataHelpers.isNotNull(value) ? value : undefined


}