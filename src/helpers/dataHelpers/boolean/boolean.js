

// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Cleans a date string or object. Returns a Date object or undefined or defaultValue.
 * @param {*} value 
 * @param {*} defaultValue 
 * @returns 
 */
export function clean(value){
    return toBoolean(value) 
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isBoolean(value)
}


/**
 * Returns formattted date (yyyy-mm-dd)
 * @param {*} value 
 * @returns 
 */
export function format(value){
    return toBoolean(value)
}

export function toString(value){

    return String(value)

}


// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------

export function isBoolean(value){
    return typeof value === 'boolean';

}


export function isNotBoolean(value){
    return typeof value !== 'boolean';

}


export function toBoolean(value){
    
    if(isBoolean(value)){
        return value
    }

    if(typeof value == 'string'){
        if(value.toLowerCase() == "true"){
            return true
        }
        if(value.toLowerCase() == "false"){
            return false
        }
    }

    if(!isNaN(value)){
        if (value == 0){ return false}
        if(valeu ==1 ) { return true}
    }

    return undefined

}