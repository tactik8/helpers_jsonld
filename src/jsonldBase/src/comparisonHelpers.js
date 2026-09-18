

import { dotHelpers as dot } from '../../dotHelpers/dotHelpers.js'

import { jsonldBase as h } from '../jsonldBase.js'

import * as he from './expansionHelpers.js'



/**
 * Return true if two values have same id or are equal
 * @param {*} value1 
 * @param {*} value2 
 * @returns 
 */
export function isSame(value1, value2) {

    value1 = h.record_id(value1) ?? value1
    value2 = h.record_id(value2) ?? value2

    // undefined
    if (value1 == undefined && value2 == undefined) {
        return true
    }

    if (value1 != undefined && value2 == undefined) {
        return false
    }

    if (value1 == undefined && value2 != undefined) {
        return false
    }

    // numbers
    if (!isNaN(value1) && !isNaN(value2)) {
        return value1 == value2
    }

    // strings
    if (typeof value1 == 'string' && typeof value2 == 'string') {
        return value1 == value2
    }

    // Date
    if (value1 instanceof Date && value2 instanceof Date) {
        return value1 == value2
    }

    // other
    try {
        value1 = JSON.stringify(value1)
    } catch { }
    try {
        value2 = JSON.stringify(value2)
    } catch { }

    return value1 == value2


}





/**
 * Returns true if exatly equal (not just @id)
 * @param {*} value1 
 * @param {*} value2 
 * @returns 
 */
export function eq(value1, value2) {

    if (value1 === undefined && value2 === undefined) {
        return true
    }
    if (value1 !== undefined && value2 === undefined) {
        return false
    }
    if (value1 === undefined && value2 !== undefined) {
        return false
    }

    if (value1 === null && value2 === null) {
        return true
    }
    if (value1 !== null && value2 === null) {
        return false
    }
    if (value1 === null && value2 !== null) {
        return false
    }

    // Clean
    value1 = h.clean(value1)
    value2 = h.clean(value2)

    // Strip child records
    value1 = h.strip(value1)
    value2 = h.strip(value2)


    try {
        value1 = JSON.stringify(value1, Object.keys(value1).sort(), 0)
    } catch { }

    try {
        value2 = JSON.stringify(value2, Object.keys(value2).sort(), 0)
    } catch { }



    return value1 == value2

}




/**
 * Returns true if two values are exactly equal
 * 
 */
export function isEqual(a, b) {

    const sortedReplacer = (key, value) => {
        if (value instanceof Object && !(value instanceof Array)) {
            return Object.keys(value)
                .sort()
                .reduce((sorted, k) => {
                    sorted[k] = value[k];
                    return sorted;
                }, {});
        }
        return value;
    };


    try {
        a = JSON.stringify(a, sortedReplacer, 4)
    } catch { }
    try {
        b = JSON.stringify(b, sortedReplacer, 4)
    } catch { }

    return a == b

}


/**
 * Returns true if a is less than b. Support object, any
 * @param {*} a 
 * @param {*} b 
 */
export function lt(a, b) {

    if (a == undefined && b == undefined) {
        return false
    }

    // Handle numbers
    if (!isNaN(a) && !isNaN(b)) {
        return a < b
    }

    // handle jsonld
    if (a?.["@id"] != undefined && b?.["@id"] != undefined) {
        return a?.['@id'] < b?.['@id']
    }
    if (a?.['@id'] != undefined && b?.['@id'] == undefined) {
        return false
    }
    if (a?.['@id'] == undefined && b?.['@id'] != undefined) {
        return false
    }

    try {
        a = JSON.stringify(a)
    } catch { }
    try {
        b = JSON.stringify(b)
    } catch { }

    return a < b

}


/**
 * Returns true if a is less or equal than b. Support object, any
 * @param {*} a 
 * @param {*} b 
 */
export function le(a, b) {

    if (a == undefined && b == undefined) {
        return false
    }

    // Handle numbers
    if (!isNaN(a) && !isNaN(b)) {
        return a <= b
    }

    // handle jsonld
    if (a?.["@id"] != undefined && b?.["@id"] != undefined) {
        return a?.['@id'] <= b?.['@id']
    }
    if (a?.['@id'] != undefined && b?.['@id'] == undefined) {
        return false
    }
    if (a?.['@id'] == undefined && b?.['@id'] != undefined) {
        return false
    }

    try {
        a = JSON.stringify(a)
    } catch { }
    try {
        b = JSON.stringify(b)
    } catch { }

    return a <= b

}



/**
 * Returns true if a is greater than b. Support object, any
 * @param {*} a 
 * @param {*} b 
 */
export function gt(a, b) {

    if (a == undefined && b == undefined) {
        return false
    }

    // Handle numbers
    if (!isNaN(a) && !isNaN(b)) {
        return a > b
    }

    // handle jsonld
    if (a?.["@id"] != undefined && b?.["@id"] != undefined) {
        return a?.['@id'] > b?.['@id']
    }
    if (a?.['@id'] != undefined && b?.['@id'] == undefined) {
        return false
    }
    if (a?.['@id'] == undefined && b?.['@id'] != undefined) {
        return false
    }

    try {
        a = JSON.stringify(a)
    } catch { }
    try {
        b = JSON.stringify(b)
    } catch { }

    return a > b

}


/**
 * Returns true if a is greater or equal than b. Support object, any
 * @param {*} a 
 * @param {*} b 
 */
export function ge(a, b) {

    if (a == undefined && b == undefined) {
        return false
    }

    // Handle numbers
    if (!isNaN(a) && !isNaN(b)) {
        return a >= b
    }

    // handle jsonld
    if (a?.["@id"] != undefined && b?.["@id"] != undefined) {
        return a?.['@id'] >= b?.['@id']
    }

    if (a?.['@id'] != undefined && b?.['@id'] == undefined) {
        return false
    }
    if (a?.['@id'] == undefined && b?.['@id'] != undefined) {
        return false
    }

    try {
        a = JSON.stringify(a)
    } catch { }
    try {
        b = JSON.stringify(b)
    } catch { }

    return a >= b

}


/**
 * Returns has for object (only the parent if includeChildren==false (default))
 * @param {} o 
 * @param {boolean} [includeChildren=false] 
 * @returns 
 */
export function getHash(o, includeChildren = false) {


    // Simplify
    o = he.simplify(o)

    // Keep only parent
    if (includeChildren == false) {
        o = he.strip(o)
    }


    const c = (v) => v && typeof v === 'object' && !Array.isArray(v)
        ? Object.keys(v).sort().reduce((a, k) => ({ ...a, [k]: c(v[k]) }), {})
        : Array.isArray(v) ? v.map(c) : v;
    const s = JSON.stringify(c(o));
    const n = globalThis.process?.versions?.node && globalThis.require?.('crypto');
    if (n) return n.createHash('sha256').update(s).digest('hex');
    let h = 5381, i = s.length;
    while (i) h = (h * 33) ^ s.charCodeAt(--i);
    return (h >>> 0).toString(16);
};


/**
 * Returns has for object (only the parent)
 * @param {} o 
 * @returns 
 */
export function getHashNested(o) {
    return getHash(o, true)
};




export function getDiff(obj1, obj2) {
    if (obj1 === obj2) return null; // No difference

    // If either isn't an object (or is null), return the target value
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return obj2;
    }

    const diff = {};

    // Check keys in obj1 (handles changes and deletions)
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) {
                diff[key] = { removed: obj1[key] };
            } else {
                const nestedDiff = getDiff(obj1[key], obj2[key]);
                if (nestedDiff !== null) {
                    diff[key] = nestedDiff;
                }
            }
        }
    }

    // Check keys in obj2 (handles additions)
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
            diff[key] = { added: obj2[key] };
        }
    }

    return Object.keys(diff).length > 0 ? diff : null;
};