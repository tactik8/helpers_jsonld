

const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import { _h as h}  from '../../index.js'

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