import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js'






// --------------------------------------------------------------
// Header links
// --------------------------------------------------------------


/**
 * Retrieve WPHeader record from WebPage record
 * @param {*} record 
 * @returns {WPHeader | WebPage}
 */
export function getWPHeader(record){

    let parts = h.getValues(record, 'hasPart')

    let WPHeaderRecord= parts.find(x => h.record_type(x) == 'WPHeader')

    return WPHeaderRecord

}

/**
 * Set the WPHeader record
 * @param {*} record 
 * @param {*} value 
 * @returns {WebPage} The updated WebPage record
 */
export function setWPHeader(record, value){

    let parts = h.getValues(record, 'hasPart')

    // Remove current WPHeader record
    parts = parts.filter(x => h.record_type(x) != 'WPHeader')

    // Add new one
    parts.push(value)

    record = h.setValues(record, 'hasPart', parts)

    return record

}

/**
 * Returns list of links in WPHeader record
 * @param {WebPage | WebSite} record 
 * @returns {WebPage[]}
 */
export function getHeaderLinks(record){

    let WPHeaderRecord = getWPHeader(record)

    let links = h.getValues(WPHeaderRecord, 'hasPart')

    return links

}

/**
 * Add a footer link in the WPHeader record
 * @param {WebPage} record - The WebPage record
 * @param {*} url - The url of the link to add
 * @param {*} name - The name / title of the link to add
 * @returns {WebPage} The updated WebPage record
 */
export function addHeaderLink(record, url, name){


    let WPHeaderRecord = getWPHeader(record)


    if(!WPHeaderRecord){
        WPHeaderRecord = {
            "@type": "WPHeader",
            "@id": h.getValue(record, 'url') + "#wpfooter",
            "hasPart": []
        }
    }

    let newLink = {
        "@type": "WebPage",
        "@id": url + "#webpage",
        "name": name,
        "url": url
    }

    WPHeaderRecord = h.addValue(WPHeaderRecord, 'hasPart', newLink)

    record = setWPHeader(record, WPHeaderRecord)

    return record

}

// --------------------------------------------------------------
// Footer links
// --------------------------------------------------------------


/**
 * Retrieve WPFooter record from WebPage record
 * @param {*} record 
 * @returns {WPFooter | WebPage}
 */
export function getWPFooter(record){

    let parts = h.getValues(record, 'hasPart')

    let WPFooterRecord= parts.find(x => h.record_type(x) == 'WPFooter')

    return WPFooterRecord

}

/**
 * Set the WPFooter record
 * @param {*} record 
 * @param {*} value 
 * @returns {WebPage} The updated WebPage record
 */
export function setWPFooter(record, value){

    let parts = h.getValues(record, 'hasPart')

    // Remove current WPFooter record
    parts = parts.filter(x => h.record_type(x) != 'WPFooter')

    // Add new one
    parts.push(value)

    record = h.setValues(record, 'hasPart', parts)

    return record

}

/**
 * Returns list of links in WPHeader record
 * @param {WebPage | WebSite} record 
 * @returns {WebPage[]}
 */
export function getFooterLinks(record){

    let WPFooterRecord = getWPFooter(record)

    let links = h.getValues(WPFooterRecord, 'hasPart')

    return links

}

/**
 * Add a footer link in the WPFooter record
 * @param {WebPage} record - The WebPage record
 * @param {*} url - The url of the link to add
 * @param {*} name - The name / title of the link to add
 * @returns {WebPage} The updated WebPage record
 */
export function addFooterLink(record, url, name){


    let WPFooterRecord = getWPFooter(record)


    if(!WPFooterRecord){
        WPFooterRecord = {
            "@type": "WPFooter",
            "@id": h.getValue(record, 'url') + "#wpfooter",
            "hasPart": []
        }
    }

    let newLink = {
        "@type": "WebPage",
        "@id": url + "#webpage",
        "name": name,
        "url": url
    }

    WPFooterRecord = h.addValue(WPFooterRecord, 'hasPart', newLink)

    record = setWPFooter(record, WPFooterRecord)

    return record

}