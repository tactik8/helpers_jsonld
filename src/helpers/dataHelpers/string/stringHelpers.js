import dataHelpers, { dataHelpers as h } from '../dataHelpers.js'



// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Cleans a string value and returns it, or returns defaultValue if invalid.
 * @param {*} value 
 * @param {string} defaultValue 
 * @returns {string}
 */
export function clean(value, defaultValue=""){
    return cleanString(value) || defaultValue
}


/**
 * Checks if a value is a string.
 * @param {*} value 
 * @returns {boolean}
 */
export function isValid(value) {
    return isString(value) && value.trim().length >= 0;
}





/**
 * Truncates a string by cutting out the middle section.
 * @param {string} str 
 * @param {number} [maxLength] 
 * @returns {string}
 */
export function maxLengthMiddle(str, maxLength) {
    if (str === undefined || str === null) return "";
    const text = String(str);

    if (maxLength === undefined || maxLength < 0 || text.length <= maxLength) {
        return text;
    }

    if (maxLength <= 3) {
        return text.substring(0, maxLength);
    }

    const startLength = Math.round(maxLength / 3);
    const endLength = maxLength - startLength - 3;
    return text.substring(0, startLength) + "..." + text.substring(text.length - endLength);
}

/**
 * Truncates a string at the end with an ellipsis.
 * @param {string} str 
 * @param {number} [maxLength] 
 * @returns {string}
 */
export function maxLengthEnd(str, maxLength) {
    if (str === undefined || str === null) return "";
    const text = String(str);

    if (maxLength === undefined || maxLength < 0 || text.length <= maxLength) {
        return text;
    }

    if (maxLength <= 3) {
        return text.substring(0, maxLength);
    }

    return text.substring(0, maxLength - 3) + "...";
}



// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Returns true if the value is a primitive string or String object.
 * @param {*} value 
 * @returns {boolean}
 */
export function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

/**
 * Safely converts any value to its string representation.
 * Handles null, undefined, primitives, and objects safely.
 * @param {*} value 
 * @returns {string}
 */
export function toString(value) {
    if (value === null || value === undefined) {
        return "";
    }
    return String(value);
}


/**
 * Trims a string value. Returns undefined if non-string after trimming.
 * @param {*} value 
 * @returns {string|undefined}
 */
export function cleanString(value) {
    if (!isString(value)) {
        return undefined;
    }
    const trimmed = value.trim();
    return trimmed
}

