

import { dotHelpers as dot } from '../../dotHelpers/dotHelpers.js'

import { jsonldBase as h} from '../jsonldBase.js'




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
