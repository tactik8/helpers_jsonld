
import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'
import { CreativeWork } from './creativeWork.js'
import { ItemList } from './itemList.js'


export class WebPage extends CreativeWork {
    constructor(url_or_record) {
        super()
        this._defaultRecordType = "WebPage"
        this.website

        this._loadRecord(url_or_record)
        this._setValueIfString('url', url_or_record)

        if(h.record_type(url_or_record) == "WebSite"){
            this.website = url_or_record
            let record = url_or_record.record || url_or_record
            record = JSON.parse(JSON.stringify(record))
            record['@type'] = 'WebPage'
            this.record = record
        }
    }



    get breadcrumb() {
        return this.getValue("breadcrumb")
    }
    set breadcrumb(value) {
        return this.setValue("breadcrumb", value)
    }

    addBreadcrumb(url, name) {

        // Init bredcrumb if not done
        let breadcrumb = this.breadcrumb || []
        if (breadcrumb?.record_type != "BreadcrumbList") {
            breadcrumb = new ItemList(breadcrumb)
        }

        // add 
        breadcrumb.add({ "@type": "WebPage", url, name })
        this.breadcrumb = breadcrumb

        return
    }

    get mainContentOfPage() {
        return this.getValues("mainContentOfPage")
    }
    set mainContentOfPage(value) {
        return this.setValues(this._record, "mainContentOfPage", value)
    }

    get primaryImageOfPage() {
        return this.getValues("primaryImageOfPage")
    }
    set primaryImageOfPage(value) {
        return this.setValues(this._record, "primaryImageOfPage", value)
    }

    get relatedLink() {
        return this.getValues("relatedLink")
    }
    set relatedLink(value) {
        return this.setValues(this._record, "relatedLink", value)
    }

    get reviewedBy() {
        return this.getValues("reviewedBy")
    }
    set reviewedBy(value) {
        return this.setValues(this._record, "reviewedBy", value)
    }

    get significantLink() {
        return this.getValues("significantLink")
    }
    set significantLink(value) {
        return this.setValues(this._record, "significantLink", value)
    }

    get specialty() {
        return this.getValues("specialty")
    }
    set specialty(value) {
        return this.setValues(this._record, "specialty", value)
    }


    // Web specific shortcuts
    get WPHeader() {
        this.record = ensureWebPart(this.record, 'WPHeader')
        return getWebPart(this.record, "WPHeader" )
    }

    set WPHeader(value) {
        this.record = setWebPart(this.record, "WPHeader",  value)
    }

    get WPFooter() {
        this.record = ensureWebPart(this.record, 'WPFooter')
        return getWebPart(this.record, "WPFooter")
    }

    set WPFooter(value) {
        this.record = setWebPart(this.record, "WPFooter",  value)
    }

    get WPSideBar() {
        this.record = ensureWebPart(this.record, 'WPSideBar')
        return getWebPart(this.record, "WPSideBar")
    }

    set WPSideBar(value) {
        this.record = setWebPart(this.record, "WPSideBar",  value)
    }

    get Table() {
        return getWebPart(this.record, "Table")
    }

    set Table(value) {
        this.record = setWebPart(this.record,"Table",  value)
    }

    // Shortcuts for adding links to header and footer
    addHeaderLink(url, name) {
        this.record = addHeaderLink(this.record, url, name)
    }

    addFooterLink(url, name) {
        this.record = addFooterLink(this.record, url, name)
    }

    domain() {
        return getDomain(this.url)
    }

    // Static

    static getWPHeader(record) {
        return getWebPart(record, "WPHeader",)
    }

    static getWPFooter(record) {
        return getWebPart(record, "WPFooter")
    }

    static getWPSideBar(record) {
        return getWebPart(record, "WPSideBar")
    }

    static getTable(record) {
        return getWebPart(record, "Table")
    }

    static setWPHeader(record, value) {
        return setWebPart(record, "WPHeader", value)
    }

    static setWPFooter(record, value) {
        return setWebPart(record, "WPFooter", value)
    }

    static setWPSideBar(record, value) {
        return setWebPart(record, "WPSideBar", value)
    }

    static setTable(record, value) {
        return setWebPart(record, "Table", value)
    }

    static addHeaderLink(record, url, name) {
        return addHeaderLink(record, url, name)
    }
    static addFooterLink(record, url, name) {
        return addFooterLink(record, url, name)
    }

    static getDomain(record_or_url) {
        return getDomain(h.getValue(record_or_url, "url") || record_or_url)
    }

}




function ensureWebPart(record, partType) {

    let parts = h.getValues(record, 'hasPart')

    let part = parts.find(x => h.getValue(x, '@type') == partType)

    if (!part) {
        part = { "@type": partType, "hasPart": [] }
        record = h.addValue(record, 'hasPart', part)
    }

    return record

}

function getWebPart(record, partType) {

    let parts = h.getValues(record, 'hasPart')

    let part = parts.find(x => h.record_type(x) == partType)

    return part

}

/**
 * Set a particular webpart, completely replacing it
 * @param {*} record 
 * @param {*} partType 
 * @param {*} value 
 * @returns 
 */
function setWebPart(record, partType, value) {

    let parts = h.getValues(record, "hasPart")

    parts = parts.filter(x => h.record_type(x) != partType)

    parts.push(value)

    record = h.setValues(record, "hasPart", parts)

    return record

}


function addHeaderLink(record, url, name) {

    record = ensureWebPart(record, 'WPHeader')

    let newLink = {
        "@type": "WebPage",
        "name": name,
        "url": url
    }

    let header = getWebPart(record, "WPHeader")

    header = h.addValue(header, 'hasPart', newLink)

    record = setWebPart(record, 'WPHeader', header)

    return record
}


function addFooterLink(record, url, name) {

    record = ensureWebPart(record, 'WPFooter')

    let newLink = {
        "@type": "WebPage",
        "name": name,
        "url": url
    }

    let footer = getWebPart(record, "WPFooter")

    footer = h.addValue(footer, 'hasPart', newLink)

    record = setWebPart(record, 'WPFooter', footer)

    return record
}


function getDomain(url) {

    try {
        let domain = new Url(url).hostname
        domain = domain.replace(/^www\./, '')
        return domain
    } catch (err) {
        return undefined
    }

}