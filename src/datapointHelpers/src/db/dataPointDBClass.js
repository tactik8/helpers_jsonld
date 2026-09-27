import { _h } from '../../../index.js'

import * as dp from '../methods/dataPointMethods.js'
import { recordIdHelpers } from '../../../recordIdHelpers/recordIdHelpers.js'
import { Base } from '../classes/baseClass.js'
import { Metadata } from '../classes/metadataClass.js'
import { DataPoint } from '../classes/dataPointClass.js'


export class DataPointDB extends Metadata {
    constructor(record_or_confidence, observationDate, execution, datafeed, datafeedItem, agent, instrument) {
        super(record_or_confidence, observationDate, execution, datafeed, datafeedItem, agent, instrument)

        this._dataPoints = []


    }



    // ------------------------------------------------------------------------------------------
    // DataPoints Class Objects
    // ------------------------------------------------------------------------------------------


    /**
     * DataPoints class objects
     * 
     */
    get dataPoints() {
        return dp.sort(this._dataPoints)
    }

    set dataPoints(value) {
        this._dataPoints = dp.sort(value)
    }

    get dp() {
        return this.dataPoints
    }

    set dp(value) {
        this.dataPoints = value
    }


    toString() {
        return dp.toString(this.dataPoints)
    }


    /**
     * Retrieve DataPoints class objects for a specific @id
     * @param {*} record_id 
     * @returns 
     */
    get(record_id) {
        return this._dataPoints.filter(x => x.object?.record_id == record_id)
    }

    search(filter) {
        return _h.filter(this._dataPoints, filter)
    }


    // ------------------------------------------------------------------------------------------
    // JSONLD records
    // ------------------------------------------------------------------------------------------



    /**
     * Adds a jsonld record
     * @param {*} record 
     * @param {*} metadata 
     */
    set(record, metadata){
        metadata = metadata || this.metadata
        return this.#_addJsonldRecord(undefined, undefined, record, metadata)
    }

    add(record_or_object, propertyID, value, metadata) {

        metadata = metadata ?? this.metadata

        // Case 1. Datapoint
        if (record_or_object?.record_type == 'DataPoint') {
            this._dataPoints.push(record_or_object)
            return record_or_object
        }
        if (record_or_object?.['@type'] == 'DataPoint') {
            let dp = new DataPoint(record_or_object, undefined, undefined, metadata)
            this._dataPoints.push(dp)
            return dp
        }


        // Case 2. Full record object
        if (record_or_object && !propertyID) {
            return this.#_addJsonldRecord(undefined, undefined, record_or_object, metadata)
        }

        // Case 3. Simple dp
        if (record_or_object && propertyID) {
            let dp = new DataPoint(record_or_object, propertyID, value, metadata)
            this._dataPoints.push(dp)
            return dp
        }

    }

    /**
     * Convert a jsonld record (or array of jsonld records) to dapapoints and store them
     * @param {*} value 
     */
    addRecord(value, metadata) {
        return this.#_addJsonldRecord(undefined, undefined, value, metadata ?? this.metadata)
    }




    // ------------------------------------------------------------------------------
    // JSONLD
    // ------------------------------------------------------------------------------

    get jsonld() {
        return dp.datapointsToRecord(this.dataPoints)
    }

    set jsonld(value) {
        return this.#_addJsonldRecord(undefined, undefined, value, this.metadata)
    }



    // ------------------------------------------------------------------------------
    // Other
    // ------------------------------------------------------------------------------


   
    /**
     * Converts jsonld records to DataPoints and stores them
     * @param {*} objectID 
     * @param {*} propertyID 
     * @param {*} value 
     * @returns 
     */
    #_addJsonldRecord(objectID, propertyID, value, metadata) {

        let dataPointRecords = dp.recordToDatapoints(value, metadata)

        let dataPoints = dataPointRecords.map(x => new DataPoint(x))

        this.dataPoints = this.dataPoints.concat(dataPoints)

        return

    }

    /**
     * Inserts datapoint in list, checks for duplicate
     * @param {*} datapoint 
     */
    #add_datapoint(datapoint){

        if(_h.isArray(datapoint)){
            datapoint = dp.dedupe(datapoint)
            return datapoint.map(x => this.#add_datapoint(x))
        }

        // Search for equal datapoints
        let equalRecord = this.dataPoints.find(x => dp.isEqual(x, datapoint))

        if(equalRecord){
            return
        }

        this._dataPoints.push(datapoint)

    }

}