
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'


const dph = {

    ...arrayHelpers,
    ...comparisonHelpers,
    ...objectHelpers,
    ...propertyShortcut

}





/**
 * Converts record to list of DataPoints
 * @param {Object | Object[]} record
 * @returns {Datapoint[]}
 */
export function recordToDatapoints(record, metadata, transactionID) {
    

    let records = h.flatten(record)

    transactionID = transactionID || h.randomUUID()

    let results = []

    for(let r of records){

        if(dph.isDatapoint(r)){
            results.push(r)
            continue
        }

        let object = h.ref(r)

        for(let k of Object.keys(r)){

            let values = h.toArray(r[k])

            for(let v of values){
                let dp = dph.newCreate(object, k, v, metadata, transactionID)
                results.push(dp)
            }
        }

    }

    return results
   
}

/**
 * 
 * @param {Datapoints[]} datapoints 
 * @returns {Object[]}
 */
export function datapointsToRecord(datapoints) {

    let activeDatapoints = dph.compile(datapoints)

    let recordsDB = {}

    for (let dp of activeDatapoints){

        let record_id = dph.getObjectID(dp)
        let record = recordsDB[record_id] || {"@id": record_id}
        let p = dph.getPropertyID(dp)
        let v = dph.getPropertyValue(dp)
        let op = dph.getOperation(dp)

        record[p] = h.toArray(record?.[p])

        if(op == 'Delete'){ continue }
        if(op == 'Remove'){ continue }

        record[p].push(v)

        recordsDB[dph.getObjectID(dp)] = record
    }

    let records = Object.values(recordsDB);

    records = records.map(x => h.simplify(x))

    return records

}