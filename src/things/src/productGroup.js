

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'

import { Product } from './product.js'


/**
 * Represents a message in the system.
 * 
 * 
 */
export class ProductGroup extends Product {
    constructor(name_or_record) {
        super()
        this._defaultRecordType = "ProductGroup"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)

    }

    toString() {
        return toString(this.record)
    }

    get hasVariant() {
        return this.getValues('hasVariant')
    }
    set hasVariant(value) {
        return this.setValues( 'hasVariant', value)
    }

    get productGroupID() {
        return this.getValue( 'productGroupID')
    }
    set productGroupID(value) {
        return this.setValues( 'productGroupID', value)
    }

    get variesBy() {
        return this.getValues( 'variesBy')
    }
    set variesBy(value) {
        return this.setValues( 'variesBy', value)
    }


    // methods
    addVariant(product) {
        this.record = addVariant(this.record, product)
    }


    generateVariants(propertyValues) {
        this.record = generateVariants(this.record, propertyValues)
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
        content += " - " + Product.toString(v) + '\n'
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

    let properties = Thing.getProperties('Product')

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
                product = Thing.addAdditionalProperty(product, k, c[k])
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