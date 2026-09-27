

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { DataFeedItem} from './dataFeedItem.js'

/**
 * Represents a message in the system.
 * 
 * 
 */
export class DataFeed extends Thing {
    constructor(record_or_systemID, tableID) {
        super()
        this._defaultRecordType = "DataFeed"


        this._loadRecord(record_or_systemID)
   
        if (h.record_type(record_or_systemID) != this._defaultRecordType) {
            this.sourceSystemID = record_or_systemID
            this.sourceTableID = tableID
        } 

    }

    toString() {
        return toString(this.record)
    }

    
    /**
     * 
     * @param {*} systemID 
     * @param {*} tableID 
     * @param {*} recordID 
     */
    setSource(systemID, tableID, recordID){
        this.sourceSystemID = systemID
        this.sourceTableID = tableID
        this.sourceRecordID = recordID
      
    }

    get sourceSystemID(){
        let systemID = this.getAdditionalProperty("sourceSystemID")
        systemID = systemID ?? this.record_id.split('/').slice(0, this.record_id.split('/').length -2).join('/')
        return systemID
    }
    set sourceSystemID(value){
        this.setAdditionalProperty("sourceSystemID", value)
        this.#setRecordID()
    }

    get sourceTableID(){
        let tableID = this.getAdditionalProperty("sourceTableID")
        tableID = tableID ?? this.record_id.split('/')?.[this.record_id.split('/').length -2] 
        return tableID
    }
    set sourceTableID(value){
        this.setAdditionalProperty("sourceTableID", value)
         this.#setRecordID()
    }


    /**
     * Add a new DataFeedItem
     * @param {*} item 
     * @param {*} item_id 
     */
    add(item, item_id){
        return this.addDataFeedItem(item, item_id)
    }

    /**
     * Add a new DataFeedItem
     * @param {*} item 
     * @param {*} item_id 
     * @returns 
     */
    addDataFeedItem(item, item_id){
        let di = new DataFeedItem(item, this.sourceSystemID, this.sourceTableID, item_id)

        let elements = this.getValues('dataFeedElement')
        elements.push(di)
        this.setValues('dataFeedElement', elements)
        return di
    }

     /**
     * Sets the record id 
     */
    #setRecordID(){
        if(this.sourceSystemID && this.sourceTableID){
            let record_id = this.sourceSystemID + '/' + this.sourceTableID 
        }
    }

}


function toString(record) {

    let content = ''

    content += `${record?.name || record?.['@id']} `



}
