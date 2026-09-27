



import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../dataHelpers/dataHelpers.js'

/**
 * Converts value to fixed length string. 
 * @param {*} value 
 * @param {*} nbchar 
 * @param {*} nbDigits 
 * @returns 
 */
export function fixedLength(value, nbchar = undefined, nbDigits = 0) {

    let inputValue = value

    // Deal with array
    if (h.isArray(value)) {

        let l = value.length
        if (l == 0) {
            value = ''
        }
        if (l == 1) {
            value = value[0]
        }
        if (l > 1) {
            value = `(${value.length})`
        }
    }

    let dataType = dataHelpers.getDataType(value)


    // Deal with undefined
    if(dataType == "Undefined"){
        value = ""
    }

    // Deal with objects
    if(dataType == "Jsonld"){
        value = value?.['@id']
    }
    

    // Deal with numbers
    if(dataType == "Number"){
        value = dataHelpers.toNumber(value)
        value = value.toFixed(nbDigits)
        value = value.padStart(nbchar, " ")
    }
        
    // Deal with dates
    if (dataType == "Date") {
        value = dataHelpers.toDate(value)
        value = new Intl.DateTimeFormat('en-CA').format(value)
    }


    // Adjust number of char
    value = value === undefined ? "" : value
    if (nbchar != undefined && value.length > nbchar) {
        let newValue = ''
        let part1Length = Math.round(nbchar / 3)
        let part2Length = nbchar - part1Length - 3
        newValue += value.slice(0, part1Length)
        newValue += '...'
        newValue += value.slice(-part2Length)
        value = newValue
    }


    // Pad
    if (nbchar != undefined) {
        value = value.padEnd(nbchar, " ")
    }

    return value

}



export function textCenter(content, targetLength, padString = " ") {


    content = content ?? ""
    content = String(content)

    const half = Math.floor((targetLength - content.length) / 2);
    content = content.padStart(content.length + half, padString).padEnd(targetLength, padString)

    return content

}