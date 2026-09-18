import { _h } from '../index.js'

let COUNTER = 0

export const datapointHelpers = {

    isSameObject: sameObject,
    lt,
    le,
    gt,
    ge,
    eq,
    get: getDatapoint,
    c: getConfidence,
    d: getModifiedDate,
    getConfidence: getConfidence,
    getModifiedDate: getModifiedDate,
    recordToDatapoints: recordToDatapoints,
    datapointsToRecord: datapointsToRecord,
    compile

}

// ----------------------------------------------------------------------
// Comparison
// ----------------------------------------------------------------------

function sameObject(dp1, dp2) {


    let o1 = _h.getValue(dp1, 'object')
    let o2 = _h.getValue(dp2, 'object')

    if (_h.record_id(o1) != _h.record_id(o2)) {
        return false
    }


    return true

}


function sameObjectAndProperty(dp1, dp2) {


   

    let o1 = _h.getValue(dp1, 'propertyID')
    let o2 = _h.getValue(dp2, 'propertyID')

    return sameObject(dp1, dp2) && o1 == o2

}



function eq(dp1, dp2) {

    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }

    // Compare confidence
    let c1 = getConfidence(dp1)
    let c2 = getConfidence(dp2)
    console.log('cc', c1, c2)
    if (c1 == undefined && c2 != undefined) {
        return false
    }
    if (c1 != undefined && c2 == undefined) {
        return false
    }

    if (c1 != c2) {
        return false
    }


    // Compare date
    let d1 = getModifiedDate(dp1)
    let d2 = getModifiedDate(dp2)
    if (d1 == undefined && d2 != undefined) {
        return false
    }
    if (d1 != undefined && d2 == undefined) {
        return false
    }
    if (+d1 != +d2) {
        return false
    }

    //
    return true

}



function lt(dp1, dp2) {

    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }

    // Compare confidence
    let c1 = getConfidence(dp1)
    let c2 = getConfidence(dp2)

    if (c1 == undefined && c2 != undefined) {
        return false
    }
    if (c1 != undefined && c2 == undefined) {
        return false
    }
    if (c1 != c2) {
        return c1 < c2
    }

    // Compare date
    let d1 = getModifiedDate(dp1)
    let d2 = getModifiedDate(dp2)
    if (d1 == undefined && d2 != undefined) {
        return false
    }
    if (d1 != undefined && d2 == undefined) {
        return false
    }
    if (+d1 != +d2) {
        return +d1 < +d2
    }

    return false

}

function le(dp1, dp2) {

    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }
    // Compare confidence
    let c1 = getConfidence(dp1)
    let c2 = getConfidence(dp2)
    if (c1 == undefined && c2 != undefined) {
        return false
    }
    if (c1 != undefined && c2 == undefined) {
        return false
    }
    if (c1 != c2) {
        return c1 <= c2
    }

    // Compare date
    let d1 = getModifiedDate(dp1)
    let d2 = getModifiedDate(dp2)
    if (d1 == undefined && d2 != undefined) {
        return false
    }
    if (d1 != undefined && d2 == undefined) {
        return false
    }
    if (+d1 != +d2) {
        return +d1 <= +d2
    }

    return true
}


function gt(dp1, dp2) {

    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }
    // Compare confidence
    let c1 = getConfidence(dp1)
    let c2 = getConfidence(dp2)
    if (c1 == undefined && c2 != undefined) {
        return false
    }
    if (c1 != undefined && c2 == undefined) {
        return false
    }
    if (c1 != c2) {
        return c1 > c2
    }
    // Compare date
    let d1 = getModifiedDate(dp1)
    let d2 = getModifiedDate(dp2)
    if (d1 == undefined && d2 != undefined) {
        return false
    }
    if (d1 != undefined && d2 == undefined) {
        return false
    }
    if (+d1 != +d2) {
        return +d1 > +d2
    }

    return false

}

function ge(dp1, dp2) {

    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }
    // Compare confidence
    let c1 = getConfidence(dp1)
    let c2 = getConfidence(dp2)
    if (c1 == undefined && c2 != undefined) {
        return false
    }
    if (c1 != undefined && c2 == undefined) {
        return false
    }
    if (c1 != c2) {
        return c1 >= c2
    }

    // Compare date
    let d1 = getModifiedDate(dp1)
    let d2 = getModifiedDate(dp2)
    if (d1 == undefined && d2 != undefined) {
        return false
    }
    if (d1 != undefined && d2 == undefined) {
        return false
    }
    if (+d1 != +d2) {
        return +d1 >= +d2
    }

    return true
}

function getConfidence(dp) {

    let c = _h.getValue(dp, "confidence")
    c = Number(c)
    c = isNaN(c) ? 0 : c
    while (c > 1) {
        c = c / 100
    }

    c = c.toFixed(2)
    c = Number(c)

    return c

}


function getModifiedDate(dp) {

    let d
    d = d || _getDate(dp, "dataFeedItem.dateDeleted")
    d = d || _getDate(dp, "dataFeedItem.dateModified")
    d = d || _getDate(dp, "dataFeedItem.dateCreated")
    d = d || _getDate(dp, "observationDate")

    return d
}

function _getDate(dp, path) {

    let d = _h.getValue(dp, path)
    d = new Date(d)
    if (d instanceof Date && !Number.isNaN(d.getTime())) {
        return d
    }
    return undefined

}



function recordToDatapoints(value, metadata) {


    function _recordToDatapoints(object, propertyID, value, metadata, valueGroupID) {

        let datapoints = []

        if (_h.isArray(value)) {
            for (let x of value) {
                datapoints = datapoints.concat(_recordToDatapoints(object, propertyID, x, metadata, valueGroupID))
            }
            return datapoints
        }

        if (value?.["@id"]) {

            // Store current record
            if(propertyID){
                datapoints.push(getDatapoint(object, propertyID, {"@id": value?.["@id"]}, metadata, valueGroupID))
            }
            // Store sub records
            let o = { "@id": value?.['@id'] }
            for (let k of (Object.keys(value))) {

                // Skip if @id
                if(k=="@id"){ continue }
                
                datapoints = datapoints.concat(_recordToDatapoints(o, k, value[k], metadata, valueGroupID))
            }
            return datapoints

        }

        return [getDatapoint(object, propertyID, value, metadata, valueGroupID)]

    }

    let valueGroupID = _h.randomUUID()

    return _recordToDatapoints(undefined, undefined, value, metadata, valueGroupID)


}

function datapointsToRecord(datapoints){

    let records = {}

    datapoints = compile(datapoints)
    
    for(let dp of datapoints){

        // Skip if delete operation
        if(dp?.operation == "DeleteAction"){
            continue
        }

        let o = _h.getValue(dp, 'object')
        let rid = _h.record_id(o)
        let propertyID = _h.getValue(dp, 'propertyID')
        let value = _h.getValue(dp, 'value')
        records[rid] = records?.[rid] || {"@id": rid}
        records[rid] = _h.addValues(records[rid], propertyID, value )
    }

    records = Object.keys(records).map(k => records[k])
    records = _h.simplify(records)
    return records
}


/**
 * Return a single datapoint record
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} metadata 
 * @returns 
 */
function getDatapoint(object, propertyID, value, metadata = {}, valueGroupID = _h.randomUUID()) {

    let datapoint = {
        "@type": "Datapoint",
        "@id": _h.randomUUID(),
        "operation": metadata?.operation || "UpdateAction",
        object: object,
        propertyID: propertyID,
        value: value,
        valueGroupID: valueGroupID,
        dataFeed: metadata?.dataFeed,
        dataFeedItem: metadata?.dataFeedItem,
        agent: metadata?.agent,
        confidence: metadata?.confidence || metadata?.credibility || 0,
        observationDate: metadata?.observationDate ? new Date(metadata?.observationDate) : new Date()

    }

    return datapoint

}



/**
 * Returns only the best or active datapoints
 * @param {*} datapoints 
 */
function compile(datapoints){

    let todo = [...datapoints]

    while(todo.length > 0){

        let dpRef = todo[0]
        datapoints = datapoints.filter(x => !compileOverwrite(dpRef, x))

        todo = todo.slice(1)

        // remove dp no longer present
        let datapointsID = datapoints.map(x => x?.['@id'])
        todo = todo.filter(x => datapointsID.includes(x?.["@id"]))
    }


    //for(let dpRef of refDPS){
      //  datapoints = datapoints.filter(x => !compileOverwrite(dpRef, x))
    //}

    

    return datapoints

}

/**
 * Returns true if dp1 overwrites dp2 in compile operations
 * @param {*} dp1 
 * @param {*} dp2 
 */
function compileOverwrite(dp1, dp2){


    // skip if operation is add
    if(_h.getValue(dp1, 'operation') == "AddAction"){
        return false
    }


    // Skip if not same object or property
    if(sameObjectAndProperty(dp1, dp2) == false){
        return false
    }

    // Skip if same valueGroupID
    if(_h.getValue(dp1, 'valueGroupID') == _h.getValue(dp2, 'valueGroupID')){
        return false
    }

    // handle delete  (same value)
    if(_h.getValue(dp1, 'operation') == "DeleteAction"){
        let v1 = dp1?.value
        let v2 = dp2?.value
        try { v1 =JSON.stringify(v1)}catch{}
        try { v2 =JSON.stringify(v1)}catch{}
        return v1 == v2 && gt(dp1, dp2)
    }

    // return
    return gt(dp1, dp2)

}



function getDataFeedItem(datafeed, item, dateCreated, dateModified, dateDeleted) {

    return {
        "@type": "DataFeedItem",
        "@id": "",
        "item:": item,
        dateCreated: dateCreated,
        dateModified: dateModified,
        dateDeleted: dateDeleted
    }
}

