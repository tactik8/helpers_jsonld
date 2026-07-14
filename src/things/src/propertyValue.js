
const randomUUID = globalThis.crypto.randomUUID

import { records } from '../../records/records.js'

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'
import { Message } from './message.js'
import { timeStamp } from 'console';
import { Offer } from './offer.js';
import things from '../things.js';


/**
 * Represents a message in the system.
 * 
 * 
 */
export class PropertyValue extends Thing {
    constructor(record) {
        super()
        this.record_type = "PropertyValue"
        if (record?.['@type'] == "PropertyValue") {
            this.record = record
        }
    }

    toString() {
        return toString(this.record)
    }

    get propertyID() {
        return h.getValues(this._record, 'propertyID')
    }
    set propertyID(value) {
        this._record = Thing.setValues(this._record, 'propertyID', value)
    }

    get value() {
        return h.getValues(this._record, 'value')
    }
    set value(value) {
        this._record = Thing.setValues(this._record, 'value', value)
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

    get minValue() {
        return h.getValues(this._record, 'minValue')
    }
    set minValue(value) {
        this._record = Thing.setValues(this._record, 'minValue', value)
    }

    get maxValue() {
        return h.getValues(this._record, 'maxValue')
    }
    set maxValue(value) {
        this._record = Thing.setValues(this._record, 'maxValue', value)
    }

}


function toString(record) {

    if (Array.isArray(record)) {
        return record.map(x => toString(x))
    }

    let content = ''

    content += `${h.getValue(record, "propertyID") || ""}: ${h.getValue(record, "value") || ""} ${h.getValue(record, "unitText") || ""}`

    return content

}
