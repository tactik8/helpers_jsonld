

import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyHelpers from './datapointPropertyHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'
import * as formatHelpers from './datapointFormatHelpers.js'


const dph = {

    ...arrayHelpers,
    ...comparisonHelpers,
    ...conversionHelpers,
    ...formatHelpers,
    ...objectHelpers,
    ...propertyHelpers,
    ...propertyShortcut

}


export class Metadata{
    constructor(record){
        this._record = record?.record || record || {}
    }

    get record(){
        return this._record
    }

    set record(value){
        this._record = value
    }


    new(recordID){
        let m = new Metadata()
        m.record = JSON.parse(JSON.stringify(this.record))
        m.recordID = recordID
    }

    get confidence(){
        return dph.getConfidence(this.record)
    }
    set confidence(value){
        this.record = dph.setConfidence(this.record, value)
    }

    get comparisonHelpers(){
        return dph.getConfidence(this.record)
    }
    set c(value){
        this.record = dph.setConfidence(this.record, value)
    }
    
    get createdDate(){
        return dph.getSourceCreatedDate(this.record)
    }
    set createdDate(value){
        this.record = dph.setCSourcereatedDate(this.record, value)
    }

    get modifiedDate(){
        return dph.getSourceModifiedDate(this.record)
    }
    set modifiedDate(value){
        this.record = dph.setSourceModifiedDate(this.record, value)
    }

    get date(){
        return dph.getSourceModifiedDate(this.record)
    }
    set date(value){
        this._record = dph.setSourceModifiedDate(this.record, value)
    }


    get systemID(){
        return dph.getSourceSystemID(this.record)
    }
    set systemID(value){
        this.record = dph.setSourceSystemID(this.record, value)
    }

    get tableID(){
        return dph.getSourceTableID(this.record)
    }
    set tableID(value){
        this.record = dph.setSourceTableID(this.record, value)
    }

    get recordID(){
        return dph.getSourceRecordID(this.record)
    }
    set recordID(value){
        this.record = dph.setSourceRecordID(this.record, value)
    }


}

/**
 * Creates a new metadata record
 * @param {*} param0 
 * @returns 
 */
export function newMetadata({confidence, c, systemID, tableID, recordID, date, createdDate, modifiedDate} ){

    
    let r = {}

    r = dph.setConfidence(r, confidence ?? c)
    r = dph.setSourceSystemID(r, systemID)
    r = dph.setSourceTableID(r, tableID)
    r = dph.setSourceRecordID(r, recordID)
    r = dph.setSourceCreatedDate(r, createdDate)
    r = dph.setSourceModifiedDate(r, modifiedDate || date)

    return r



}




