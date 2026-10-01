

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'
import { CreativeWork } from './creativeWork.js'

import { ItemList } from './itemList.js'
import { WebPage} from './webPage.js'

export class WebSite extends WebPage {
    constructor(url_or_record) {
        super()
        this._defaultRecordType = "WebSite"

        this._loadRecord(url_or_record)
        this._setValueIfString('url', url_or_record)
    }

    get issn() {
        return this.getValues("issn")
    }
    set issn(value) {
        return this.setValues("issn", value)
    }



    getWebPage(url, name){


        let webpage = new WebPage(this)


        webpage.url = url
        webpage.name = name

        return webpage
    }


    domain() {
        return getDomain(this.url)
    }

    

    static getDomain(record_or_url) {
        return getDomain(h.getValue(record_or_url, "url") || record_or_url)
    }

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


