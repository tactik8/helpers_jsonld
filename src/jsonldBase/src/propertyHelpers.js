
import { jsonldBase as h } from '../jsonldBase.js'

import * as dot from '../../dotHelpers/dotHelpers.js'
import { getRecord } from './memoryDb.js'

let DEFAULT_LANGUAGE = "en-CA"


/**
 * Returns first @type
 * @param {*} record 
 * @returns 
 */
export function record_type(record) {

    return getValue(record, '@type')

}

/**
 * Returns @id
 * @param {*} record 
 * @returns 
 */
export function record_id(record) {
    return getValue(record, '@id')
}


/**
 * Returns true if object is a ref (only @id as property)
 * @param {*} value 
 * @returns 
 */
export function isRef(value) {

    if (!value?.["@id"]) { return false }
    return !Object.keys(value).some(x => x != "@id")
}


/**
 * Returns reference of a jsonld {"@id": ...}
 * @param {*} record_or_id 
 * @returns 
 */
export function ref(record_or_id) {

    // Check if thing object
    if (record_or_id?._isThingClass == true) {
        return record.ref
    }

    //

    if (!record_or_id) {
        return undefined
    }
    let record_id = h._utilGetId(record_or_id)
    if (!record_id) {
        return undefined
    }
    return { "@id": record_id }
}



/**
 * Returns list of properties (keys) for an object. If lis tof objects, returns all properties
 * @param {*} record 
 */
export function keys(record){

    return properties(record)

}

/**
 * Returns list of properties (keys) for an object. If lis tof objects, returns all properties
 * @param {*} record 
 */
export function properties(record){
    if(!record){
        return []
    }

    if(h.isArray(record)){
        let k = []
        for(let r of record){
            k = k.concat(properties(r))
        }
        return [ ... new Set(k)]
    }

    let k = Object.keys(record?.record || record)

    return k 
}



/**
 * Return a value from record using dot notation. Returns position 0 if missing.
 * Handles @language and @value
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} position 
 * @param {*} defaultValue 
 * @param {*} language 
 * @returns 
 */
export function getValue(record, propertyID, position, defaultValue, language) {

    let values = getValues(record, propertyID, defaultValue, language)

    //
    position = Number(position)
    if (isNaN(position)) { position = 0 }

    let value = values?.[position]

    return value ?? defaultValue

}

/**
 * Set value to a property. Creates path if missing. Handles dot notation.
 * 
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} position 
 * @returns 
 */
export function setValue(record, propertyID, value, position, language) {

    // If position specified, insert value in current values, creating missing values as null if required. 
    if(position !== undefined){
        let currentValues = h.getValues(record, propertyID)
        while(currentValues.length -1 < position){
            currentValues.push(null)
        }
        currentValues[position] = value
        value = currentValues
    }
    return setValues(record, propertyID, value, language)
}

export function addValue(record, propertyID, value) {

    return addValues(record, propertyID, value)
}

/**
 * Add values to a property, combining with existing values. 
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} values 
 * @returns 
 */
export function addValues(record, propertyID, values) {

    let currentValues = h.getValues(record, propertyID)

    values = currentValues.concat(values)

    return setValues(record, propertyID, values)

}



/**
 * Return the values of a dot notation property in a record
 * Handles @language and @value
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} defaultValue 
 * @param {*} language 
 * @returns 
 */
export function getValues(record, propertyID, defaultValue, language) {

    // Error
    if (record === undefined) {
        return []
    }

    // Error
    if (propertyID === undefined || propertyID === null || propertyID == "") {
        return []
    }


    // Check if thing object
    record = record?.record || record
    //if (record?._isThingClass == true) {
    //    return record.getValues(propertyID, defaultValue, language)
    //}


    // prepare propertyID
    let paths = propertyID.split('.')

    // Iterate until the last path item
    let runningValue = record
    for (let i = 0; i < paths.length; i++) {

        let [propertyID, position] = getPathFragment(paths[i])

        // Get value at path and position  
        if (propertyID) {
            runningValue = runningValue?.[propertyID]
            runningValue = h.toArray(runningValue)
        }

        // Filter for language (if @language tag)
        runningValue = runningValue.filter(x => x?.['@language'] == language || x?.['@language'] == DEFAULT_LANGUAGE || x?.['@lannguage'] === undefined)

        // Deal with @value
        runningValue = runningValue.map(x => x?.['@value'] ?? x)
        runningValue = h.toArray(runningValue)

        // Deal with language
        runningValue = runningValue.map(x => x?.[language] ?? x?.[DEFAULT_LANGUAGE] ?? x)
        runningValue = h.toArray(runningValue)

        // Get value at position (except if last path element)
        if(i < paths.length -1){
            runningValue = runningValue?.[position]
        }
    }

    // Get final path property
    let values = h.toArray(runningValue)
    
    if (values.length == 0 && defaultValue !== undefined) {
        return defaultValue
    }
    return values
}





export function setValues(record, propertyID, value, language) {



    // Check if thing object
    record = record?.record || record
    //if (record?._isThingClass == true) {
    //    return record.setValues(propertyID, value, language)
   // }


    //

    // prepare propertyID
    let paths = propertyID.split('.')

    // prepare propertyID
    // Iterate
    let runningValue = record || {}


    for (let i = 0; i < paths.length - 1; i++) {

        let [propertyID, position] = getPathFragment(paths[i])

        // Deal with empty
        runningValue[propertyID] = runningValue?.[propertyID] || []


        let newRunningValue

        // Deal with language and ensure it is an array
        if (runningValue?.[propertyID]?.[language]) {
            runningValue[propertyID][language] = h.toArray(runningValue?.[propertyID]?.[language])
            newRunningValue = runningValue[propertyID][language]
        } else if (runningValue?.[propertyID]?.[DEFAULT_LANGUAGE]) {
            runningValue[propertyID][DEFAULT_LANGUAGE] = h.toArray(runningValue?.[propertyID]?.[DEFAULT_LANGUAGE])
            newRunningValue = runningValue[propertyID][DEFAULT_LANGUAGE]
        } else {
            runningValue[propertyID] = h.toArray(runningValue?.[propertyID]) || []
            newRunningValue = runningValue[propertyID]
        }

        // Ensure it exists and with sufficient numbers
        while (newRunningValue.length - 1 < position) {
            newRunningValue.push({ "@type": "Thing" })
        }

        // Get with correct position
        runningValue = newRunningValue?.[position]
    }

    // Assign value
    let [p, n] = getPathFragment(paths[paths.length - 1])

    // Ensure array
    runningValue[p] = h.toArray(value)

    return record
}







function getPathFragment(pathFragment) {

    if (pathFragment === undefined) { return undefined, 0 }
    let propertyID = pathFragment.split('[')?.[0]
    let position = (pathFragment.split('[')?.[1] || "").split(']')?.[0]
    position = Number(position)
    position = isNaN(position) ? 0 : position

    return [propertyID, position]
}


// -----------------------------------------------------------------------
// Additional property
// -----------------------------------------------------------------------


export function getAdditionalProperty(record, propertyID) {

    let pvs = h.getValues(record, 'additionalProperty')
    let pv = pvs.find(x => h.getValue(x, "propertyID") == propertyID)
    let value = h.getValue(pv, 'value')
    return value
}

export function setAdditionalProperty(record, propertyID, value, unitText) {

    let pvs = h.getValues(record, 'additionalProperty')
    pvs = pvs.filter(x => h.getValue(x, "propertyID") != propertyID)


    let pv = {
        "@type": "PropertyValue",
        "@id": h.randomUUID(),
        "propertyID": propertyID,
        "value": value
    }
    record = h.addValue(record, 'additionalProperty', pv)
    return record

}

// -----------------------------------------------------------------------
// Short cut properties
// -----------------------------------------------------------------------


export function getAtValue(record) {
    return h.getValues(record, '@value')
}

export function setAtValue(record, value) {
    return h.setValues(record, '@value', value)
}

export function actionStatus(record) {
    return h.getValue(record, 'actionStatus')
}

export function contentUrl(record) {
    return h.getValue(record, 'contentUrl')
}

export function description(record) {
    return h.getValue(record, 'description')
}

export function email(record) {
    return h.getValue(record, 'email')
}

export function item(record) {
    return h.getValue(record, 'item')
}


export function name(record) {
    return h.getValue(record, 'name')
}

export function position(record) {
    return h.getValue(record, 'position')
}

export function text(record) {
    return h.getValue(record, 'text')
}

export function url(record) {
    return h.getValue(record, 'url')
}

export function itemListElement(record) {
    return h.getValues(record, 'itemListElement')
}

export function items(record) {
    let values = h.getValues(record, 'itemListElement')
    values = values.map(x => h.getValue(x, 'item'))
    return values
}

export function numberOfitems(record) {
    return h.getValue(record, 'numberOfitems')
}

export function isPotential(record) {
    return h.getValue(record, 'actionStatus') == "PotentialActionStatus"
}
export function isActive(record) {
    return h.getValue(record, 'actionStatus') == "ActiveActionStatus"
}
export function isCompleted(record) {
    return h.getValue(record, 'actionStatus') == "CompletedActionStatus"
}
export function isFailed(record) {
    return h.getValue(record, 'actionStatus') == "FailedActionStatus"
}


export function setPotential(record) {
    record = h.setValue(record, 'actionStatus', 'PotentialActionStatus')
    record = h.setValue(record, 'startTime', undefined)
    record = h.setValue(record, 'endTime', undefined)
    record = h.setValue(record, 'error', undefined)
    record = h.setValue(record, 'result', undefined)
    return record
}

export function setActive(record) {
    record = h.setValue(record, 'actionStatus', 'ActiveActionStatus')
    record = h.setValue(record, 'startTime', h.getValue(record, 'startTime') ?? new Date())
    record = h.setValue(record, 'endTime', undefined)
    record = h.setValue(record, 'error', undefined)
    record = h.setValue(record, 'result', undefined)
    return record
}

export function setCompleted(record, result) {
    record = h.setValue(record, 'actionStatus', 'CompletedActionStatus')
    record = h.setValue(record, 'startTime', h.getValue(record, 'startTime') ?? new Date())
    record = h.setValue(record, 'endTime', h.getValue(record, 'endTime') ?? new Date())
    record = h.setValue(record, 'error', undefined)
    record = h.setValue(record, 'result', result ?? h.getValues(record, 'result'))
    return record
}

export function setFailed(record, error) {
    record = h.setValue(record, 'actionStatus', 'FailedActionStatus')
    record = h.setValue(record, 'startTime', h.getValue(record, 'startTime') ?? new Date())
    record = h.setValue(record, 'endTime', h.getValue(record, 'endTime') ?? new Date())
    record = h.setValue(record, 'error', String(error))
    record = h.setValue(record, 'result', undefined)
    return record
}


// images

/**
 * Returns the image url associated with a record (base or withing image nested record.)
 * @param {*} record 
 */
export function getImageUrl(record){


    if(h.record_type(record) == "ImageObject"){
        return h.getValue(record, 'contentUrl') 
    }

    let imageUrl = h.getValue(record, 'image.contentUrl')

    imageUrl = imageUrl ??  h.getValue(record, 'image.url') 

    imageUrl = imageUrl ??  h.getValue(record, 'image')

    imageUrl = typeof imageUrl == 'string' ? imageUrl : ""

    return imageUrl

}



/**
 * Returns the image url associated with a record (base or withing image nested record.)
 * @param {*} record 
 */
export function getImageName(record){

    let imageName = h.getValue(record, 'image.name')

    imageName = imageName ??  h.getValue(record, 'image.name') 

    imageName = imageName ??  h.record_id(record)

    imageName = typeof imageName == 'string' ? imageName : ""
    
    return imageName

}