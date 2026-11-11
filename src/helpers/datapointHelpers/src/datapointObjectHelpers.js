
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'


const dph = {

    ...arrayHelpers,
    ...comparisonHelpers,
    ...conversionHelpers,
    ...objectHelpers,
    ...propertyShortcut

}


let COUNTER = 0



/**
 * Return true if object is datapoint
 * @param {*} value The object to evaluate.
 * @returns {Boolean} The result
 */
export function isValid(value){
    return isDatapoint(value)
}


/**
 * Return true if object is datapoint
 * @param {*} value The object to evaluate.
 * @returns {Boolean} The result
 */
export function isDatapoint(value) {
    return h.record_type(value) == 'dp:Datapoint';
}

/**
 * Converts to datapoint
 * @param {Object | Object[]} value - The value to convert to datapoint.
 * @param {Object | undefined} metadata - The metadata associated to datapoint ()
 * @param {Stirng} transactionID - The transactionID associated with data.
 * @returns 
 */
export function toDatapoint(value, metadata, transactionID){
        return dph.recordToDatapoints(value, metadata, transactionID)
}




// ---------------------------------------------------------------
// CRUD new objects
// ---------------------------------------------------------------
/**
 * Returns a new create datapoint object
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns 
 */
export function newCreate(object, propertyID, value, metadata, transactionID) {
    let operation = 'Create';
    return newDatapoint({
        operation,
        object,
        propertyID,
        value,
        metadata, 
        transactionID,
    });
}

/**
 * Returns a new update datapoint object
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} replacee 
 * @param {*} replacer 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns 
 */
export function newUpdate(
    object,
    propertyID,
    replacee,
    replacer,
    metadata, 
    transactionID,
) {
    let operation = 'Update';
    let value = replacer;
    return newDatapoint({
        operation,
        object,
        propertyID,
        replacee,
        value,
        metadata, 
        transactionID,
    });
}

/**
 * Returns a new replace datapoint object
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} replacee 
 * @param {*} replacer 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns 
 */
export function newReplace(
    object,
    propertyID,
    replacee,
    replacer,
    metadata, 
    transactionID,
) {
    let operation = 'Replace';
    let value = replacer;
    return newDatapoint({
        operation,
        object,
        propertyID,
        replacee,
        value,
        metadata, 
        transactionID,
    });
}

/**
 * Returns a new insert datapoint object
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns 
 */
export function newInsert(object, propertyID, value, metadata, transactionID) {
    let operation = 'Insert';
    return newDatapoint({
        operation,
        object,
        propertyID,
        value,
        metadata, 
        transactionID,
    });
}

/**
 * 
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns 
 */
export function newRemove(object, propertyID, value, metadata, transactionID) {
    let operation = 'Remove';
    return newDatapoint({
        operation,
        object,
        propertyID,
        value,
        metadata, 
        transactionID,
    });
}

/**
 * 
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns 
 */
export function newDelete(object, propertyID, value, metadata, transactionID) {
    let operation = 'Delete';
    return newDatapoint({
        operation,
        object,
        propertyID,
        value,
        metadata, 
        transactionID,
    });
}

/**
 * Return a new datapoint object
 * @param {*} param0 
 * @returns 
 */
export function newDatapoint({
    operation,
    object,
    propertyID,
    value,
    replacee,
    source,
    metadata, 
    transactionID,
}) {

    metadata = metadata || {}

    for(let k of Object.keys(metadata)){
        if(!k.startsWith('dp:')){
            metadata['dp:' + k] = metadata[k]
            delete metadata[k]
        }
    }

    let r = {
        '@type': 'dp:Datapoint',
        '@id': h.randomUUID() + '#datapoint',
        'dp:object': h.ref(object),
        'dp:propertyID': propertyID,
        'dp:value': value,
        'dp:operation': operation,
        'dp:replacee': replacee,
        'dp:source': source,
        'dp:transactionID': transactionID,
        'dp:createdDate': new Date().toISOString(),
        'dp:counter': ++COUNTER
    };

    r = { ...r, ...metadata}

    return r
}
