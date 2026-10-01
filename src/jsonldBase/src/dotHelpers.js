




/**
 * Return the values of a dot notation property in a record
 * Handles @language and @value
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} defaultValue 
 * @param {*} language 
 * @returns 
 */
export function dotGet(record, propertyID, defaultValue, language) {

    // Error
    if (record === undefined) {
        return []
    }

    // Error
    if (propertyID === undefined || propertyID == null || propertyID == "") {
        return []
    }


    // Check if thing object
    if (record?._isThingClass == true) {
        return record.getValues(propertyID, defaultValue, language)
    }

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



export function dotSet(record, propertyID, value, language) {



    // Check if thing object
    if (record?._isThingClass == true) {
        return record.setValues(propertyID, value, language)
    }

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




/**
 * Ensures path exists, creates missing records if required.
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
function _ensurePathExists(record, propertyID){

    let paths = propertyID.split('.')

    let currentValue = record

    for(let path of paths){

        let [p, n] = getPathFragment(path)

        currentValue[p] = h.toArray(currentValue?.[p]) || []
        
        // Create missing records if required
        while(currentValue[p].length -1 < n){
            currentValue[p].push({})
        }

        // 
        currentValue[p][n] = currentValue?.[p]?.[n] || {}

        currentValue = currentValue?.[p]?.[n]

    }

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


export function getValues(record, propertyID, position){


}



export function setValues(record, propertyID, values){


}



function getpathAndPosition(fragment){


}