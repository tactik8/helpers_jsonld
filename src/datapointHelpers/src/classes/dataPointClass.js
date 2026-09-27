import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'


import * as dp from '../methods/dataPointMethods.js'
import { recordIdHelpers } from '../../../recordIdHelpers/recordIdHelpers.js'
import { Base } from './baseClass.js'
import { Metadata } from './metadataClass.js'


export class DataPoint extends Metadata {
    constructor(record_or_object, propertyID, value, metadata) {
        super({}, 'DataPoint')

        if (h.record_type(record_or_object) == "Datapoint") {
            this.record = record_or_object
        } else {
            this.object = record_or_object
        }

        if (propertyID) {
            this.propertyID = propertyID
        }

        if (value) {
            this.value = value
        }

        if (metadata) {
            this.metadata = metadata
        }
    }


    toString() {
       return dp.toString(this.record)
    }


    lt(other) {
        return dp.lt(this.record, other?.record ?? other)
    }

    le(other) {
        return dp.le(this.record, other?.record ?? other)
    }

    gt(other) {
        return dp.gt(this.record, other?.record ?? other)
    }
    ge(other) {
        return dp.ge(this.record, other?.record ?? other)
    }



    get object() {
        return new Base(this.getValue('object'))
    }

    set object(value) {
        value = value?.record ? value : new Base(value)
        this.setValue('object', value)
    }

    get propertyID() {
        return this.getValue('propertyID')
    }

    set propertyID(value) {
        return this.setValue('propertyID', value)
    }

    get value() {
        return this.getValue('value')
    }

    set value(value) {
        return this.setValue('value', value)
    }


    get rdf(){
        let r = {
            subject: this.object.record_id,
            
        }
    }





}



