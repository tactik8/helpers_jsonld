

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'
import { CreativeWork } from './creativeWork.js'



export class WebSite extends CreativeWork {
    constructor(url_or_record) {
        super()
        this._defaultRecordType = "WebSite"

        this._loadRecord(url_or_record)
        this._setValueIfString('url', url_or_record)
    }

    get breadcrumb() {
        return this.getValues("breadcrumb")
    }
    set breadcrumb(value) {
        return this.setValues("breadcrumb", value)
    }

    get mainContentOfPage() {
        return this.getValues("mainContentOfPage")
    }
    set mainContentOfPage(value) {
        return this.setValues("mainContentOfPage", value)
    }

    get primaryImageOfPage() {
        return this.getValues("primaryImageOfPage")
    }
    set primaryImageOfPage(value) {
        return this.setValues("primaryImageOfPage", value)
    }

    get relatedLink() {
        return this.getValues("relatedLink")
    }
    set relatedLink(value) {
        return this.setValues("relatedLink", value)
    }

    get reviewedBy() {
        return this.getValues("reviewedBy")
    }
    set reviewedBy(value) {
        return this.setValues("reviewedBy", value)
    }

    get significantLink() {
        return this.getValues("significantLink")
    }
    set significantLink(value) {
        return this.setValues("significantLink", value)
    }

    get specialty() {
        return this.getValues("specialty")
    }
    set specialty(value) {
        return this.setValues("specialty", value)
    }


    // Web specific shortcuts
    get WPHeader() {
        return getWebPart("WPHeader", this.record)
    }

    set WPHeader(value) {
        this.record = setWebPart("WPHeader", this.record, value)
    }

    get WPFooter() {
        return getWebPart("WPFooter", this.record)
    }

    set WPFooter(value) {
        this.record = setWebPart("WPFooter", this.record, value)
    }

    get WPSideBar() {
        return getWebPart("WPSideBar", this.record)
    }

    set WPSideBar(value) {
        this.record = setWebPart("WPSideBar", this.record, value)
    }

    get Table() {
        return getWebPart("Table", this.record)
    }

    set Table(value) {
        this.record = setWebPart("Table", this.record, value)
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
        return getWebPart("WPHeader", record)
    }

    static getWPFooter(record) {
        return getWebPart("WPFooter", record)
    }

    static getWPSideBar(record) {
        return getWebPart("WPSideBar", record)
    }

    static getTable(record) {
        return getWebPart("Table", record)
    }

    static setWPHeader(record, value) {
        return setWebPart("WPHeader", record, value)
    }

    static setWPFooter(record, value) {
        return setWebPart("WPFooter", record, value)
    }

    static setWPSideBar(record, value) {
        return setWebPart("WPSideBar", record, value)
    }

    static setTable(record, value) {
        return setWebPart("Table", record, value)
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




function getWebPart(partType, record) {

    let parts = h.getValues(record, 'hasPart')

    let part = parts.find(x => h.getValue(x, '@type') == partType)

    if (!part) {
        part = { "@type": partType, "hasPart": [] }
        record = h.addValue(record, 'hasPart', part)
    }

    return part

}

function setWebPart(partType, record, value) {

    let part = getWebPart(record, partType)

    record = Thing.setValue(part, "hasPart", value)

    return record

}


function addHeaderLink(record, url, name) {

    let newLink = {
        "@type": "WebPage",
        "name": name,
        "url": url
    }

    let header = getWebPart("WPHeader", record)

    record = h.addValue(header, 'hasPart', newLink)

    return record
}


function addFooterLink(record, url, name) {

    let newLink = {
        "@type": "WebPage",
        "name": name,
        "url": url
    }

    let footer = getWebPart("WPFooter", record)

    record = h.addValue(footer, 'hasPart', newLink)

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