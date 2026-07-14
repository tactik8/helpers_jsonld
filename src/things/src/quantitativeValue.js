
const randomUUID = globalThis.crypto.randomUUID

import { records } from '../../records/records.js'

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'
import { Message } from './message.js'
import { timeStamp } from 'console';


/**
 * Represents a message in the system.
 * 
 * 
 */
export class QuantitativeValue extends CreativeWork {
    constructor(record_or_value, unit) {
        super()
        this.record_type = "QuantitativeValue"
        if (record?.['@type'] == "QuantitativeValue") {
            this.record = record
        } else {
            this.value = this.record_or_value
            this.unitText = unit
        }
    }

    toString() {
        return toString(this.record)
    }

    get additionalProperty() {
        return h.getValues(this._record, 'additionalProperty')
    }
    set additionalProperty(value) {
        this._record = Thing.setValues(this._record, 'additionalProperty', value)
    }

    get maxValue() {
        return h.getValues(this._record, 'maxValue')
    }
    set maxValue(value) {
        this._record = Thing.setValues(this._record, 'maxValue', value)
    }

    get minValue() {
        return h.getValues(this._record, 'minValue')
    }
    set minValue(value) {
        this._record = Thing.setValues(this._record, 'minValue', value)
    }

    get unitCode() {
        return h.getValues(this._record, 'unitCode')
    }
    set unitCode(value) {
        this._record = Thing.setValues(this._record, 'unitCode', value)
    }

    get unitText() {
        return h.getValues(this._record, 'unitText')
    }
    set unitText(value) {
        this._record = Thing.setValues(this._record, 'unitText', value)
    }

    get value() {
        return h.getValues(this._record, 'value')
    }
    set value(value) {
        this._record = Thing.setValues(this._record, 'value', value)
    }

    get valueReference() {
        return h.getValues(this._record, 'valueReference')
    }
    set valueReference(value) {
        this._record = Thing.setValues(this._record, 'valueReference', value)
    }


}


function toString(record) {

    let content = ''

    content += `${record?.name || record?.['@id']} `



}
