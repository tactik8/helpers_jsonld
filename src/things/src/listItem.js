


import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'


export class ListItem extends Thing {
    constructor(item_or_record) {
        super()
        this._defaultRecordType = "ListItem"

        this._loadRecord(item_or_record)
        this._setValueIfNotRecordType('ListItem', 'name', item_or_record)


    }

    toString() {
        let content = `${this.position || ""} ${this.item.name || this.item.record_id || this.item?.['@id']}`
        return content
    }

    get position() {
        return this.getValue("position")
    }
    set position(value) {
        return this.setValue("position", value)
    }

    get item() {
        return this.getValue("item")
    }
    set item(value) {
        return this.setValue("item", value)
    }

    get previousItem() {
        return this.getValue("previousItem")
    }
    set previousItem(value) {
        return this.setValue("previousItem", value)
    }

    get nextItem() {
        return this.getValue("nextItem")
    }
    set nextItem(value) {
        return this.setValue("nextItem", value)
    }



}