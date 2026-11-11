
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'
import * as formatHelpers from './datapointFormatHelpers.js'

const dph = {

    ...arrayHelpers,
    ...comparisonHelpers,
    ...conversionHelpers,
    ...formatHelpers,
    ...objectHelpers,
    ...propertyShortcut

}



// --------------------------------------------------------------
// Values
// --------------------------------------------------------------

export function getValues(datapointList, object, propertyID){

    if(!object || !propertyID ){
        return []
    }


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
        dps = dph.getDatapoints(datapointList, objectID, k)

        dp = dps?.[n]

        if(!dp){ return [] }
 
        objectID = h.toRecordID(dph.getPropertyValue(dp))
        
    }

    let values = dps.map(x => x?.['dp:value'])

    return values
}

export function getValue(datapointList, object, propertyID){

    if(!object || !propertyID ){
        return undefined
    }


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
        let dps = dph.getDatapoints(datapointList, objectID, k)

        dp = dps?.[n]

        if(!dp){ return undefined}
 
        objectID = h.toRecordID(dph.getPropertyValue(dp))
        
    }

    return dp?.['dp:value']
}

export function setValue(datapointList, object, propertyID, value, metadata, transactionID){

    transactionID = transactionID || h.randomUUID()
    

    let objectID = getObjectIDByPath(datapointList, object, propertyID)

    console.log('pp', objectID, propertyID, object)
    let [k, n] = getLastDotPropertyPosition(propertyID)


    let dp

    for(let v of h.toArray(value)){
        
        dp = dph.newUpdate(h.toRef(objectID), k, v, metadata, transactionID)
        datapointList.push(dp)
    }

    


    return datapointList
}


export function addValue(datapointList, object, propertyID, value, metadata, transactionID){

    transactionID = transactionID || h.randomUUID()
    

    let objectID = getObjectIDByPath(datapointList, object, propertyID)

    console.log('pp', objectID, propertyID, object)
    let [k, n] = getLastDotPropertyPosition(propertyID)


    let dp

    for(let v of h.toArray(value)){
        
        dp = dph.newInsert(h.toRef(objectID), k, v, metadata, transactionID)
        datapointList.push(dp)
    }

    


    return datapointList
}




/**
 * Retrieves objectID at given dot path notation
 * @param {*} datapointList 
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} createPath 
 */
function getDatapointByPath(datapointList, object, pathname){

    let paths = getDotPaths(pathname)
    let objectID = h.toRecordID(object)
    let dp

    for(let [k, n] of paths){

      n = n || 0

        // get dps
        let dps = getFilteredDatapoints(datapointList, objectID, k)
        dps = dph.compile(dps)
        dp = dps[0]

        
        objectID = dph.getObjectID(dp)

    }

    return dp

}



/**
 * Retrieves objectID at given dot path notation
 * @param {*} datapointList 
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} createPath 
 */
function getObjectIDByPath(datapointList, object, pathname){

    let paths = getDotPaths(pathname)
    let objectID = h.toRecordID(object)
    let dp


    for(let i =0 ; i< paths.length -1; i++){

        let [k, n] = paths[i]

        let dps = getFilteredDatapoints(datapointList, objectID, k)
        dps = dph.compile(dps)
        dps = dph.sort(dps)
        dp = dps[0]

        objectID = h.record_id(dph.getPropertyValue(dp))


    }
    
    return objectID

}




function ensurePath(datapointList, object, pathname, metadata, transactionID){


    let paths = getDotPaths(pathname)
    let objectID = h.toRecordID(object)
    let value
    let dps
    let dp

    for(let i =0; i < paths.length -1; i++){
        let [k, n] = paths[i]
        n = n || 0

        datapointList = setMissingValues(datapointList, object, k, n + 1, metadata, transactionID)

        dps = getFilteredDatapoints(datapointList, objectID, k)
        dps = dph.compile(dps)

        dp = dps[n]

        value = dph.getPropertyValue(dp)

        if(!h.isObject(value)){
            let newValue = {'@id': h.randomUUID()}
            dp = dph.newReplace(object, k, value, newValue, metadata, transactionID)
            datapointList.push(dp)
            value = newValue
        }
        objectID = h.record_id(value)

    }

    return datapointList

}



function getFilteredDatapoints(datapointList, objectID, propertyID){

    objectID = h.toRecordID(objectID)
    let dps = datapointList.filter(x => dph.getObjectID(x) == objectID)

    dps = dps.filter(x => dph.getPropertyID(x) == propertyID)

    return dps
}


/**
 * Sets missing values
 * @param {*} datapointList 
 * @param {*} object 
 * @param {*} propertyID 
 * @param {*} nbOfValues 
 */
function setMissingValues(datapointList, object, propertyID, nbOfValues, metadata, transactionID){


    let dps = getFilteredDatapoints(datapointList, object, propertyID)

    dps = dph.compile(dps)


    while(dps.length < nbOfValues){
        console.log('adding', propertyID, dps.length, nbOfValues)
        let dp = dph.newInsert(h.toRef(object), propertyID, {"@id": h.randomUUID()}, metadata, transactionID )
        datapointList.push(dp)
        dps.push(dp)

    }

    return datapointList

}


// -------------------------------------------------------------
// Dot notation helpers
// -------------------------------------------------------------






function getLastDotPropertyPosition(pathname){

    let paths = getDotPaths(pathname)
    return paths[paths.length -1]

}



function getDotPaths(pathname){

    let paths = pathname.split('.')

    let results = []

    for(let p of paths){

        let k = p.split('[')[0]

        let n = p.split('[')?.[1] || ''
        n = n.split(']')?.[0] || undefined

        n = Number(n)
        if(isNaN(n)){
            n = undefined
        }



        results.push([k, n])


    }


    return results

}

