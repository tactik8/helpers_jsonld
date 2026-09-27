


import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'

/**
 * An application programming interface accessible over Web/Internet technologies.
 * @class
 */
export class WebAPI extends Thing {
    /**
     * Create a WebAPI
     * @param {*} url_or_record - The full record or the url of the api
     */
    constructor(url_or_record) {
        super()
        this._defaultRecordType = "WebAPI"

        this._loadRecord(url_or_record)
        this._setValueIfString('url', url_or_record)


    }

    toString() {
        let content = `${this.position || ""} ${this.item.name || this.item.record_id || this.item?.['@id']}`
        return content
    }

    get documentation() {
        return this.getValue("documentation")
    }
    set documentation(value) {
        return this.setValue("documentation", value)
    }

   



}