import { jsonldBase as h } from '../jsonldBase.js';

let counter = 0

export class DatapointDB{
    constructor(datapoints){
        this._datapoints = []
        this.add(datapoints)
    }



    // Datapoints
    get datapoints(){
        return this._datapoints
    }

    set datapoints(value){
        this._datapoints = h.toArray(value)
    }

    get datapointIDs(){
        return this._datapoints.map(x => h.record_id(x))
    }

    /**
     * Add datapoint record to db.
     * @param {*} value 
     */
    addDatapoint(value){
        this._datapoints = appendDatapoint(this._datapoints, value)
    }


    // Record
    getRecord(record_id){
        return getRecord(this._datapoints, record_id)
    }

     /**
     * 
     * @param {*} record_id 
     */
    get(record_id){
        return this.getRecord(record_id)
    }

    getRecords(){
        return getRecords(this._datapoints)
    }

    get records(){
        return getRecords(this._datapoints)
    }

    /**
     * Convert record to datapoint and add to db.
     * @param {*} value 
     * @param {*} metadata 
     * @returns 
     */
    addRecord(value, metadata, transactionID){
        this._datapoints = appendRecord(this._datapoints, value, metadata, transactionID)
    }

     /**
     * Add record or datapoint to db
     * @param {*} value 
     * @returns 
     */
    add(value, metadata, transactionID){
        this._datapoints = appendRecord(this._datapoints, value, metadata, transactionID)
    }

    // Values

    getValue(object, propertyID){
        return getValue(this._datapoints, object, propertyID)
    }

    getValues(object, propertyID){
        return getValues(this._datapoints, object, propertyID)
        //return h.getValues(getRecord(object), propertyID)
    }


    setValue(object, propertyID, value, metadata, transactionID){
        return setValue(this._datapoints, object, propertyID, value, metadata, transactionID)
      //  transactionID = transactionID || h.randomUUID()
      //  this.addDatapoint(newCreate(object, propertyID, value, metadata, transactionID))
    }

    addValue(object, propertyID, value, metadata, transactionID){
        transactionID = transactionID || h.randomUUID()
        this.addDatapoint(newInsert(object, propertyID, value, metadata, transactionID))
    }

    replaceValue(object, propertyID, replacee, replacer, metadata, transactionID){
        transactionID = transactionID || h.randomUUID()
        this.addDatapoint(newReplace(object, propertyID, replacee, replacer, metadata, transactionID))
    }

    deleteValue(object, propertyID, value, metadata, transactionID){
        transactionID = transactionID || h.randomUUID()
        this.addDatapoint(newDelete(object, propertyID, value, metadata, transactionID))
    }
}





// --------------------------------------------------------------
// Array
// --------------------------------------------------------------


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

export function appendRecord(datapointList, value, metadata, transactionID){

    let datapoints = recordToDatapoints(value, metadata, transactionID)

    return appendDatapoint(datapointList, datapoints)

}



export function sort(datapointList){

     function sortFn(a, b){
        let record_id1 = h.record_id(a)
        let record_id2 = h.record_id(a)
        if(record_id1 < record_id2){ return -1}
        if(record_id1 > record_id2) { return 1 }

        let p1 = getPropertyID(a)
        let p2 = getPropertyID(b)
        if(p1< p2){ return -1 }
        if(p1 > p2){ return 1 }

        // Inverse sort for others
        if(lt(a, b)){ return 1 }
        if(gt(a, b)){ return -1 }

        return false
     }
     
     datapointList.sort(sortFn)

     return datapointList
}

// --------------------------------------------------------------
// Record
// --------------------------------------------------------------


export function getRecord(datapointList, record_id){

    let records = datapointsToRecord(datapointList)

    let ref = {"@id": record_id}

    return h.expand(records, ref)

}

export function getRecords(datapointList){

    let records = datapointsToRecord(datapointList)
    return h.expand(records, records)

}





// --------------------------------------------------------------
// Values
// --------------------------------------------------------------

export function getValues(datapointList, object, propertyID){

    let objectID = h.toRecordID(object)
    let parts = propertyID.split('.')
    let k
    let n
    let dps
    let dp

    for(let i=0; i < parts.length; i++){

        if(!objectID){
            return []
        }

        let p = parts[i]
        k = p.split('[')[0]
        n = (p.split('[')?.[1] || '').split(']')?.[0]
        n = h.toNumber(n) ?? 0

        // 
        dps = getDatapoints(datapointList, objectID, k)

        dp = dps?.[n]

        if(!dp){ return [] }
 
        objectID = h.toRecordID(getPropertyValue(dp))
        
    }

    let values = dps.map(x => x?.['dp:value'])

    return values
}

export function getValue(datapointList, object, propertyID){

    let objectID = h.toRecordID(object)
    let parts = propertyID.split('.')
    let k
    let n
    let dp

    for(let i=0; i < parts.length; i++){

        if(!objectID){
            return undefined
        }

        let p = parts[i]
        k = p.split('[')[0]
        n = (p.split('[')?.[1] || '').split(']')?.[0]
        n = h.toNumber(n) ?? 0

        // 
        let dps = getDatapoints(datapointList, objectID, k)

        dp = dps?.[n]

        if(!dp){ return undefined}
 
        objectID = h.toRecordID(getPropertyValue(dp))
        
    }

    return dp?.['dp:value']
}

export function setValue(datapointList, object, propertyID, value, metadata, transactionID){

    transactionID = transactionID || h.randomUUID()
    let objectID = h.toRecordID(object)
    let parts = propertyID.split('.')
    let k
    let n

    for(let i=0; i < parts.length; i++){

        let p = parts[i]
        k = p.split('[')[0]
        n = (p.split('[')?.[1] || '').split(']')?.[0]
        n = h.toNumber(n) ?? 0

        // 
        let dps = getDatapoints(datapointList, objectID, k)


        // Backfill if missing datapoints
        while(dps.length -1 < n){
            let backFillDp = newInsert(h.toRef(objectID), k, null, metadata, transactionID)
            datapointList.push(backFillDp)
            dps.push(backFillDp)
        }

        let dp = dps?.[n]
        
        
        // if not finished dot path, set value to object if not one.
        if(i < parts.length -1){
            dp['dp:value'] = h.record_id(dp?.['dp:value']) ? dp?.['dp:value'] :  {"@id": h.randomUUID()}
            objectID = h.toRecordID(getPropertyValue(dp))
        }
    }

    for(let v of h.toArray(value)){
        datapointList.push(newCreate(h.toRef(objectID), k, v, metadata, transactionID))
    }


    return datapointList
}



// --------------------------------------------------------------
// Datapoints
// --------------------------------------------------------------

/**
 * Return datapoints for an id and propertyID(optional)
 * @param {*} datapointList 
 * @param {*} object 
 * @param {*} propertyID 
 */
export function getDatapoints(datapointList, object, propertyID){

    datapointList = h.toArray(datapointList)

    if(datapointList.length == 0){ return []}

    let objectID = h.toRecordID(object)

    if(!objectID){
        return []
    }

    // Filter for same object
    let dps = datapointList.filter(x => getObjectID(x) == objectID)

    // Filter for same propertyID
    if(propertyID){
        dps = dps.filter(x => getPropertyID(x) == propertyID)
    }

    // Compile
    dps = compile(dps)

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
 */
export function getDatapoint(datapointList, object, propertyID, position){


    let objectID = h.toRecordID(object)

    // Filter for same object
    let dps = datapointList.filter(x => getObjectID(x) == objectID)

    // Filter for same propertyID
    if(propertyID){
        dps = dps.filter(x => getPropertyID(x) == propertyID)
    }

    // Compile
    dps = compile(dps)

    // Sort
    dps = sort(dps)

    return dps?.[position]

}



// --------------------------------------------------------------
// Transform
// --------------------------------------------------------------


/**
 * Converts record to list of DataPoints
 * @param {*} record
 */
export function recordToDatapoints(record, metadata, transactionID) {
    

    let records = h.flatten(record)

    transactionID = transactionID || h.randomUUID()

    let results = []

    for(let r of records){

        if(isDatapoint(r)){
            results.push(r)
            continue
        }

        let object = h.ref(r)

        for(let k of Object.keys(r)){

            let values = h.toArray(r[k])

            for(let v of values){
                let dp = newCreate(object, k, v, metadata, transactionID)
                results.push(dp)
            }
        }

    }

    return results
   
}

export function datapointsToRecord(datapoints) {

    let activeDatapoints = compile(datapoints)

    let recordsDB = {}

    for (let dp of activeDatapoints){

        let record_id = getObjectID(dp)
        let record = recordsDB[record_id] || {"@id": record_id}
        let p = getPropertyID(dp)
        let v = getPropertyValue(dp)
        let op = getOperation(dp)

        record[p] = h.toArray(record?.[p])

        if(op == 'Delete'){ continue }
        if(op == 'Remove'){ continue }

        record[p].push(v)

        recordsDB[getObjectID(dp)] = record
    }

    let records = Object.values(recordsDB);

    records = records.map(x => h.simplify(x))

    return records

}

export function isDatapoint(value) {
    return h.record_type(value) == 'dp:Datapoint';
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
 */
export function evaluateOverwrite(datapoint1, datapoint2) {

    if(datapoint1 === undefined){
        return false
    }

    if (!isDatapoint(datapoint1)) {
        return false;
    }
    if (!isDatapoint(datapoint2)) {
        return true;
    }

    if (getTransactionID(datapoint1) === getTransactionID(datapoint2)) {
        return false;
    }

    // Check same record id
    let object1 = getObject(datapoint1);
    let object2 = getObject(datapoint2);

    if (h.record_id(object1) != h.record_id(object2)) {
        return false;
    }

    // Check smae propertyID
    let propertyID1 = getPropertyID(datapoint1);
    let propertyID2 = getPropertyID(datapoint2);
    if (propertyID1 != propertyID2) {
        return false;
    }

    let operation1 = getOperation(datapoint1);
    let operation2 = getOperation(datapoint2);

    let value1 = getPropertyValue(datapoint1);
    let value2 = getPropertyValue(datapoint2);

    let replacee1 = getReplacee(datapoint1);

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


// ---------------------------------------------------------------
// CRUD new objects
// ---------------------------------------------------------------
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
        'dp:counter': ++counter
    };

    r = { ...r, ...metadata}

    return r
}


// ---------------------------------------------------------------
// 
// ---------------------------------------------------------------





export function getTransactionID(record) {
    return h.getValue(record, 'dp:transactionID');
}

export function setTransactionID(record, value) {
    return h.setValue(record, 'dp:transactionID', value);
}


export function getPropertyID(record) {
    return h.getValue(record, 'dp:propertyID');
}

export function setPropertyID(record, value) {
    return h.setValue(record, 'dp:propertyID', value);
}

export function getPropertyValue(record) {
    return h.getValue(record, 'dp:value');
}

export function setPropertyValue(record, value) {
    return h.setValue(record, 'dp:value', value);
}

/**
 * Return the operation (create, update, delete)
 * @param {*} record
 * @returns
 */
export function getOperation(record) {
    return h.getValue(record, 'dp:operation');
}

/**
 * Set operation (create, update, delete)
 * @param {*} record
 * @param {*} value
 * @returns
 */
export function setOperation(record, value) {
    return h.setValue(record, 'dp:transaction', value);
}

export function getReplacer(record) {
    return h.getValue(record, 'dp:value');
}

export function setReplacer(record, value) {
    return h.setValue(record, 'dp:value', value);
}

export function getReplacee(record) {
    return h.getValue(record, 'dp:replacee');
}

export function setReplacee(record, value) {
    return h.setValue(record, 'dp:replacee', value);
}

export function getObject(record) {
    return h.getValue(record, 'dp:object');
}

export function setObject(record, value) {
    return h.setValue(record, 'dp:object', value);
}

export function getObjectID(record) {
    return h.record_id(getObject(record));
}

export function getConfidence(record) {
    return h.toNumber(h.getValue(record, 'dp:confidence'));
}

export function setConfidence(record, value) {
    return h.setValue(record, 'dp:confidence', value);
}

export function getCreatedDate(record) {
    return h.toDate(h.getValue(record, 'dp:createdDate'));
}

export function setCreatedDate(record, value) {
    return h.setValue(record, 'dp:createdDate', value);
}

export function getDateCreated(record) {
    return h.toDate(h.getValue(record, 'dp:createdDate'));
}

export function setDateCreated(record, value) {
    return h.setValue(record, 'dp:createdDate', value);
}

export function getModifiedDate(record) {
    return h.toDate(h.getValue(record, 'dp:modifiedDate'));
}

export function setModifiedDate(record, value) {
    return h.setValue(record, 'dp:modifiedDate', value);
}

export function getDateModified(record) {
    return h.toDate(h.getValue(record, 'dp:modifiedDate'));
}

export function setDateModified(record, value) {
    return h.setValue(record, 'dp:modifiedDate', value);
}

export function getCounter(record) {
    return h.toDate(h.getValue(record, 'dp:counter'));
}

export function setCounter(record, value) {
    return h.setValue(record, 'dp:counter', value);
}




export function getSource(record) {
    return h.getValue(record, 'dp:source');
}

export function setSource(record, value) {
    return h.setValue(record, 'dp:source', value);
}

export function getSourceCreatedDate(record) {
    return h.toDate(h.getValue(record, 'dp:source.createdDate'));
}
export function setSourceCreatedDate(record, value) {
    return h.setValue(record, 'dp:source.createdDate', value);
}
export function getSourceDateCreated(record) {
    return h.toDate(h.getValue(record, 'dp:source.createdDate'));
}

export function setSourceDateCreated(record, value) {
    return h.setValue(record, 'dp:source.createdDate', value);
}

export function getSourceModifiedDate(record) {
    return h.toDate(h.getValue(record, 'dp:source.modifiedDate'));
}
export function setSourceModifiedDate(record, value) {
    return h.setValue(record, 'dp:source.modifiedDate', value);
}
export function getSourceDateModified(record) {
    return h.toDate(h.getValue(record, 'dp:source.modifiedDate'));
}
export function setSourceDateModified(record, value) {
    return h.setValue(record, 'dp:source.modifiedDate', value);
}
