
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'


const dph = {

    ...comparisonHelpers,
    ...conversionHelpers,
    ...objectHelpers,
    ...propertyShortcut

}


/**
 * Add a datapoint to a list of datapoints
 * @param {Datapoint[]} datapointList 
 * @param {Datapoint[]} value 
 * @returns {Datapoint[]} The updated list of datapoints
 */
export function appendDatapoint(datapointList, value){

    datapointList = h.toArray(datapointList)

    if(h.isArray(value)){
        value.forEach(x => datapointList = appendDatapoint(datapointList, x) )
        return datapointList
    }

    // Remove dupe (if any)
    let record_id = h.record_id(value)
    datapointList = datapointList.filter(x => h.record_id(x) != record_id)

    // Append
    datapointList.push(value)

    return datapointList
    
}

/**
 * Convert a record and add datapoints to the list of datapoints
 * @param {*} datapointList 
 * @param {*} value 
 * @param {*} metadata 
 * @param {*} transactionID 
 * @returns {Datapoint[]} The updated list of datapoints
 */
export function appendRecord(datapointList, value, metadata, transactionID){

    let datapoints = dph.recordToDatapoints(value, metadata, transactionID)

    return appendDatapoint(datapointList, datapoints)

}


/**
 * 
 * @param {*} datapointList 
 * @returns {Datapoint[]} The updated list of datapoints
 */
export function sort(datapointList){

     function sortFn(a, b){
        let record_id1 = h.record_id(a)
        let record_id2 = h.record_id(a)
        if(record_id1 < record_id2){ return -1}
        if(record_id1 > record_id2) { return 1 }

        let p1 = dph.getPropertyID(a)
        let p2 = dph.getPropertyID(b)
        if(p1< p2){ return -1 }
        if(p1 > p2){ return 1 }

        // Inverse sort for others
        if(dph.lt(a, b)){ return 1 }
        if(dph.gt(a, b)){ return -1 }

        return false
     }
     
     datapointList.sort(sortFn)

     return datapointList
}




/**
 * Return datapoints for an id and propertyID(optional)
 * @param {*} datapointList 
 * @param {*} object 
 * @param {*} propertyID 
 * @returns {Datapoint[]} List of sorted datapoints
 */
export function getDatapoints(datapointList, object, propertyID){

    datapointList = h.toArray(datapointList)

    if(datapointList.length == 0){ return []}

    let objectID = h.toRecordID(object)

    if(!objectID){
        return []
    }

    // Filter for same object
    let dps = datapointList.filter(x => dph.getObjectID(x) == objectID)

    // Filter for same propertyID
    if(propertyID){
        dps = dps.filter(x => dph.getPropertyID(x) == propertyID)
    }

    // Compile
    dps = dph.compile(dps)

    // Sort
    dps = sort(dps)

    return dps

}

/**
 * Return datapoints for an id and propertyID(optional)
 * @param {*} datapointList 
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} position 
 * @returns {Datapoint} The datapoint at position (or first)
 */
export function getDatapoint(datapointList, object, propertyID, position){


    let objectID = h.toRecordID(object)

    // Filter for same object
    let dps = datapointList.filter(x => dph.getObjectID(x) == objectID)

    // Filter for same propertyID
    if(propertyID){
        dps = dps.filter(x => dph.getPropertyID(x) == propertyID)
    }

    // Compile
    dps = dph.compile(dps)

    // Sort
    dps = sort(dps)

    return dps?.[position]

}



/**
 * 
 * @param {*} datapointList 
 * @param {*} record_id 
 * @returns {Object}
 */
export function getRecord(datapointList, record_id){

    let records = dph.datapointsToRecord(datapointList)

    let ref = {"@id": record_id}

    return h.expand(records, ref)

}

/**
 * 
 * @param {*} datapointList 
 * @returns {Object[]}
 */
export function getRecords(datapointList){

    let records = dph.datapointsToRecord(datapointList)
    return h.expand(records, records)

}

