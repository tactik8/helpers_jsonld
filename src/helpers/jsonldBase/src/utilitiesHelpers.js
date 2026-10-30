import { jsonldBase as h } from '../jsonldBase.js';

import { dataHelpers } from '../../dataHelpers/dataHelpers.js';

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
 * Returns true if value or property is undefined or null
 * @param {*} value
 * @param {*} propertyID
 * @returns {boolean} True if value is considered undefined but no 0
 */
export function isNull(value) {
    return dataHelpers.isNull(value);
}

/**
 * Returns true if record or property is not undefined or null
 * @param {*} record
 * @param {*} propertyID
 * @returns
 */
export function isNotNull(value) {
    return dataHelpers.isNotNull(value);
}

export function isBoolean(value) {
    return dataHelpers.isBoolean(value);
}
export function isNotBoolean(value) {
    return dataHelpers.isNotBoolean(value);
}
export function toBoolean(value) {
    return dataHelpers.toBoolean(value);
}

export function isNumber(value) {
    return dataHelpers.isNumber(value);
}
export function isNotNumber(value) {
    return dataHelpers.isNotNumber(value);
}
export function toNumber(value) {
    return dataHelpers.toNumber(value);
}

export function isString(value) {
    return dataHelpers.isString(value);
}
export function isNotString(value) {
    return dataHelpers.isNotString(value);
}
export function toString(value) {
    return dataHelpers.toString(value);
}

export function isDate(value) {
    return dataHelpers.isDate(value);
}
export function isNotDate(value) {
    return dataHelpers.isNotDate(value);
}
export function toDate(value) {
    return dataHelpers.toDate(value);
}

export function isObject(value) {
    return dataHelpers.isObject(value);
}
export function isNotObject(value) {
    return dataHelpers.isNotObject(value);
}
export function toObject(value) {
    return dataHelpers.toObject(value);
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


export function isArray(value) {
   return dataHelpers.isArray(value)
}
export function isNotArray(value) {
   return dataHelpers.isNotArray(value)
}
export function toArray(value) {
   return dataHelpers.toArray(value)
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
