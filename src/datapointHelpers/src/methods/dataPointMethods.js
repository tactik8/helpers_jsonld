import { _h } from '../../../index.js'

let COUNTER = 0









/**
 * Convert a datapoint to string
 * @param {*} dataPoint 
 * @returns 
 */
export function toString(dataPoint) {

    let format = [
        { "t": "Object", "p": "object.@id", "w": 25 },
        { "t": "PropertyID", "p": "propertyID", "w": 10 },
        { "t": "Value", "p": "value", "w": 25 },
        { "t": "Conf", "p": "confidence", "w": 4, r: 2 },
        { "t": "Date", "p": "observationDate", "w": 10 },
        { "t": "DataFeed", "p": "dataFeed", "w": 10 },
        { "t": "DataFeedItem", "p": "dataFeedItem", "w": 10 },
        { "t": "Execution", "p": "execution", "w": 25 },

    ]

    // Handle array
    if (_h.isArray(dataPoint)) {
        return _h.format.toTextTable(dataPoint, format)
    } else {
        return _h.format.toTextRecord(dataPoint, format)
    }


}



// ----------------------------------------------------------------------
// Comparison
// ----------------------------------------------------------------------




/**
 * Returns true if two datapoints are the same object, property, value and execution ID
 * @param {*} dp1 
 * @param {*} dp2 
 */
export function isEqual(dp1, dp2){

        


    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }

    let v1
    let v2

    // Compare values
    v1 = _h.getValue(dp1, 'value')
    v2 = _h.getValue(dp2, 'value')
    
    if(_h.record_id(v1) != _h.record_id(v2) ){
        return false
    }
    if(v1 != v2){
        return false
    }


    // Compare instruments
    v1 = _h.getValue(dp1, 'instrument')
    v2 = _h.getValue(dp2, 'instrument')
    
    if(_h.record_id(v1) != _h.record_id(v2) ){
        return false
    }
 

    // Compare agent
    v1 = _h.getValue(dp1, 'agent')
    v2 = _h.getValue(dp2, 'agent')
    
    if(_h.record_id(v1) != _h.record_id(v2) ){
        return false
    }
   

    // Compare execution
    v1 = _h.getValue(dp1, 'execution')
    v2 = _h.getValue(dp2, 'execution')
    
    if(_h.record_id(v1) != _h.record_id(v2) ){
        return false
    }
   
    // Compare datafeed
    v1 = _h.getValue(dp1, 'datafeed')
    v2 = _h.getValue(dp2, 'datafeed')
    
    if(_h.record_id(v1) != _h.record_id(v2) ){
        return false
    }
   
     // Compare datafeedItem
    v1 = _h.getValue(dp1, 'datafeedItem')
    v2 = _h.getValue(dp2, 'datafeedItem')
    
    if(_h.record_id(v1) != _h.record_id(v2) ){
        return false
    }
   
   


    return true


}




/**
 * Returns true if the two dataPoints share the same object
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function sameObject(dp1, dp2) {


    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2

    let o1 = _h.getValue(dp1, 'object')
    let o2 = _h.getValue(dp2, 'object')

    if (_h.record_id(o1) != _h.record_id(o2)) {
        return false
    }


    return true

}

/**
 * Returns true if the two dataPoints share hte same object and same propertyID
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function sameObjectAndProperty(dp1, dp2) {

    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


    let o1 = _h.getValue(dp1, 'propertyID')
    let o2 = _h.getValue(dp2, 'propertyID')

    return sameObject(dp1, dp2) && o1 == o2

}


/**
 * Returns true if same object same propertyID, and same metadata
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function eq(dp1, dp2) {

    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


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


/**
 * Returns true if metadata of dataPoint 1 smaller than dataPoint 2
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function lt(dp1, dp2) {


    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


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

/**
 * Returns true if metadata of dataPoint 1 less or equal than dataPoint 2
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function le(dp1, dp2) {

    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


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

/**
 * Returns true if metadata of dataPoint 1 greater than dataPoint 2
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function gt(dp1, dp2) {


    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


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

/**
 * Returns true if metadata of dataPoint 1 greater or equal than dataPoint 2
 * @param {*} dp1 
 * @param {*} dp2 
 * @returns 
 */
export function ge(dp1, dp2) {


    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


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


/**
 * GT used for sorting datapoints
 * Alphabetical for id, propertyid, then reverse order for rest
 * @param {*} dp1 
 * @param {*} dp2 
 */
function sortComparison(dp1, dp2) {

    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


    // If same object and property, use normal gt
    if (sameObjectAndProperty(dp1, dp2)) {
        return gt(dp1, dp2)
    }

    // compare @type # in id

    let o1 = _h.getValue(dp1, 'object')
    let o2 = _h.getValue(dp2, 'object')

    let id1 = o1?.['@id'] || ""
    let id2 = o2?.['@id'] || ""

    let t1 = id1.split('#')?.[1]
    let t2 = id2.split('#')?.[1]

    if (t1 != t2) {
        return t1 < t2 ? -1 : 1
    }

    // Compare object id
    if (id1 != id2) {
        return o1 < o2 ? -1 : 1
    }

    // Compare propertyID
    let p1 = _h.getValue(dp1, 'propertyID')
    let p2 = _h.getValue(dp2, 'propertyID')

    if (p1 != p2) {
        return p1 < p2 ? -1 : 1
    }

    return 0

}

/**
 * Returns list of sorted dataPoints
 * @param {*} dataPoints 
 */
export function sort(dataPoints) {

    dataPoints.sort((a, b) => {

        a = a?.record ?? a
        b = b?.record ?? b
        return sortComparison(a, b)

    })

    return dataPoints


}



/**
 * Merge 2 datapoints
 * @param {*} dp1 
 * @param {*} dp2 
 */
export function merge(dp1, dp2){

    if(isEqual(dp1, dp2) == false){
        throw new Error('The two datapoints are not the same, cannot merge.')
    }

    return dp1

}

/**
 * Dedupe list of datapoints
 * @param {*} datapoints 
 */
export function dedupe(datapoints){

    datapoints = _h.toArray(datapoints)

    let deduped = []
    for(let d of datapoints){
        let c = deduped.find(x => isEqual(d, x))
        if(!c){
            deduped.push(d)
        }
    }
    return deduped

}



/**
 * Returns confidence score
 * @param {*} dp 
 * @returns 
 */
export function getConfidence(dp) {

    dp = dp?.record ?? dp



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


/**
 * Returns confidence score
 * @param {*} dp 
 * @returns 
 */
export function getExecutionID(dp) {

    dp = dp?.record ?? dp

    let r = _h.getValue(dp, "execution")
    
    return _h.record_id(r)

}




/**
 * Returns modifiedDate property
 * @param {*} dp 
 * @returns 
 */
export function getModifiedDate(dp) {

    dp = dp?.record ?? dp


    let d
    d = d || _getDate(dp, "dataFeedItem.dateDeleted")
    d = d || _getDate(dp, "dataFeedItem.dateModified")
    d = d || _getDate(dp, "dataFeedItem.dateCreated")
    d = d || _getDate(dp, "observationDate")

    return d
}

export function _getDate(dp, path) {

    let d = _h.getValue(dp, path)
    d = new Date(d)
    if (d instanceof Date && !Number.isNaN(d.getTime())) {
        return d
    }
    return undefined

}


/**
 * Transform a jsonld record to a series of dataPoints
 * @param {*} value 
 * @param {*} metadata 
 * @param {*} valueGroupID 
 * @returns 
 */
export function recordToDatapoints(value, metadata, valueGroupID) {


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
            if (propertyID) {
                datapoints.push(getDatapoint(object, propertyID, { "@id": value?.["@id"] }, metadata, valueGroupID))
            }
            // Store sub records
            let o = { "@id": value?.['@id'] }
            for (let k of (Object.keys(value))) {

                // Skip if @id
                if (k == "@id") { continue }

                datapoints = datapoints.concat(_recordToDatapoints(o, k, value[k], metadata, valueGroupID))
            }
            return datapoints

        }

        return [getDatapoint(object, propertyID, value, metadata, valueGroupID)]

    }

    valueGroupID = valueGroupID ?? _h.randomUUID()

    return _recordToDatapoints(undefined, undefined, value, metadata, valueGroupID)


}

/**
 * Transform a series of dataPoints into a series of jsonld records
 * @param {*} datapoints 
 * @returns 
 */
export function datapointsToRecord(datapoints) {

    datapoints = _h.toArray(datapoints)

    datapoints = datapoints.map(x => x?.record ?? x)



    let records = {}

    datapoints = compile(datapoints)

    for (let dp of datapoints) {

        // Skip if delete operation
        if (dp?.operation == "DeleteAction") {
            continue
        }

        let o = _h.getValue(dp, 'object')
        let rid = _h.record_id(o)
        let propertyID = _h.getValue(dp, 'propertyID')
        let value = _h.getValue(dp, 'value')
        records[rid] = records?.[rid] || { "@id": rid }
        records[rid] = _h.addValues(records[rid], propertyID, value)
    }

    records = Object.keys(records).map(k => records[k])


    // Deal with nesting
    let db = new _h.DB()
    db.set(records)

    records = db.search()



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
export function getDatapoint(object, propertyID, value, metadata = {}, valueGroupID = _h.randomUUID()) {

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
        observationDate: metadata?.observationDate ? new Date(metadata?.observationDate) : new Date(),
        execution: metadata?.execution

    }

    return datapoint

}



/**
 * Returns only the best or active datapoints, applying rules
 * @param {*} datapoints 
 */
export function compile(datapoints) {

    let todo = [...datapoints]

    while (todo.length > 0) {

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
export function compileOverwrite(dp1, dp2) {


    dp1 = dp1?.record ?? dp1
    dp2 = dp2?.record ?? dp2


    // skip if operation is add
    if (_h.getValue(dp1, 'operation') == "AddAction") {
        return false
    }


    // Skip if not same object or property
    if (sameObjectAndProperty(dp1, dp2) == false) {
        return false
    }

    // Skip if same valueGroupID
    if (_h.getValue(dp1, 'valueGroupID') == _h.getValue(dp2, 'valueGroupID')) {
        return false
    }

    // handle delete  (same value)
    if (_h.getValue(dp1, 'operation') == "DeleteAction") {
        let v1 = dp1?.value
        let v2 = dp2?.value
        try { v1 = JSON.stringify(v1) } catch { }
        try { v2 = JSON.stringify(v1) } catch { }
        return v1 == v2 && gt(dp1, dp2)
    }

    // return
    return gt(dp1, dp2)

}


/**
 * Returns dataFeed item
 * @param {*} datafeed 
 * @param {*} item 
 * @param {*} dateCreated 
 * @param {*} dateModified 
 * @param {*} dateDeleted 
 * @returns 
 */
export function getDataFeedItem(datafeed, item, dateCreated, dateModified, dateDeleted) {

    return {
        "@type": "DataFeedItem",
        "@id": "",
        "item:": item,
        dateCreated: dateCreated,
        dateModified: dateModified,
        dateDeleted: dateDeleted
    }
}

