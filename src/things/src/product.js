
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
export class Product extends CreativeWork {
    constructor(record) {
        super()
        this.record_type = "Product"
        if (record?.['@type'] == "Product") {
            this.record = record
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

    get aggregateRating() {
        return h.getValues(this._record, 'aggregateRating')
    }
    set aggregateRating(value) {
        this._record = Thing.setValues(this._record, 'aggregateRating', value)
    }

    get asin() {
        return h.getValue(this._record, 'asin')
    }
    set asin(value) {
        this._record = Thing.setValues(this._record, 'asin', value)
    }

    get audience() {
        return h.getValues(this._record, 'audience')
    }
    set audience(value) {
        this._record = Thing.setValues(this._record, 'audience', value)
    }

    get brand() {
        return h.getValue(this._record, 'brand')
    }
    set brand(value) {
        this._record = Thing.setValues(this._record, 'brand', value)
    }

    get category() {
        return h.getValues(this._record, 'category')
    }
    set category(value) {
        this._record = Thing.setValues(this._record, 'category', value)
    }

    get color() {
        return h.getValue(this._record, 'color')
    }
    set color(value) {
        this._record = Thing.setValues(this._record, 'color', value)
    }

    get depth() {
        return h.getValue(this._record, 'depth')
    }
    set depth(value) {
        this._record = Thing.setValues(this._record, 'depth', value)
    }

    get gtin() {
        return h.getValue(this._record, 'gtin')
    }
    set gtin(value) {
        this._record = Thing.setValues(this._record, 'gtin', value)
    }

    get height() {
        return h.getValue(this._record, 'height')
    }
    set height(value) {
        this._record = Thing.setValues(this._record, 'height', value)
    }

    get image() {
        return h.getValue(this._record, 'image')
    }
    set image(value) {
        this._record = Thing.setValues(this._record, 'image', value)
    }


    get keywords() {
        return h.getValues(this._record, 'keywords')
    }
    set keywords(value) {
        this._record = Thing.setValues(this._record, 'keywords', value)
    }

    get manufacturer() {
        return h.getValue(this._record, 'manufacturer')
    }
    set manufacturer(value) {
        this._record = Thing.setValues(this._record, 'manufacturer', value)
    }

    get model() {
        return h.getValue(this._record, 'model')
    }
    set model(value) {
        this._record = Thing.setValues(this._record, 'model', value)
    }

    get mpn() {
        return h.getValue(this._record, 'mpn')
    }
    set mpn(value) {
        this._record = Thing.setValues(this._record, 'mpn', value)
    }

    get negativeNotes() {
        return h.getValues(this._record, 'negativeNotes')
    }
    set negativeNotes(value) {
        this._record = Thing.setValues(this._record, 'negativeNotes', value)
    }

    get offers() {
        return h.getValues(this._record, 'offers')
    }
    set offers(value) {
        this._record = Thing.setValues(this._record, 'offers', value)
    }

    get positiveNotes() {
        return h.getValues(this._record, 'positiveNotes')
    }
    set positiveNotes(value) {
        this._record = Thing.setValues(this._record, 'positiveNotes', value)
    }

    get productID() {
        return h.getValue(this._record, 'productID')
    }
    set productID(value) {
        this._record = Thing.setValues(this._record, 'productID', value)
    }

    get review() {
        return h.getValues(this._record, 'review')
    }
    set review(value) {
        this._record = Thing.setValues(this._record, 'review', value)
    }

    get size() {
        return h.getValue(this._record, 'size')
    }
    set size(value) {
        this._record = Thing.setValues(this._record, 'size', value)
    }

    get sku() {
        return h.getValue(this._record, 'sku')
    }
    set sku(value) {
        this._record = Thing.setValues(this._record, 'sku', value)
    }

    get weight() {
        return h.getValue(this._record, 'weight')
    }
    set weight(value) {
        this._record = Thing.setValues(this._record, 'weight', value)
    }

    get width() {
        return h.getValue(this._record, 'width')
    }
    set width(value) {
        this._record = Thing.setValues(this._record, 'width', value)
    }


    // methods
    addOffer(price, priceCurrency = "CAD") {
        this._record = Thing.addValue(this._record, 'offers', (new things.Offer(price, priceCurrency)))
    }


    // static
    static addOffer(record, price, priceCurrency = "CAD") {
        return addOffer(record, price, priceCurrency)
    }


    static toString(record){
        return toString(record)
    }

}


function toString(record) {

    if (Array.isArray(record)) {
        return record.map(x => toString(x))
    }

    let content = ''

    content += `${h.getValue(record, "name") || ""}`

    return content

}


function addOffer(product, offer_record_or_price, price_currency) {

    let offer = new things.Offer(offer_record_or_price, price_currency)

    offer.itemOffered = { "@id": product?.['@id'] }

    product = h.addValue(product, 'itemOffered', offer.record)

    return record
}

