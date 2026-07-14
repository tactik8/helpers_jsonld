
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
export class Offer extends Thing {
    constructor(record_or_value, unit) {
        super()
        this.record_type = "Offer"
        if (record_or_value?.['@type'] == "Offer") {
            this.record = record_or_value
        } else {
            this.price = record_or_value
            this.priceCurrency = unit
        }
    }

    toString() {
        return toString(this.record)
    }

    get additionalProperty() {
        return h.getValue(this._record, 'additionalProperty')
    }
    set additionalProperty(value) {
        this._record = Thing.setValues(this._record, 'additionalProperty', value)
    }

    get areaServed() {
        return h.getValue(this._record, 'areaServed')
    }
    set areaServed(value) {
        this._record = Thing.setValues(this._record, 'areaServed', value)
    }

    get itemOffered() {
        return h.getValue(this._record, 'itemOffered')
    }
    set itemOffered(value) {
        this._record = Thing.setValues(this._record, 'itemOffered', value)
    }

    get inventoryLevel() {
        return h.getValue(this._record, 'inventoryLevel')
    }
    set inventoryLevel(value) {
        this._record = Thing.setValues(this._record, 'inventoryLevel', value)
    }

    get price() {
        return h.getValue(this._record, 'price')
    }
    set price(value) {
        this._record = Thing.setValues(this._record, 'price', value)
    }

    get priceCurrency() {
        return h.getValue(this._record, 'priceCurrency')
    }
    set priceCurrency(value) {
        this._record = Thing.setValues(this._record, 'priceCurrency', value)
    }

    get priceValidUntil() {
        return h.getValue(this._record, 'priceValidUntil')
    }
    set priceValidUntil(value) {
        this._record = Thing.setValues(this._record, 'priceValidUntil', value)
    }

    get seller() {
        return h.getValue(this._record, 'seller')
    }
    set seller(value) {
        this._record = Thing.setValues(this._record, 'seller', value)
    }

    get validFrom() {
        return h.getValue(this._record, 'validFrom')
    }
    set validFrom(value) {
        this._record = Thing.setValues(this._record, 'validFrom', value)
    }

    get validThrough() {
        return h.getValue(this._record, 'validThrough')
    }
    set validThrough(value) {
        this._record = Thing.setValues(this._record, 'validThrough', value)
    }


}


function toString(record) {

    if(Array.isArray(record)){
        return record.map(x => toString(x))
    }

    let content = ''
    let product = h.getValue(record, "itemOffered") || {}
    let price = h.getValue(record, "price") || 0
    price = Number(price)
    price = price.toFixed(2)

    content += `${h.getValue(product, "name") || ""} - ${h.getValue(record, "priceCurrency") || ""} $${price}`

    return content

}
