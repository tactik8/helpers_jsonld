// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Cleans a date string or object. Returns a Date object or undefined or defaultValue.
 * @param {*} value
 * @param {*} defaultValue
 * @returns
 */
export function clean(value) {
    return toJson(value);
}

/**
 * Returns true if valid
 * @param {*} value
 */
export function isValid(value) {
    return isJson(value);
}

/**
 * Returns formattted date (yyyy-mm-dd)
 * @param {*} value
 * @returns
 */
export function format(value) {
    return toJson(value);
}

// -------------------------------------------------------------------------------------
//
// -------------------------------------------------------------------------------------

export function isJson(value) {
    if (!value) {
        return false;
    }

    if (typeof value !== 'string') {
        return;
    }

    try {
        let r = JSON.parse(value);

        if (r) {
            return true;
        }
    } catch (err) {}
    return false;
}

export function isNotJson(value) {
    return !isJson(value);
}

export function toJson(value) {
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return; // Omit the circular reference
                }
                seen.add(value);
            }
            return value;
        };
    };

    try {
        return JSON.stringify(value, getCircularReplacer(), 4);
    } catch (err) {}

    return undefined;
}

export function fromJson(value){

    try {
        return JSON.parse(value)
    } catch(err){
    
    }

    return undefined

}