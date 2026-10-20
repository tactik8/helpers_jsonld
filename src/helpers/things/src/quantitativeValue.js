


import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'


/**
 * Represents a message in the system.
 * 
 * 
 */
export class QuantitativeValue extends CreativeWork {
    constructor(record_or_value, unit) {
        super()
        this._defaultRecordType = "QuantitativeValue"

        this._loadRecord(record_or_value)
        this._setValueIfString('name', record_or_value)
        this._setValueIfNumber('unit', unit)


    }

    toString() {
        return toString(this.record)
    }

    get additionalProperty() {
        return this.getValues('additionalProperty')
    }
    set additionalProperty(value) {
        return this.setValues('additionalProperty', value)
    }

    get maxValue() {
        return this.getValues('maxValue')
    }
    set maxValue(value) {
        return this.setValues('maxValue', value)
    }

    get minValue() {
        return this.getValues('minValue')
    }
    set minValue(value) {
        return this.setValues('minValue', value)
    }

    get unitCode() {
        return this.getValues('unitCode')
    }
    set unitCode(value) {
        return this.setValues('unitCode', value)
    }

    get unitText() {
        return this.getValues('unitText')
    }
    set unitText(value) {
        return this.setValues('unitText', value)
    }

    get value() {
        return this.getValues('value')
    }
    set value(value) {
        return this.setValues('value', value)
    }

    get valueReference() {
        return this.getValues('valueReference')
    }
    set valueReference(value) {
        return this.setValues('valueReference', value)
    }


}


function toString(record) {

    let content = ''

    content += `${record?.name || record?.['@id']} `



}
