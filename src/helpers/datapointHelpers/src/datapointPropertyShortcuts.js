import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'


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
    value = h.toNumber(value)
    return h.setValue(record, 'dp:confidence', value);
}

export function getCreatedDate(record) {
    return h.toDate(h.getValue(record, 'dp:createdDate'));
}

export function setCreatedDate(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:createdDate', value);
}

export function getDateCreated(record) {
    return h.toDate(h.getValue(record, 'dp:createdDate'));
}

export function setDateCreated(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:createdDate', value);
}

export function getModifiedDate(record) {
    return h.toDate(h.getValue(record, 'dp:modifiedDate'));
}

export function setModifiedDate(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:modifiedDate', value);
}

export function getDateModified(record) {
    return h.toDate(h.getValue(record, 'dp:modifiedDate'));
}

export function setDateModified(record, value) {
    value = h.toDate(value)
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
    value = h.toDate(value)
    return h.setValue(record, 'dp:source', value);
}

export function getSourceCreatedDate(record) {
    return h.toDate(h.getValue(record, 'dp:source.dp:record.dp:createdDate'));
}
export function setSourceCreatedDate(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:source.dp:record.dp:createdDate', value);
}
export function getSourceDateCreated(record) {
    return h.toDate(h.getValue(record, 'dp:source.dp:record.dp:createdDate'));
}

export function setSourceDateCreated(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:source.dp:record.dp:createdDate', value);
}

export function getSourceModifiedDate(record) {
    return h.toDate(h.getValue(record, 'dp:source.dp:record.dp:modifiedDate'));
}
export function setSourceModifiedDate(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:source.dp:record.dp:modifiedDate', value);
}
export function getSourceDateModified(record) {
    return h.toDate(h.getValue(record, 'dp:source.record.dp:modifiedDate'));
}
export function setSourceDateModified(record, value) {
    value = h.toDate(value)
    return h.setValue(record, 'dp:source.dp:record.dp:modifiedDate', value);
}


export function getSourceSystemID(record) {
    return h.toDate(h.getValue(record, 'dp:source.dp:system.@id'));
}
export function setSourceSystemID(record, value) {
    return h.setValue(record, 'dp:source.dp:system.@id', value);
}

export function getSourceTableID(record) {
    return h.toDate(h.getValue(record, 'dp:source.dp:table.@id'));
}
export function setSourceTableID(record, value) {
    return h.setValue(record, 'dp:source.dp:table.@id', value);
}

export function getSourceRecordID(record) {
    return h.toDate(h.getValue(record, 'dp:source.dp:record.@id'));
}
export function setSourceRecordID(record, value) {
    return h.setValue(record, 'dp:source.dp:record.@id', value);
}


export function getLatestDate(record){

    let d = getSourceModifiedDate(record)
    d = d || getSourceCreatedDate(record)
    d = d || getModifiedDate(record) 
    d = d || getCreatedDate(record)

    return d
}