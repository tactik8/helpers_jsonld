
const randomUUID = globalThis.crypto.randomUUID

import { records } from '../../records/records.js'

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { Product } from './product.js'
import { Message } from './message.js'
import { timeStamp } from 'console';
import things from '../things.js';


/**
 * Represents a message in the system.
 * 
 * 
 */
export class ProductGroup extends Product {
    constructor(record) {
        super()
        this.record_type = "ProductGroup"
        if (record?.['@type'] == "ProductGroup") {
            this.record = record
        }
    }

    toString() {
        return toString(this.record)
    }

    get hasVariant() {
        return h.getValues(this._record, 'hasVariant')
    }
    set hasVariant(value) {
        this._record = Thing.setValues(this._record, 'hasVariant', value)
    }

    get productGroupID() {
        return h.getValue(this._record, 'productGroupID')
    }
    set productGroupID(value) {
        this._record = Thing.setValues(this._record, 'productGroupID', value)
    }

    get variesBy() {
        return h.getValues(this._record, 'variesBy')
    }
    set variesBy(value) {
        this._record = Thing.setValues(this._record, 'variesBy', value)
    }


    // methods
    addVariant(product) {
        this._record = addVariant(this._record, product)
    }


    generateVariants(propertyValues) {
        this._record = generateVariants(this._record, propertyValues)
    }



    // static
    static toString(record){
        return toString(record)
    }


}


function toString(record) {

    if (Array.isArray(record)) {
        return record.map(x => toString(x))
    }

    let content = ''

    content += `${h.getValue(record, "name") || ""}\n`

    let variants = h.getValues(record, 'hasVariant')
    for(let v of variants){
        content += " - " + things.Product.toString(v) + '\n'
    }

    return content

}


function addVariant(productGroup, product) {

    productGroup = h.addValues(productGroup, 'hasVariant', product)

    return productGroup

}

/**
 * Generate all permutations of properties
 * @param {*} productGroup 
 * @param {*} propertyValues 
 * @returns 
 */
function generateVariants(productGroup, propertyValues) {


    // Handle arrays
    if (Array.isArray(propertyValues)) {
        let r = {}

        for (let p of propertyValues) {
            r[p.propertyID] = r?.[p.propertyID] || []
            r[p.propertyID].push(r.value)
        }
        propertyValues = r
    }


    // Generate combinations
    let combinations = generateCombinations(propertyValues)

    // Get variesBy
    let variesBy = Object.keys(combinations[0])
    productGroup = h.addValues(productGroup, 'variesBy', variesBy)

    // iterate

    let properties = things.Thing.getProperties('Product')

    for (let c of combinations) {

        // Make generic product
        let product = JSON.parse(JSON.stringify(productGroup))
        product['@type'] = "Product"
        delete product.hasVariant
        delete product.productGroupID
        delete product.variesBy
        product['@id'] = undefined
        product.isVariantOf = { "@id": productGroup?.["@id"] }

        // Add properties to product

        let nameExtension = []

        for (let k of Object.keys(c)) {


            nameExtension.push(c?.[k])

            if (properties.includes(k)) {
                product = h.setValue(product, k, c[k])

            } else {
                product = things.Thing.addAdditionalProperty(product, k, c[k])
            }

        }

        // Add product variant to group
        let newName = Thing.getValue(product, 'name')  + ' ' + nameExtension.join(' ')
        product = Thing.setValue(product, 'name', newName)
        productGroup = Thing.addValue(productGroup, 'hasVariant', product)

    }

    return productGroup

}

function generateCombinations(dict) {
    const keys = Object.keys(dict);

    // Start with an array containing a single empty object
    return keys.reduce((combinations, key) => {
        const values = dict[key];
        const newCombinations = [];

        // Pair every current combination with every value of the current key
        for (const combination of combinations) {
            for (const value of values) {
                newCombinations.push({
                    ...combination,
                    [key]: value
                });
            }
        }

        return newCombinations;
    }, [{}]);
}