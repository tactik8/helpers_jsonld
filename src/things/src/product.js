


import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'


import { Offer } from './offer.js';


/**
 * Represents a message in the system.
 * 
 * 
 */
export class Product extends CreativeWork {
    constructor(name_or_record) {
        super()
        this._defaultRecordType = "Product"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)


    }

    toString() {
        return toString(this.record)
    }

    get additionalProperty() {
        return this.getValues('additionalProperty')
    }
    set additionalProperty(value) {
        return this.setValues( 'additionalProperty', value)
    }

    get aggregateRating() {
        return this.getValues('aggregateRating')
    }
    set aggregateRating(value) {
        return this.setValues( 'aggregateRating', value)
    }

    get asin() {
        return this.getValue('asin')
    }
    set asin(value) {
        return this.setValues( 'asin', value)
    }

    get audience() {
        return this.getValues('audience')
    }
    set audience(value) {
        return this.setValues( 'audience', value)
    }

    get brand() {
        return this.getValue('brand')
    }
    set brand(value) {
        return this.setValues( 'brand', value)
    }

    get category() {
        return this.getValues('category')
    }
    set category(value) {
        return this.setValues( 'category', value)
    }

    get color() {
        return this.getValue('color')
    }
    set color(value) {
        return this.setValues( 'color', value)
    }

    get depth() {
        return this.getValue('depth')
    }
    set depth(value) {
        return this.setValues( 'depth', value)
    }

    get gtin() {
        return this.getValue('gtin')
    }
    set gtin(value) {
        return this.setValues( 'gtin', value)
    }

    get height() {
        return this.getValue('height')
    }
    set height(value) {
        return this.setValues( 'height', value)
    }

    get image() {
        return this.getValue('image')
    }
    set image(value) {
        return this.setValues( 'image', value)
    }


    get keywords() {
        return this.getValues('keywords')
    }
    set keywords(value) {
        return this.setValues( 'keywords', value)
    }

    get manufacturer() {
        return this.getValue('manufacturer')
    }
    set manufacturer(value) {
        return this.setValues( 'manufacturer', value)
    }

    get model() {
        return this.getValue('model')
    }
    set model(value) {
        return this.setValues( 'model', value)
    }

    get mpn() {
        return this.getValue('mpn')
    }
    set mpn(value) {
        return this.setValues( 'mpn', value)
    }

    get negativeNotes() {
        return this.getValues('negativeNotes')
    }
    set negativeNotes(value) {
        return this.setValues( 'negativeNotes', value)
    }

    get offers() {
        return this.getValues('offers')
    }
    set offers(value) {
        return this.setValues( 'offers', value)
    }

    get positiveNotes() {
        return this.getValues('positiveNotes')
    }
    set positiveNotes(value) {
        return this.setValues( 'positiveNotes', value)
    }

    get productID() {
        return this.getValue('productID')
    }
    set productID(value) {
        return this.setValues( 'productID', value)
    }

    get review() {
        return this.getValues('review')
    }
    set review(value) {
        return this.setValues( 'review', value)
    }

    get size() {
        return this.getValue('size')
    }
    set size(value) {
        return this.setValues( 'size', value)
    }

    get sku() {
        return this.getValue('sku')
    }
    set sku(value) {
        return this.setValues( 'sku', value)
    }

    get weight() {
        return this.getValue('weight')
    }
    set weight(value) {
        return this.setValues( 'weight', value)
    }

    get width() {
        return this.getValue('width')
    }
    set width(value) {
        return this.setValues( 'width', value)
    }


    // methods
    addOffer(price, priceCurrency = "CAD") {
        this._record = this.addValue('offers', (new Offer(price, priceCurrency)))
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

    let offer = new Offer(offer_record_or_price, price_currency)

    offer.itemOffered = { "@id": product?.['@id'] }

    product = h.addValue(product, 'itemOffered', offer.record)

    return record
}

