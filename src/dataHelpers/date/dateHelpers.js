
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

/**
 * Returns formattted date (yyyy-mm-dd)
 * @param {*} value 
 * @returns 
 */
export function formatDate(value, includeTime=false){

    value = toDate(value)
    if(isDate(value)=== false){ return undefined }


    const d = value
    const yyyy = String(d.getFullYear()).padStart(4, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');

    let content =  `${yyyy}-${mm}-${dd}`

    

    if(includeTime == true ){
        const thh = String(d.getHours()).padStart(2, 0)
        const tmm = String(d.getMinutes()).padStart(2, 0)
        const tss = String(d.getSeconds()).padStart(2, 0)
        content = content + ` ${thh}:${tmm}:${tss}`
    }


    return content
}