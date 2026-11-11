


import { jsonldBase as h} from '../../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../../dataHelpers/dataHelpers.js'



export function toString(value){

    return getTitle1(value)

}

export function getTitle1(value){


    return `${h.getName(value) || h.getUrl(value) || h.record_id(value) || ""}`
    
}


export function newRecord(name, url){

  
    url = dataHelpers.url.getDomain(url)

    let record = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "@id": url + "#website",
        name, 
        url
    }

    return record
}


export function propertiesShort(){

    return ['name', 'url']
}

export function properties(){

    return ['name', 'url']

}




export function getBreadcrumb(record){
    return h.getValue(record, 'breadcrumb')
}

export function setBreadcrumb(record, value){
    return h.setValue(record, 'breadcrumb', value)
}

export function addBreadcrumb(record, value){
    
}