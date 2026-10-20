import { jsonldBase as h } from '../jsonldBase.js';

/**
 * Returns random uuidv4
 * @returns {string} A random uuidv4
 */
export function randomUUID() {
    // Use native Web Crypto / Node.js 16.7+ API if available
    if (
        typeof crypto !== 'undefined' &&
        typeof crypto.randomUUID === 'function'
    ) {
        return crypto.randomUUID();
    }

    // Cryptographically secure byte generator fallback
    const getRandomByte = () => {
        if (
            typeof crypto !== 'undefined' &&
            typeof crypto.getRandomValues === 'function'
        ) {
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

export function getDataType(value) {
    if (isNull(value)) {
        return 'Undefined';
    }

    if (isArray(value)) {
        return 'Array';
    }

    if (isJsonld(value)) {
        return 'Jsonld';
    }

    let d = toDate(value);
    if (isDate(d)) {
        return 'Date';
    }

    let n = toNumber(value);
    if (isNumber(n)) {
        return 'Number';
    }

    if (isObject(value)) {
        return 'Object';
    }

    if (isString(value)) {
        return 'String"';
    }

    if (isBoolean(value)) {
        return 'Boolean';
    }

    return 'Undefined';
}

/**
 * Returns true if record or property is undefined or null
 * @param {*} record
 * @param {*} propertyID
 * @returns {boolean} True if value is considered undefined but no 0
 */
export function isNull(record, propertyID = undefined) {
    if (record === undefined || record === null) {
        return true;
    }

    if (typeof record == 'string' && record.length == 0) {
        return true;
    }

    // Evalue record as not null if no propertyID given
    if (propertyID === undefined || propertyID === null) {
        return false;
    }

    //
    let values = h.getValues(record, propertyID);

    return values.length == 0;
}

/**
 * Returns true if record or property is not undefined or null
 * @param {*} record
 * @param {*} propertyID
 * @returns
 */
export function isNotNull(record, propertyID = undefined) {
    return !isNull(record, propertyID);
}

export function isBoolean(value) {
    if (value === true || value === false) {
        return true;
    }
    return false;
}

/**
 * Return true if value is anumber
 * @param {*} value
 */
export function isNumber(value) {
    if (isNull(value)) {
        return false;
    }

    if (value === '') {
        return false;
    }

    value = Number(value);
    return !isNaN(value);
}

/**
 * Return true if value is anumber
 * @param {*} value
 */
export function isNotNumber(value) {
    return !isNumber(value);
}

/**
 * Ensure a value is a number
 * @param {*} value
 * @returns
 */
export function toNumber(value) {
    if (isNull(value)) {
        return undefined;
    }
    value = Number(value);

    if (!isNaN(value)) {
        return value;
    }
    return undefined;
}

/**
 * Return true if typeof is string
 * @param {*} value - Value to test if string
 * @returns {boolean} True if string, false
 */
export function isString(value) {
    if (isNull(value)) {
        return false;
    }
    return typeof value == 'string';
}

/**
 * Return true if typeof is not string
 * @param {*} value - Value to test if not string
 * @returns {boolean} True if not string,
 */
export function isNotString(value) {
    return !isString(value);
}

/**
 * Convert a value to string
 * @param {*} value - Value to convert to string
 * @returns {string} String value
 */
export function toString(value) {
    if (isNull(value)) {
        return '';
    }

    if (isString(value)) {
        return value;
    }

    if (h.isValid(value)) {
        return h.exportToString(value);
    }

    if (isDate(value)) {
        return value.toLocaleString();
    }
    if (h.isArray(value)) {
        let content = `Array of ${value.length} items.\n--------------------\n`;
        let i = 0;
        let max = value.length - 1;
        max = max > 8 ? 8 : max;
        for (let i = 0; i < max; i++) {
            content += toString(value[i]) + '\n';
        }
        return content;
    }

    return String(value);
}

/**
 * Returns true if value is Date. Does not convert string to date.
 * @param {*} value - Value to check if date
 * @returns {boolean} True if value is date
 */
export function isDate(value) {
    if (isNull(value)) {
        return false;
    }
    if (value === '') {
        return false;
    }

    return value instanceof Date && !Number.isNaN(value.getTime());
}

/**
 * Returns true if value is not date
 * @param {*} value - Value to check if not date
 * @returns {boolean} True if value is not date
 */
export function isNotDate(value) {
    return !isDate(value);
}

/**
 * Converts a value to DateTime format
 * @param {Date | string | number} value - Value to convert to date
 * @returns {Date | undefined} The value in DateTime format or undefined if not a date. 
 */
export function toDate(value) {
    if (isNull(value)) {
        return undefined;
    }

    if (isDate(value) == true) {
        return value;
    }

    if (!isNaN(Number(value))) {
        return undefined;
    }

    const timestamp = Date.parse(value);
    if (!isNaN(timestamp) == false) {
        return undefined;
    }

    value = new Date(value);
    value = isDate(value) ? value : undefined;

    return value;
}

/**
 * Return true if object
 * @param {*} value - Value to test if it is an object.
 * @returns {boolean} True if object, false
 */
export function isObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;

    if (isNull(value)) {
        return false;
    }

    if (isString(value) == true) {
        return false;
    }

    if (isDate(value) == true) {
        return false;
    }

    if (isNumber(value) == true) {
        return false;
    }

    let keys = Object.keys(value);
    return keys.length > 0;
}

/**
 * Return true if valid jsonld object
 * @param {*} value - Value to test if jsonld object
 * @returns {boolean} True if jsonld object, false
 */
export function isJsonld(value) {
    if (isNull(value)) {
        return false;
    }

    if (value?.['@id'] || value?.['@type']) {
        return true;
    }

    return false;
}

/**
 * Returns true if array
 * @param {*} value - Value to test if array
 * @returns {boolean} True if array, false
 */
export function isArray(value) {
    if (isNull(value)) {
        return false;
    }
    return Array.isArray(value) && typeof value != 'string';
}

/**
 * Converts to array if not one already
 * @param {*} value - Value to convert to array
 * @returns {Array} Array of value
 */
export function toArray(value) {
    if (isNull(value)) {
        return [];
    }

    value = isArray(value) ? value : [value];

    value = value.filter((x) => x != undefined);

    return value;
}

/**
 * Convert value to single, if array, takes first element
 * @param {*} value
 * @returns {*} Single value
 */
export function toSingle(value) {
    value = toArray(value);

    return value?.[0] ?? undefined;
}

/**
 * Returns @id from record or return string
 * @param {*} record_or_id
 */
export function _utilGetId(record_or_id) {
    let value = record_or_id;
    // error handling
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return undefined;
    }

    // if array
    if (h.isArray(value) && value.length == 1) {
        value = value[0];
    }

    // string
    if (h.isString(value)) {
        return value;
    }
    value = h.record_id(value);
    return value ?? undefined;
}
