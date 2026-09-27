

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'




/**
 * Represents a message in the system.
 * 
 * 
 */
export class PropertyValue extends Thing {
    constructor(propertyID_or_record, value) {
        super()
        this._defaultRecordType = "PropertyValue"

        this._loadRecord(propertyID_or_record)
        this._setValueIfString('propertyID', propertyID_or_record)
        this._setValueIfNotNull('value', value)

    }

    toString() {
        return toString(this.record)
    }

    get propertyID() {
        return h.getValues('propertyID')
    }
    set propertyID(value) {
        return this.setValues('propertyID', value)
    }

    get value() {
        return h.getValues('value')
    }
    set value(value) {
        return this.setValues('value', value)
    }

    get unitCode() {
        return h.getValues('unitCode')
    }
    set unitCode(value) {
        return this.setValues('unitCode', value)
    }

    get unitText() {
        return h.getValues('unitText')
    }
    set unitText(value) {
        return this.setValues('unitText', value)
    }

    get minValue() {
        return h.getValues('minValue')
    }
    set minValue(value) {
        return this.setValues('minValue', value)
    }

    get maxValue() {
        return h.getValues('maxValue')
    }
    set maxValue(value) {
        return this.setValues('maxValue', value)
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
