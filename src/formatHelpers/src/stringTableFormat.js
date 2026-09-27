
import * as sf from './stringFormat.js'


import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../dataHelpers/dataHelpers.js'

/**
 * Returns a text record
 * 
 */
export function toTextRecord(record, terminalWidth = 80) {


    let format = getFormatRecordsForRecord(record, terminalWidth)

    let records = convertRecordToPropertyValues(record)



    // Init
    let content = ''

    // Build header
    content += getTableHeader(format)
    content += '\n'

    // Build Data
    if (records.length > 0) {
        content += records.map(x => getTableLine(x, format)).join('')
    } else {
        content += `(no records)\n`
    }




}


function getFormatRecordsForRecord(record, totalWidth = 80) {

    let keys = getKeys(record)
    let keySizes = keys.map(x => (x || "").length)
    let maxSize = Math.max(...keySizes)



    let format = [
        {
            t: "Property ID",
            p: 'propertyID',
            w: Math.max(...[maxSize, 'Property ID'.length])
        },
        {
            t: "Value",
            p: 'value',
            w: totalWidth - Math.max(...[maxSize, 'Property ID'.length])
        },
    ]


    return format
}

/**
 * Returns a series of proeprty value records from a jsonld record
 * @param {*} record 
 * @returns 
 */
function convertRecordToPropertyValues(record) {

    let keys = getKeys(record)

    let results = []
    for (let k of keys) {
        let r = {
            "@type": "PropertyValue",
            "propertyID": k,
            "value": dataHelpers.getValues(record, k)
        }
        results.push(r)
    }

    return results
}


/**
 * Returns a table 
 * @param {*} records 
 * @param {*} format // {"title": "Record Type", "propertyID", "@type", "width": 40}
 */
export function toTextTable(records, format, includePosition = true, terminalWidth = 80) {

    format = cleanFormatForTable(records, format, includePosition)
    records = cleanRecordsForTable(records, format, includePosition)

    // Init
    let content = ''

    // Build header
    content += getTableHeader(format)
    content += '\n'

    // Build Data
    if (records.length > 0) {
        let lines = records.map(x => getTableLine(x, format))
        content += lines.join('')
    } else {
        let message = '(no records to display.)'
        content += sf.textCenter(message, terminalWidth)
    }


    return content

}



/**
 * Clean format records, adds position by default
 * @param {*} records 
 * @param {*} format 
 * @param {*} includePosition 
 * @returns 
 */
function cleanFormatForTable(records, format, includePosition = true) {

    format = h.toArray(format)




    // Missing format: Build format from records
    if (!format || format.length == 0) {
        let keys = getKeys(records)
        format = keys.map(x => ({ "title": x, "propertyID": x, "width": x.length }))

    }


    // Add position
    if (includePosition = true) {

        // Get list of properties, add pos only if position not in list
        let properties = format.map(x => x?.propertyID || x?.p)

        if (!properties.includes('position')) {
            let f = { t: "#", p: "position", w: 4, r: 0 }
            format = [f].concat(format)
        }
    }



    // Harmonize properties
    for (let f of format) {
        f.title = f?.title || f?.t || f?.propertyID || f?.p || ""
        f.t = f.title

        f.propertyID = f?.propertyID || f?.p || ""
        f.p = f.propertyID

        f.width = f?.width || f?.w || f?.length || f?.l || title.length
        f.width = Number(f.width)
        f.width = Math.max(...[f.width, f.title.length])
        f.w = f.width
        f.length = f.width
        f.l = f.width

        f.rounding = f?.rounding || f?.r || 0
        f.rounding = Number(f.rounding)
        f.r = f.rounding

    }




    return format

}

/**
 * Clean records for table
 * @param {*} records 
 * @param {*} format 
 * @param {*} includePosition 
 * @returns 
 */
function cleanRecordsForTable(records, format, includePosition = true) {

    records = h.toArray(records)
    if (!records || records.length == 0) {
        return []
    }
    records = JSON.parse(JSON.stringify(records))


    // Add position
    if (includePosition == true) {
        // Get list of properties
        for (let [i, r] of records.entries()) {
            r.position = r?.position ?? i
        }
    }

    return records

}

/**
 * Returns table header
 * @param {*} format 
 * @returns 
 */
function getTableHeader(format) {

    let content = ''


    // Line 1
    let line1 = []
    for (let f of format) {
        let t = `${sf.fixedLength(f.title, f.width, f.rounding)}`
        line1.push(t)
    }
    content += line1.join(' ')
    content += '\n'


    // Line 2
    let line2 = []
    for (let f of format) {
        let t = `${"".padStart(f.width, '-')}`
        line2.push(t)
    }
    content += line2.join(' ')
    content += '\n'

    return content
}


/**
 * Returns a table line
 * @param {*} record 
 * @param {*} format 
 */
function getTableLine(record, format) {

    let content = ''

    let line1 = []
    for (let f of format) {


        let data = h.getValues(record, f.propertyID)

        let t = `${sf.fixedLength(data, f.width, f.rounding)}`
        line1.push(t)

    }
    content += line1.join(' ')
    content += '\n'

    return content

}


/**
 * Returns keys from records
 * @param {*} records 
 */
function getKeys(records) {


    records = h.toArray(records)
    let keys = records.map(x => Object.keys(x))
    keys = keys.flat()
    keys = [...new Set(keys)]

    keys = sortKeys(keys)

    return keys
}

/**
 * Sort keys ensuring @ values are first
 * @param {*} keys 
 */
function sortKeys(keys) {

    keys = h.toArray(keys)

    let priorities = ['position', '@type', '@id']

    keys.sort((a, b) => {

        if (a == b) { return 0 }

        for (let p of priorities) {
            if (a == p && b != p) { return -1 }
            if (a != p && b == p) { return 1 }
        }

        if (a.startsWith('@') && !b.startsWith('@')) {
            return -1
        }

        if (!a.startsWith('@') && b.startsWith('@')) {
            return 1
        }

        return a < b ? -1 : 1

    })

    return keys
}