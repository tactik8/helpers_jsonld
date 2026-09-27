

import { jsonldBase as h } from '../jsonldBase.js'


/**
 * Returns random uuidv4
 * @returns 
 */
export function randomUUID() {
    // Use native Web Crypto / Node.js 16.7+ API if available
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }

    // Cryptographically secure byte generator fallback
    const getRandomByte = () => {
        if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
            return crypto.getRandomValues(new Uint8Array(1))[0];
        }
        return Math.floor(Math.random() * 256);
    };

    // Generate UUID v4 (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const randomHex = getRandomByte() % 16;
        const value = char === 'x' ? randomHex : (randomHex & 0x3) | 0x8;
        return value.toString(16);
    });


}




export function getDataType(value){

    if(isNull(value)){
        return "Undefined"
    }

    if(isArray(value)){
        return "Array"
    }

    if(isJsonld(value)){
        return "Jsonld"
    }


    let d = toDate(value)
    if(isDate(d)){
        return 'Date'
    }

    let n = toNumber(value)
    if(isNumber(n)){
        return "Number"
    }

    

    if(isObject(value)){
        return "Object"
    }

    if(isString(value)){
        return 'String"'
    }

    if(isBoolean(value)){
        return "Boolean"
    }

    return 'Undefined'

}


/**
 * Returns true if record or property is undefined or null
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
export function isNull(record, propertyID = undefined) {


    if (record === undefined || record === null) {
        return true
    }

    if(typeof record == "string" && record.length == 0){
        return true
    }


    // Evalue record as not null if no propertyID given
    if (propertyID === undefined || propertyID === null) {
        return false
    }

    // 
    let values = h.getValues(record, propertyID)

    return values.length == 0

}

/**
 * Returns true if record or property is not undefined or null
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
export function isNotNull(record, propertyID = undefined) {

    return !isNull(record, propertyID)
}


export function isBoolean(value){
    if(value === true || value === false){
        return true
    }
    return false
}



/**
 * Return true if value is anumber
 * @param {*} value 
 */
export function isNumber(value) {

    if(isNull(value)){
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
    if(isNull(value)){
        return undefined
    }
    value = Number(value)

    if (!isNaN(value)) {
        return value
    }
    return undefined
}


/**
 * Return true if typeof is string
 * @param {*} value 
 */
export function isString(value) {
    if(isNull(value)){
        return false
    }
    return typeof value == 'string'
}

/**
 * Return true if typeof is string
 * @param {*} value 
 */
export function isNotString(value) {
    return !isString(value)
}

/**
 * Convert to string
 * @param {*} value 
 */
export function toString(value){
    if(isNull(value)){
        return ""
    }

    if(isString(value)){
        return value
    }

    if(h.isValid(value)){
        return h.exportToString(value)
    }

    if(isDate(value)){
        return value.toLocaleString() 
    }
    if(h.isArray(value)){
        let content = `Array of ${value.length} items.\n--------------------\n`
        let i =0
        let max = value.length -1
        max = max > 8 ? 8 : max
        for(let i =0; i < max; i ++){
            content += toString(value[i]) + '\n'
        }
        return content
    }

    return String(value)

}


/**
 * Returns true if value is Date
 * @param {*} value 
 * @returns 
 */
export function isDate(value) {
    if(isNull(value)){
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

export function toDate(value) {
    if(isNull(value)){
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
 * Return true if object
 * @param {*} value 
 */
export function isObject(value){

    if(isNull(value)){
        return false
    }

    if(isString(value)== true){
        return false
    }

    if(isDate(value) == true){
        return false
    }

    if(isNumber(value) == true){
        return false
    }

    let keys = Object.keys(value)
    return keys.length > 0


}


/**
 * Return true if object
 * @param {*} value 
 */
export function isJsonld(value){

    if(isNull(value)){
        return false
    }

    if(value?.['@id'] || value?.["@type"]){
        return true
    }


    return false
}



/**
 * Returns true if array
 * @param {*} value 
 * @returns 
 */
export function isArray(value) {
    if(isNull(value)){
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

    value = value.filter(x => x != undefined)

    return value

}

/**
 * Convert value to single, if array, takes first element
 * @param {*} value 
 * @returns 
 */
export function toSingle(value) {

    value = toArray(value)

    return value?.[0] ?? undefined

}


/**
 * Returns @id from record or return string
 * @param {*} record_or_id 
 */
export function _utilGetId(record_or_id) {

    // error handling
    if (record_or_id === undefined) { return undefined }
    if (record_or_id === null) { return undefined }


    //
    let value = h.record_id(record_or_id) ?? record_or_id
    value = h.isArray(value) ? value[0] : value
    return value ?? undefined
}




