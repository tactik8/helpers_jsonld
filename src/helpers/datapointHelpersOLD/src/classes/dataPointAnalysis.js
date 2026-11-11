import * as dp from '../methods/dataPointMethods.js'

import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'

import { formatHelpers  } from '../../../formatHelpers/formatHelpers.js'






/**
 * Convert a datapoint to string
 * @param {*} dataPoint 
 * @returns 
 */
export function toString(dataPointAnalysisRecord) {

    let format = [
        { "t": "Object", "p": "object.@id", "w": 25 },
        { "t": "Property", "p": "propertyID", "w": 12 },
        { "t": "Dimension", "p": "measuredProperty", "w": 25 },
        { "t": "Type", "p": "dataPointType", "w": 6 },
        { "t": "N", "p": "N", "w": 5 },
        { "t": "Unique N", "p": "uniqueN", "w": 5 }
    ]

    // Handle array
    if (h.isArray(dataPointAnalysisRecord)) {
        return formatHelpers.toTextTable(dataPointAnalysisRecord, format)
    } else {
        return formatHelpers.toTextRecord(dataPointAnalysisRecord, format)
    }


}



export function analyzeDataPoints(datapoints){


    datapoints = datapoints.map(x => x?.record || x)

    // Retrieve object ids
    let object_ids = datapoints.map(x => x.object['@id'])
    console.log('pp', object_ids)
    object_ids = [ ... new Set(object_ids)]
    console.log('pp2', object_ids)


    // iterate
    let analysis = []
    for(let o of object_ids){
        analysis = analysis.concat(_analyzeByRecord(datapoints, o))
    }

    return analysis


}


function _analyzeByRecord(datapoints, record_id){

    datapoints = datapoints.filter(x => x.object['@id'] == record_id)

    let properties = datapoints.map(x => x.propertyID)
    properties = [ ... new Set(properties)]
    console.log('pp', properties)

    let analysis = []
    for(let p of properties){
        console.log('rr', record_id, p)
        analysis = analysis.concat(_analyzeByRecordAndProperties(datapoints, record_id, p))
    }

    return analysis

}

function _analyzeByRecordAndProperties(datapoints, record_id, propertyID){

   

    let properties = ['value', 'dataFeed.@id', 'dataFeedItem.@id', 'execution.@id', 'agent.@id', 'instrument.@id']

    let allDatapoints = datapoints.filter(x => x.object['@id'] == record_id && x.propertyID == propertyID)

    let activeDataPoints = dp.compile(allDatapoints)


    let results

    let analysisRecords = []
    for(let p of properties){

        results = allDatapoints.map(x => h.getValue(x, p))
        let analysisRecordAll = {
            "@type": "Analysis",
            "object": { "@id": record_id },
            "propertyID": propertyID,
            "measuredProperty": p, 
            "dataPointType": "ALL",
            "N": results.length,
            "uniqueN": [ ...new Set(results)].length
        }
        analysisRecords.push(analysisRecordAll)
    

        results = activeDataPoints.map(x => h.getValue(x, p))
        let analysisRecordActive = {
            "@type": "Analysis",
            "object": { "@id": record_id },
            "propertyID": propertyID,
            "measuredProperty": p, 
            "dataPointType": "ACTIVE",
            "N": results.length,
            "uniqueN": [ ...new Set(results)].length
        }
        analysisRecords.push(analysisRecordActive)

    }

    return analysisRecords


}
