

import { v4 as uuidv4 } from 'uuid';


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'



export class WebPage extends Thing {
    constructor(url) {
        super()
        this.record_type = "WebPage"
        this.url = url
    }
}

export class WebSite extends Thing {
    constructor(url) {
        super()
        this.record_type = "WebSite"
        this.url = url
    }
}

export class WebAPI extends Thing {
    constructor(url) {
        super()
        this.record_type = "WebAPI"
        this.url = url
    }
}