
const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'
import { CreativeWork } from './creativeWork.js'



export class WebPage extends CreativeWork {
    constructor(url) {
        super()
        this.record_type = "WebSite"
        this.url = url
    }


    get breadcrumb() {
        return h.getValues(this._record, "breadcrumb")
    }
    set breadcrumb(value) {
        this._record = Thing.setValues(this._record, "breadcrumb", value)
    }
    
    get mainContentOfPage() {
        return h.getValues(this._record, "mainContentOfPage")
    }
    set mainContentOfPage(value) {
        this._record = Thing.setValues(this._record, "mainContentOfPage", value)
    }
    
    get primaryImageOfPage() {
        return h.getValues(this._record, "primaryImageOfPage")
    }
    set primaryImageOfPage(value) {
        this._record = Thing.setValues(this._record, "primaryImageOfPage", value)
    }
    
    get relatedLink() {
        return h.getValues(this._record, "relatedLink")
    }
    set relatedLink(value) {
        this._record = Thing.setValues(this._record, "relatedLink", value)
    }
    
    get reviewedBy() {
        return h.getValues(this._record, "reviewedBy")
    }
    set reviewedBy(value) {
        this._record = Thing.setValues(this._record, "reviewedBy", value)
    }

    get significantLink() {
        return h.getValues(this._record, "significantLink")
    }
    set significantLink(value) {
        this._record = Thing.setValues(this._record, "significantLink", value)
    }

    get specialty() {
        return h.getValues(this._record, "specialty")
    }
    set specialty(value) {
        this._record = Thing.setValues(this._record, "specialty", value)
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

    get Table(){
        return getWebPart("Table", this.record)
    }

    set Table(value){
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

    static getTable(record){
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

    static setTable(record, value){
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