
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyHelpers from './datapointPropertyHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'
import * as formatHelpers from './datapointFormatHelpers.js'
import * as metadataHelpers from './datapointMetadata.js'

const dph = {

    ...arrayHelpers,
    ...comparisonHelpers,
    ...conversionHelpers,
    ...formatHelpers,
    ...objectHelpers,
    ...propertyHelpers,
    ...propertyShortcut,
    ...metadataHelpers

}



export class DatapointDB{
    /**
     * Datapoint DB
     * @param {Metadata[]} metadata - List of datapoints
     */
    constructor(metadata){
        this._datapoints = []
        this._metadata = new dph.Metadata(metadata)
    }


    toString(){
        return dph.toString(this.datapoints)
    }

    toJSON(){
        return this.datapoints
    }


    get metadata(){
        return this._metadata
    }

    set metadata(value){
        this._metadata = new dph.Metadata(value)
    }

    get metadataRecord(){
        return JSON.parse(JSON.stringify(this.metadata.record))
    }

    // Datapoints
    /**
     * Get list of datapoints
     */
    get datapoints(){
        return this._datapoints
    }

    /**
     * Set list of datapoints
     */
    set datapoints(value){
        this._datapoints = h.toArray(value)
    }

    /**
     * Get list of datapoint IDs
     */
    get datapointIDs(){
        return this._datapoints.map(x => h.record_id(x))
    }

    /**
     * Add datapoint record to db.
     * @param {*} value 
     */
    addDatapoint(value){
        this._datapoints = dph.appendDatapoint(this._datapoints, value)
    }


    // Record

    /**
     * Return record for a given id
     * @param {*} record_id 
     * @returns 
     */
    getRecord(record_id){
        return dph.getRecord(this._datapoints, record_id)
    }

    /**
     * Return record for a given id
     * @param {*} record_id 
     * @returns 
     */
    get(record_id){
        return this.getRecord(record_id)
    }

    /**
     * Return all records
     * @param {*} record_id 
     * @returns 
     */
    getRecords(){
        return dph.getRecords(this._datapoints)
    }

    /**
     * Return all records
     * @param {*} record_id 
     * @returns 
     */
    get records(){
        return dph.getRecords(this._datapoints)
    }

    /**
     * Convert record to datapoint and add to db.
     * @param {*} value 
     * @param {*} metadata 
     * @returns 
     */
    addRecord(value, recordID, modifiedDate, createdDate, metadata, transactionID){
        metadata = metadata || this.metadataRecord
        if(recordID){
            metadata = dph.setSourceRecordID(metadata, recordID)
        }
        if(modifiedDate){
            metadata = dph.setSourceModifiedDate(metadata, modifiedDate)
        }
        if(createdDate){
            metadata = dph.setSourceCreatedDate(metadata, createdDate)
        }

        this._datapoints = dph.appendRecord(this._datapoints, value, metadata, transactionID)
    }

     /**
     * Add record or datapoint to db
     * @param {*} value 
     * @param {*} recordID 
     * @param {*} modifiedDate
     * @param {*} createdDate
     * @param {*} metadata 
     * @param {*} transactionID 
     * @returns 
     */
    add(value, recordID, modifiedDate, createdDate, metadata, transactionID){
        metadata = metadata || this.metadataRecord
        if(recordID){
            metadata = dph.setSourceRecordID(metadata, recordID)
        }
        if(modifiedDate){
            metadata = dph.setSourceModifiedDate(metadata, modifiedDate)
        }
        if(createdDate){
            metadata = dph.setSourceCreatedDate(metadata, createdDate)
        }
        this._datapoints = dph.appendRecord(this._datapoints, value, metadata, transactionID)
    }





    // Values

    /**
     * Return value for a given id, propertyID and position
     * @param {*} object 
     * @param {*} propertyID 
     * @returns 
     */
    getValue(object, propertyID){
        return dph.getValue(this._datapoints, object, propertyID)
    }

    /**
     * Return values for a given id, propertyID
     * @param {*} object 
     * @param {*} propertyID 
     * @returns 
     */
    getValues(object, propertyID){
        return dph.getValues(this._datapoints, object, propertyID)
        //return h.getValues(getRecord(object), propertyID)
    }


    /**
     * Set value by adding a datapoint
     * @param {*} object 
     * @param {*} propertyID 
     * @param {*} value 
     * @param {*} recordID 
     * @param {*} modifiedDate
     * @param {*} createdDate
     * @param {*} metadata 
     * @param {*} transactionID 
     * @returns 
     */
    setValue(object, propertyID, value, recordID, modifiedDate, createdDate, metadata, transactionID){
        metadata = metadata || this.metadataRecord
        if(recordID){
            metadata = dph.setSourceRecordID(metadata, recordID)
        }
        if(modifiedDate){
            metadata = dph.setSourceModifiedDate(metadata, modifiedDate)
        }
        if(createdDate){
            metadata = dph.setSourceCreatedDate(metadata, createdDate)
        }

        this._datapoints =  dph.setValue(this._datapoints, object, propertyID, value, metadata, transactionID)
      //  transactionID = transactionID || h.randomUUID()
      //  this.addDatapoint(newCreate(object, propertyID, value, metadata, transactionID))
    }

    /**
     * Add a value by adding a insert datapoint
     * @param {*} object 
     * @param {*} propertyID 
     * @param {*} value 
     * @param {*} recordID 
     * @param {*} modifiedDate
     * @param {*} createdDate
     * @param {*} metadata 
     * @param {*} transactionID 
     */
    addValue(object, propertyID, value, recordID, modifiedDate, createdDate, metadata, transactionID){
        metadata = metadata || this.metadataRecord
        if(recordID){
            metadata = dph.setSourceRecordID(metadata, recordID)
        }
        if(modifiedDate){
            metadata = dph.setSourceModifiedDate(metadata, modifiedDate)
        }
        if(createdDate){
            metadata = dph.setSourceCreatedDate(metadata, createdDate)
        }


        transactionID = transactionID || h.randomUUID()

        this._datapoints =  dph.addValue(this._datapoints, object, propertyID, value, metadata, transactionID)
    }

    /**
     * Replace a specific value by adding a replace datapoint
     * @param {*} object 
     * @param {*} propertyID 
     * @param {*} replacee 
     * @param {*} replacer 
     * @param {*} recordID 
     * @param {*} modifiedDate
     * @param {*} createdDate
     * @param {*} metadata 
     * @param {*} transactionID 
     */
    replaceValue(object, propertyID, replacee, replacer, recordID, modifiedDate, createdDate, metadata, transactionID){
        metadata = metadata || this.metadataRecord
        if(recordID){
            metadata = dph.setSourceRecordID(metadata, recordID)
        }
        if(modifiedDate){
            metadata = dph.setSourceModifiedDate(metadata, modifiedDate)
        }
        if(createdDate){
            metadata = dph.setSourceCreatedDate(metadata, createdDate)
        }
        transactionID = transactionID || h.randomUUID()
        this.addDatapoint(dph.newReplace(object, propertyID, replacee, replacer, metadata, transactionID))
    }

    /**
     * Delete a specific value by adding a delete datapoint
     * @param {*} object 
     * @param {*} propertyID 
     * @param {*} value 
     * @param {*} recordID 
     * @param {*} modifiedDate
     * @param {*} createdDate
     * @param {*} metadata 
     * @param {*} transactionID 
     */
    deleteValue(object, propertyID, value, recordID, modifiedDate, createdDate, metadata, transactionID){
        metadata = metadata || this.metadataRecord
        if(recordID){
            metadata = dph.setSourceRecordID(metadata, recordID)
        }
        if(modifiedDate){
            metadata = dph.setSourceModifiedDate(metadata, modifiedDate)
        }
        if(createdDate){
            metadata = dph.setSourceCreatedDate(metadata, createdDate)
        }
        transactionID = transactionID || h.randomUUID()
        this.addDatapoint(dph.newDelete(object, propertyID, value, metadata, transactionID))
    }
}



