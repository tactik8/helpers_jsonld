import { jsonldBase as h } from '../jsonldBase.js';



let DEFAULT_LANGUAGE = 'en-CA';




// -----------------------------------------------------------------------
// Properties
// -----------------------------------------------------------------------


/**
 * Returns list of properties (keys) for an object. If list of objects, returns all properties
 * @param {object | object[]} record - Object or list of object to get properties from
 * @returns {string[]} List of properties (keys)
 */
export function getProperties(record) {
    if (!record) {
        return [];
    }

    if (h.isArray(record)) {
        let k = [];
        for (let r of record) {
            k = k.concat(getProperties(r));
        }
        return [...new Set(k)];
    }

    let k = Object.keys(record?.record || record);

    return k;
}

/**
 * Returns list of properties (keys) for an object. If list of objects, returns all properties
 * @param {object | object[]} record - Object or list of object to get properties from
 * @returns {string[]} List of properties (keys)
 */
export function properties(record){
    return getProperties(record) 
}



/**
 * Returns list of properties (keys) for an object. If list of objects, returns all properties
 * @param {object | object[]} record - Object or list of object to get properties from
 * @returns {string[]} List of properties (keys)
 */
export function keys(record) {
    return getProperties(record);
}


/**
 * Returns list of properties (keys) for an object. If list of objects, returns all properties
 * @param {object | object[]} record - Object or list of object to get properties from
 * @returns {string[]} List of properties (keys)
 */
export function getKeys(record) {
    return getProperties(record);
}



// -----------------------------------------------------------------------
// Values
// -----------------------------------------------------------------------


/**
 * Return a value from record using dot notation. Returns position 0 if missing.
 * Handles @language and @value
 * @param {*} record
 * @param {*} propertyID
 * @param {*} position
 * @param {*} defaultValue
 * @param {*} language
 * @returns
 */
export function getValue(record, propertyID, position, defaultValue, language) {
    let values = getValues(record, propertyID, defaultValue, language);

    //
    position = Number(position);
    if (isNaN(position)) {
        position = 0;
    }

    let value = values?.[position];

    return value ?? defaultValue;
}

/**
 * Set value to a property. Creates path if missing. Handles dot notation.
 *
 * @param {*} record
 * @param {*} propertyID
 * @param {*} value
 * @param {*} position
 * @returns
 */
export function setValue(record, propertyID, value, position, language) {
    // If position specified, insert value in current values, creating missing values as null if required.
    if (position !== undefined) {
        let currentValues = h.getValues(record, propertyID);
        while (currentValues.length - 1 < position) {
            currentValues.push(null);
        }
        currentValues[position] = value;
        value = currentValues;
    }
    return setValues(record, propertyID, value, language);
}

/**
 * Set the value if current value is null / undefined
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} position 
 * @param {*} language 
 */
export function setValueIfNull(record, propertyID, value, position, language){

    let currentValue = getValue(record, propertyID, position)
    if(h.isNull(currentValue) == false){
        return record
    }
    return setValue(record, propertyID, value, position, language)
}

/**
 * Set the value if current value is null / undefined
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} position 
 * @param {*} language 
 */
export function setIfNull(record, propertyID, value, position, language){
    return setValueIfNull(record, propertyID, value, position, language)
}


/**
 * Add values to a property, combining with existing values.
 * @param {*} record - Record to update
 * @param {*} propertyID
 * @param {*} values
 * @returns {object} The record with updated value
 */
export function addValue(record, propertyID, value) {
    return addValues(record, propertyID, value);
}

/**
 * Add values to a property, combining with existing values.
 * @param {*} record - Record to update
 * @param {*} propertyID
 * @param {*} values
 * @returns {object} The record with updated values
 */
export function addValues(record, propertyID, values) {
    let currentValues = h.getValues(record, propertyID);

    values = currentValues.concat(values);

    return setValues(record, propertyID, values);
}

/**
 * Return the values of a dot notation property in a record
 * Handles @language and @value
 * @param {*} record
 * @param {*} propertyID
 * @param {*} defaultValue
 * @param {*} language
 * @returns {array} An array of values for propertyID
 */
export function getValues(record, propertyID, defaultValue, language) {
    // Error
    if (record === undefined) {
        return [];
    }

    // Error
    if (propertyID === undefined || propertyID === null || propertyID == '') {
        return [];
    }

    // Check if thing object
    record = record?.record || record;
   
    // prepare propertyID
    let paths = propertyID.split('.');

    // Iterate until the last path item
    let runningValue = record;
    for (let i = 0; i < paths.length; i++) {
        let [propertyID, position] = getPathFragment(paths[i]);

        // Get value at path and position
        if (propertyID) {
            runningValue = runningValue?.[propertyID];
            runningValue = h.toArray(runningValue);
        }

        // Filter for language (if @language tag)
        runningValue = runningValue.filter(
            (x) =>
                x?.['@language'] == language ||
                x?.['@language'] == DEFAULT_LANGUAGE ||
                x?.['@language'] === undefined,
        );

        // Deal with @value
        runningValue = runningValue.map((x) => x?.['@value'] ?? x);
        runningValue = h.toArray(runningValue);

        // Deal with language
        runningValue = runningValue.map(
            (x) => x?.[language] ?? x?.[DEFAULT_LANGUAGE] ?? x,
        );
        runningValue = h.toArray(runningValue);

        // Get value at position (except if last path element)
        if (i < paths.length - 1) {
            runningValue = runningValue?.[position];
        }
    }

    // Get final path property
    let values = h.toArray(runningValue);

    if (values.length == 0 && defaultValue !== undefined) {
        return defaultValue;
    }
    return values;
}

export function setValues(record, propertyID, value, language) {
    // Check if thing object
    record = record?.record || record;
    //if (record?._isThingClass == true) {
    //    return record.setValues(propertyID, value, language)
    // }

    //

    // prepare propertyID
    let paths = propertyID.split('.');

    // prepare propertyID
    // Iterate
    let runningValue = record || {};

    for (let i = 0; i < paths.length - 1; i++) {
        let [propertyID, position] = getPathFragment(paths[i]);

        // Deal with empty
        runningValue[propertyID] = h.toArray(runningValue?.[propertyID] || []);

        let newRunningValue;

        // Deal with language and ensure it is an array
        if (runningValue?.[propertyID]?.[language]) {
            runningValue[propertyID][language] = h.toArray(
                runningValue?.[propertyID]?.[language],
            );
            newRunningValue = runningValue[propertyID][language];
        } else if (runningValue?.[propertyID]?.[DEFAULT_LANGUAGE]) {
            runningValue[propertyID][DEFAULT_LANGUAGE] = h.toArray(
                runningValue?.[propertyID]?.[DEFAULT_LANGUAGE],
            );
            newRunningValue = runningValue[propertyID][DEFAULT_LANGUAGE];
        } else {
            runningValue[propertyID] =
                h.toArray(runningValue?.[propertyID]) || [];
            newRunningValue = runningValue[propertyID];
        }

        // Ensure it exists and with sufficient numbers
        while (newRunningValue.length - 1 < position) {
            newRunningValue.push({ '@type': 'Thing' });
        }

        // Get with correct position
        runningValue = newRunningValue?.[position];
    }

    // Assign value
    // eslint-disable-next-line no-unused-vars
    let [p, n] = getPathFragment(paths[paths.length - 1]);

    // Ensure array
    runningValue[p] = h.toArray(value);

    return record;
}

/**
 * Inserts a value if not already present
 * @param {*} record
 * @param {*} propertyID
 * @param {*} value
 */
export function insertValue(record, propertyID, value) {
    if (hasValue(record, propertyID, value) == true) {
        return record;
    }

    return addValue(record, propertyID, value);
}

/**
 * Return true if record contains provided value
 * @param {*} record
 * @param {*} propertyID
 * @param {*} value
 * @returns {boolean} True if contains value, false
 */
export function hasValue(record, propertyID, value) {
    let values = getValues(record, propertyID);

    if (values.length == 0) {
        return false;
    }

    for (let v of values) {
        if (h.isSame(v, value)) {
            return true;
        }
    }

    return false;
}

/**
 * Splits dot notation into propertyID and position
 * @param {*} pathFragment 
 * @returns {[string, string]} array of propertyID and position
 */
function getPathFragment(pathFragment) {
    if (pathFragment === undefined) {
        return [undefined, 0];
    }
    let propertyID = pathFragment.split('[')?.[0];
    let position = (pathFragment.split('[')?.[1] || '').split(']')?.[0];
    position = Number(position);
    position = isNaN(position) ? 0 : position;

    return [propertyID, position];
}

// -----------------------------------------------------------------------
// Additional property
// -----------------------------------------------------------------------

/**
 * Get a value stored in additionalProperty
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
export function getAdditionalProperty(record, propertyID) {
    let pvs = h.getValues(record, 'additionalProperty');
    let pv = pvs.find((x) => h.getValue(x, 'propertyID') == propertyID);
    let value = h.getValue(pv, 'value');
    return value;
}

/**
 * Set a value in additionalProperty
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} unitText 
 * @returns 
 */
export function setAdditionalProperty(record, propertyID, value, unitText) {
    let pvs = h.getValues(record, 'additionalProperty');
    pvs = pvs.filter((x) => h.getValue(x, 'propertyID') != propertyID);

    let pv = {
        '@type': 'PropertyValue',
        '@id': h.randomUUID(),
        propertyID: propertyID,
        value: value,
        unitText: unitText
    };
    pvs.push(pv)
    record = h.setValues(record, 'additionalProperty', pvs);
    return record;
}
