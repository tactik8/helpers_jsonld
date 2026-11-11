
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'


const dph = {

    ...arrayHelpers,
    ...conversionHelpers,
    ...objectHelpers,
    ...propertyShortcut

}

/**
 * 
 * @param {*} datapoint1 
 * @param {*} datapoint2 
 * @returns 
 */
export function lt(datapoint1, datapoint2) {
    // Skip if part of same transaction
    if (dph.getTransactionID(datapoint1) === dph.getTransactionID(datapoint2)) {
        return false;
    }

    let v1;
    let v2;

    // Confidence
    v1 = dph.getConfidence(datapoint1);
    v2 = dph.getConfidence(datapoint2);

    if (isLessThan(v1, v2)) {
        return true;
    }
    if (isGreaterThan(v1, v2)) {
        return false;
    }

    // source modified date
    v1 = dph.getSourceModifiedDate(datapoint1);
    v2 = dph.getSourceModifiedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return true;
    }
    if (isGreaterThan(v1, v2)) {
        return false;
    }

    // source created date
    v1 = dph.getSourceCreatedDate(datapoint1);
    v2 = dph.getSourceCreatedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return true;
    }
    if (isGreaterThan(v1, v2)) {
        return false;
    }

    // modifiedDate
    v1 = dph.getModifiedDate(datapoint1);
    v2 = dph.getModifiedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return true;
    }
    if (isGreaterThan(v1, v2)) {
        return false;
    }

    // createdDate
    v1 = dph.getCreatedDate(datapoint1);
    v2 = dph.getCreatedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return true;
    }
    if (isGreaterThan(v1, v2)) {
        return false;
    }


    // counter (for when values created at the same time)
    v1 = dph.getCounter(datapoint1);
    v2 = dph.getCounter(datapoint2);

    if (isLessThan(v1, v2)) {
        return true;
    }
    if (isGreaterThan(v1, v2)) {
        return false;
    }


    //

    return false;
}


/**
 * 
 * @param {*} datapoint1 
 * @param {*} datapoint2 
 * @returns 
 */
export function gt(datapoint1, datapoint2) {
    // Skip if part of same transaction
    if (dph.getTransactionID(datapoint1) === dph.getTransactionID(datapoint2)) {
        return false;
    }

    let v1;
    let v2;

    // Confidence
    v1 = dph.getConfidence(datapoint1);
    v2 = dph.getConfidence(datapoint2);

    if (isLessThan(v1, v2)) {
        return false;
    }
    if (isGreaterThan(v1, v2)) {
        return true;
    }

    // source modified date
    v1 = dph.getSourceModifiedDate(datapoint1);
    v2 = dph.getSourceModifiedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return false;
    }
    if (isGreaterThan(v1, v2)) {
        return true;
    }

    // source created date
    v1 = dph.getSourceCreatedDate(datapoint1);
    v2 = dph.getSourceCreatedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return false;
    }
    if (isGreaterThan(v1, v2)) {
        return true;
    }

    // modifiedDate
    v1 = dph.getModifiedDate(datapoint1);
    v2 = dph.getModifiedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return false;
    }
    if (isGreaterThan(v1, v2)) {
        return true;
    }

    // createdDate
    v1 = dph.getCreatedDate(datapoint1);
    v2 = dph.getCreatedDate(datapoint2);

    if (isLessThan(v1, v2)) {
        return false;
    }
    if (isGreaterThan(v1, v2)) {
        return true;
    }

    // counter (for when values created at the same time)
    v1 = dph.getCounter(datapoint1);
    v2 = dph.getCounter(datapoint2);

    if (isLessThan(v1, v2)) {
        return false;
    }
    if (isGreaterThan(v1, v2)) {
        return true;
    }

    return false;
}







/**
 * Compile datapoints, leeping only the active ones.
 * @param {Datapoint[]} datapoints - List of datapoints to compile
 * @returns {Daatapoint[]} The active datapoints
 */
export function compile(datapoints) {
    datapoints = h.toArray(datapoints);

    //
    let filteredDatapoints = [...datapoints];

    for (let i = 0; i < filteredDatapoints.length; i++) {
        for (let ii = 0; ii < filteredDatapoints.length; ii++) {
            let dp1 = filteredDatapoints[i];
            let dp2 = filteredDatapoints[ii];

            if(i == ii){
                continue
            }


            if (dp1 === undefined || dp2 === undefined) {
                continue;
            }

            if (evaluateOverwrite(dp1, dp2) == true) {
                filteredDatapoints[ii] = undefined;
                continue;
            }

            if (evaluateOverwrite(dp2, dp1) == true) {
                filteredDatapoints[i] = undefined;
                break;
            }
        }
    }

    filteredDatapoints = filteredDatapoints.filter((x) => x !== undefined);


    return filteredDatapoints;
}

/**
 * Returns true if datapoint1 overwrites datapoint 2
 * @param {*} datappint1
 * @param {*} datapoint2
 * @returns {Boolean} True if dp1 overwrites dp2
 */
export function evaluateOverwrite(datapoint1, datapoint2) {

    if(datapoint1 === undefined){
        return false
    }

    if (!dph.isDatapoint(datapoint1)) {
        return false;
    }
    if (!dph.isDatapoint(datapoint2)) {
        return true;
    }

    if(h.record_id(datapoint1) == h.record_id(datapoint2)){
        return false
    }


    if (dph.getTransactionID(datapoint1) === dph.getTransactionID(datapoint2)) {
        return false;
    }

    // Check same record id
    let object1 = dph.getObject(datapoint1);
    let object2 = dph.getObject(datapoint2);

    if (h.record_id(object1) != h.record_id(object2)) {
        return false;
    }

    // Check smae propertyID
    let propertyID1 = dph.getPropertyID(datapoint1);
    let propertyID2 = dph.getPropertyID(datapoint2);
    if (propertyID1 != propertyID2) {
        return false;
    }

    let operation1 = dph.getOperation(datapoint1);
    //let operation2 = dph.getOperation(datapoint2);

    let value1 = dph.getPropertyValue(datapoint1);
    let value2 = dph.getPropertyValue(datapoint2);

    let replacee1 = dph.getReplacee(datapoint1);

    let result
    // Delete
    if (operation1 == 'Delete') {
        // Skip if not same value
        if (h.isEqual(value1, value2) == false) {
            return false;
        }
         result = gt(datapoint1, datapoint2);
    }

    // Replace
    if (operation1 == 'Replace') {
        // Skip if not same value
        if (h.isEqual(replacee1, value2) == false) {
            result = false;
        } else {
            result = gt(datapoint1, datapoint2);
        }
    }

    //
    if (operation1 == 'Create') {
        result = gt(datapoint1, datapoint2);
    }

    if (operation1 == 'Update') {
        result = gt(datapoint1, datapoint2);
    }

    if (operation1 == 'Remove') {
        result = gt(datapoint1, datapoint2);
    }

    if (operation1 == 'Insert') {
        result = false;
    }

    return result
}






function isLessThan(v1, v2) {
    if (v2 === undefined && v2 === undefined) {
        return false;
    }
    if (v1 !== undefined && v2 === undefined) {
        return false;
    }
    if (v1 === undefined && v2 !== undefined) {
        return true;
    }

    return v1 < v2;
}
function isGreaterThan(v1, v2) {
    if (v2 === undefined && v2 === undefined) {
        return false;
    }
    if (v1 !== undefined && v2 === undefined) {
        return false;
    }
    if (v1 === undefined && v2 !== undefined) {
        return false;
    }
    return v1 > v2;
}