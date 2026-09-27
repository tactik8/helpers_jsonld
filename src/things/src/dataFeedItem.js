

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'


/**
 * Represents a message in the system.
 * 
 * 
 */
export class DataFeedItem extends Thing {
    constructor(record_or_item, sourceSystemID, sourceTableID, sourceRecordID) {
        super()
        this._defaultRecordType = "DataFeedItem"


        this._loadRecord(record_or_item)
       
        if (h.record_type(record_or_item) != this._defaultRecordType) {
            this.item = record_or_item
            this.sourceSystemID = sourceSystemID
            this.sourceTableID = sourceTableID
            this.sourceRecordID = sourceRecordID
        }

    }

    toString() {
        return toString(this.record)
    }

    get dateCreated() {
        return this.getValue('dateCreated')
    }
    set dateCreated(value) {
        return this.setValue('dateCreated', value)
    }

    get dateDeleted() {
        return this.getValue('dateDeleted')
    }
    set dateDeleted(value) {
        return this.setValue('dateDeleted', value)
    }

    get dateModified() {
        return this.getValue('dateModified')
    }
    set dateModified(value) {
        return this.setValue('dateModified', value)
    }

    get item() {
        return this.getValue('item')
    }
    set item(value) {
        this.setValue('item', value)
        this.#setRecordID()
    }


    /**
     * 
     * @param {*} systemID 
     * @param {*} tableID 
     * @param {*} recordID 
     */
    setSource(systemID, tableID, recordID) {
        this.sourceSystemID = systemID
        this.sourceTableID = tableID
        this.sourceRecordID = recordID

    }

    get sourceSystemID() {
        let systemID = this.getAdditionalProperty("sourceSystemID")
        systemID = systemID ?? this.record_id.split('/').slice(0, this.record_id.split('/').length - 2).join('/')
        return systemID
    }
    set sourceSystemID(value) {
        this.setAdditionalProperty("sourceSystemID", value)
        this.#setRecordID()
    }

    get sourceTableID() {
        let tableID = this.getAdditionalProperty("sourceTableID")
        tableID = tableID ?? this.record_id.split('/')?.[this.record_id.split('/').length - 2]
        return tableID
    }
    set sourceTableID(value) {
        this.setAdditionalProperty("sourceTableID", value)
        this.#setRecordID()
    }

    get sourceRecordID() {
        let record_id = this.getAdditionalProperty("sourceRecordID")
        record_id = record_id ?? this.record_id.split('/')?.[this.record_id.split('/').length - 1]
        return record_id
    }
    set sourceRecordID(value) {
        this.setAdditionalProperty("sourceRecordID", value)
        this.#setRecordID()
    }

    /**
     * Sets the record id 
     */
    #setRecordID() {
        if (this.sourceSystemID && this.sourceTableID && (this.sourceRecordID ?? this.item?.id)) {
            let record_id = this.sourceSystemID + '/' + this.sourceTableID + '/' + (this.sourceRecordID ?? this.item?.id)
        }
    }
}


function toString(record) {

    let content = ''

    content += `${record?.name || record?.['@id']} `



}
