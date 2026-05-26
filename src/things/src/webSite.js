


import { v4 as uuidv4 } from 'uuid';


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'



export class WebSite extends Thing {
    constructor(url) {
        super()
        this.record_type = "WebSite"
        this.url = url
    }

    addHeaderLink(url, name){
        this.record = addHeaderLink(this.record, url, name)
    }
    addFooterLink(url, name){
        this.record = addFooterLink(this.record, url, name)
    }

    domain(){

    }

    // Static
    addHeaderLink(record, url, name){
        return addHeaderLink(record, url, name)
    }
    addFooterLink(record, url, name){
        return addFooterLink(record, url, name)
    }

}




function getWPHeader(record){

    let parts = h.getValues(record, 'hasPart')

    let header = parts.find(x => h.getValue(x, '@type') == "WPHeader")

    if(!header){
        header = {"@type": "WPHeader", "hasPart": []}
        record = h.addValue(record, 'hasPart', header)
    }

    return header

}

function getWPFooter(record){

    let parts = h.getValues(record, 'hasPart')

    let footer = parts.find(x => h.getValue(x, '@type') == "WPFooter")

    if(!footer){
        footer = {"@type": "WPHeader", "hasPart": []}
        record = h.addValue(record, 'hasPart', footer)
    }

    return footer

}

function addHeaderLink(record, url, name){

    let newLink = {
        "@type": "WebPage",
        "name": name,
        "url": url
    }

    let header = getHeader(record)

    record = h.addValue(header, 'hasPart', newLink)

    return record
}


function addFooterLink(record, url, name){

    let newLink = {
        "@type": "WebPage",
        "name": name,
        "url": url
    }

    let footer = getFooter(record)

    record = h.addValue(footer, 'hasPart', newLink)

    return record
}


function getDomain(url){

    


}