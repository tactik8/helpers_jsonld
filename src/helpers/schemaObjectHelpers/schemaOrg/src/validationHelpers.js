import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js';
import { dataHelpers as dh } from '../../../dataHelpers/dataHelpers.js';

import * as ph from './propertyHelpers.js';
import * as ch from './classHelpers.js';

/**
 *
 * @param {String | Object} propertyID - PropertyID or value if no propertyID.
 * @param {*} value
 * @returns {boolean}
 */
export function isValid(propertyID, value) {
    
    let actions = validate(propertyID, value)


    let result = actions.every(x => h.isCompleted(x) )


    return result
}

/**
 *
 * @param {String | Object} propertyID - PropertyID or value if no propertyID.
 * @param {*} value
 * @returns {Action[]}
 */
export function validate(propertyID, value) {
    if (h.isObject(propertyID)) {
        return validateClass(propertyID);
    }

    return validatePropertyValue(propertyID, value);
}

export function validateClass(value) {
    let action;
    let actions = [];

    if (h.isArray(value)) {
        for (let v of value) {
            actions = actions.concat(validateClass(v));
        }
        return actions;
    }

    // Verify is undefined
    action = {
        '@type': 'Action',
        name: 'Verify if value is undefined (valid).',
        "object": value,
        actionStatus: 'CompletedActionStatus',
    };
    actions.push(action);
    if (value === undefined) {
        return actions;
    }

    // Validate if object
    action = {
        '@type': 'Action',
        name: 'Validate if object',
        "object": value,
        actionStatus: 'CompletedActionStatus',
    };
    actions.push(action);

    if (!h.isObject(value)) {
        action.actionStatus = 'FailedActionStatus';
        action.error = 'Value is not an object: ' + String(value);
        return actions;
    }

    // Check if non allowed properties
    action = {
        '@type': 'Action',
        name: 'Validate properties',
        "object": value,
        actionStatus: 'CompletedActionStatus',
    };
    actions.push(action);

    let allowedProperties = ph.getProperties(h.record_type(value));
    let currentProperties = h.properties(value);
    let extraProperties = currentProperties.filter(
        (x) => !allowedProperties.includes(x),
    );
    extraProperties = extraProperties.filter((x) => !x.startsWith('@'));

    if (extraProperties.length > 0) {
        action.actionStatus = 'FailedActionStatus';
        action.error =
            'Invalid properties detected: ' + extraProperties.join(', ');
        return actions;
    }

    // Check nested values
    for (let k of Object.keys(value)) {
        if(k.startsWith('@')){ continue }
        actions = actions.concat(validatePropertyValue(k, value[k]));
    }

    //
    return actions;
}

export function validatePropertyValue(propertyID, value) {
    let action;
    let actions = [];

    if (h.isArray(value)) {
        for (let v of value) {
            actions = actions.concat(validatePropertyValue(propertyID, v));
        }
        return actions;
    }

    // Verify is undefined
    action = {
        '@type': 'Action',
        name: 'Verify if value is undefined (valid).',
        "object": {
            "@type": "PropertyValue",
            "propertyID": propertyID,
            'value': value
        },
        actionStatus: 'CompletedActionStatus',
    };
    actions.push(action);
    if (value === undefined) {
        return actions;
    }

    // Verify types
    action = {
        '@type': 'Action',
        name: 'Verify if value matches datatype.',
        "object": {
            "@type": "PropertyValue",
            "propertyID": propertyID,
            'value': value
        },
        actionStatus: 'CompletedActionStatus',
    };
    actions.push(action);

    let types = ph.getTypes(propertyID);

    for (let t of types) {
        if (t == 'Boolean') {
            if (dh.isBoolean(value) == true) {
                return actions;
            }
        } 
        else if (t == 'Date') {
            if (dh.isDate(value) == true) {
                return actions;
            }
        } 
        else if (t == 'DateTime') {
            if (dh.isDate(value) == true) {
                return actions;
            }
        } 
        else if (t == 'Integer') {
            if (dh.isNumber(value) == true) {
                return actions;
            }
        } 
        else if (t == 'Number') {
            if (dh.isNumber(value) == true) {
                return actions;
            }
        } 
        else if (t == 'Quantity') {
            if (dh.isNumber(value) == true) {
                return actions;
            }
        }
        else if (t == 'Text') {
            if (dh.isString(value) == true) {
                return actions;
            }
        } 
        else if (t == 'Time') {
            if (dh.isDate(value) == true) {
                return actions;
            }
        }
        else if (t == 'URL') {
            if (dh.isUrl(value) == true) {
                return actions;
            }
        } else {
            // Is same class
            if (h.record_type(value) == t) {
                return actions.concat(validateClass(value));
            }
            // if children class
            if (ch.getChildren(h.record_type(value)).includes(h.record_type(value))) {
                return actions.concat(validateClass(value));
            }
            // If ref record, assume @type is ok
            if (h.isRef(value)) {
                return actions;
            }
        }
    }

    let t = dh.getDataType(value);
    action.actionStatus = 'FailedActionStatus';
    action.error = `Wrong datatype. Current: ${t} Allowed: ${types.join(', ')} value: ${String(value)}`;
    return actions;
}
