
const randomUUID = globalThis.crypto.randomUUID

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { addPotentialActions } from './_potentialActions.js';

import { getProperties } from './_properties.js'

import { things } from '../things.js'
import { records } from '../../records/records.js'

import { transformHelpers } from '../../index.js'


export class Thing {
    constructor(value) {
        this._isThingClass = true
        this._record = value || {}
        this.record_type = "Thing"
        this.record_id = idhelper.get(this.record, this.baseUrl)

    }

    toString() {
        return toString(this.record)
    }

    toJSON() {
        return this.record
    }

    toMD() {
        return transformHelpers.markdown.jsonToMarkdown(this.record)
    }

    toYaml() {
        return transformHelpers.yaml.jsonToYaml(this.record)
    }



    // 
    get(propertyID) {
        return h.getValues(this._record, propertyID)
    }

    set(propertyID, value) {
        this._record = Thing.setValues(this._record, propertyID, value)
    }

    getValue(propertyID) {
        return h.getValue(this._record, propertyID)
    }

    setValue(propertyID, value) {
        this._record = Thing.setValue(this._record, propertyID, value)
    }

    getValues(propertyID) {
        return h.getValues(this._record, propertyID)
    }

    setValues(propertyID, value) {
        this._record = Thing.setValues(this._record, propertyID, value)
    }


    get baseUrl() {
        return process.env.baseUrl
    }

    set baseUrl(value) {
        process.env.baseUrl = value
    }

    get record() {
        return h.simplify(classToRecord(this._record))
    }

    set record(value) {
        this._record = value._isThingClass == true ? value._record : value
        Object.keys(this._record).forEach(k => this._record[k] = recordToClass(this._record?.[k]))
    }

    get record_type() {
        return h.getValue(this._record, "@type")
    }
    set record_type(value) {
        this._record = Thing.setValue(this._record, "@type", value)
    }

    get record_id() {
        return h.getValue(this._record, "@id")
    }
    set record_id(value) {
        this._record = Thing.setValue(this._record, "@id", value)
    }

    get properties() {
        return getProperties(this.record_type)
    }


    get name() {
        return h.getValue(this._record, "name")
    }
    set name(value) {
        this._record = Thing.setValue(this._record, "name", value)
    }

    get url() {
        return h.getValue(this._record, "url")
    }
    set url(value) {
        this._record = Thing.setValue(this._record, "url", value)
        this.record_id = idhelper.get(this._record, this.baseUrl)
    }

    get description() {
        return h.getValue(this._record, "description")
    }
    set description(value) {
        this._record = Thing.setValue(this._record, "description", value)
    }

    get sameAs() {
        return h.getValue(this._record, "sameAs")
    }
    set sameAs(value) {
        this._record = Thing.setValue(this._record, "sameAs", value)
    }


    get hasPart() {
        return h.getValues(this._record, "hasPart")
    }
    set hasPart(value) {
        this._record = Thing.setValues(this._record, "hasPart", value)
    }

    get potentialAction() {
        return h.getValues(this._record, "potentialAction")
    }
    set potentialAction(value) {
        this._record = Thing.setValues(this._record, "potentialAction", value)
    }


    // Methods

    addPotentialActions() {
        this._record = addPotentialActions(this._record)
    }

    addAdditionalProperty(propertyID, value) {
        this._record = addPropertyValue(this._record, "additionalProperty", propertyID, value)
    }



    // Static
    static toString(value) {
        return toString(value)
    }

    static toMD(record) {
        return transformHelpers.markdown.jsonToMarkdown(record)
    }

    static toYaml(record) {
        return transformHelpers.yaml.jsonToYaml(record)
    }

    static fromYaml(value) {
        let n = this.name
        return new things[n](transformHelpers.yaml.yamlToJson(value))
    }




    //


    static toThing(value) {
        return recordToClass(value)
    }


    /**
     * Get example record
     * @param {*} name 
     * @param {*} qty 
     * @returns 
     */
    static example(name = 0, qty = 5) {
        let n = this.name
        return new things[n](records[n](name, qty))
    }

    //
    static get baseUrl() {
        return process.env.baseUrl
    }

    static set baseUrl(value) {
        process.env.baseUrl = value
    }


    static getProperties(record_type) {
        return getProperties(record_type)
    }

    static getValue(record, propertyID) {
        return h.getValue(record, propertyID)
    }
    static setValue(record, propertyID, value) {
        return h.setValue(record, propertyID, recordToClass(value))
    }
    static getValues(record, propertyID) {
        return h.getValues(record, propertyID)
    }
    static setValues(record, propertyID, value) {
        return h.setValues(record, propertyID, recordToClass(value))
    }

    static addValue(record, propertyID, value) {
        return h.addValue(record, propertyID, recordToClass(value))
    }

    static flatten(value) {
        return h.flatten(value)
    }

    static addPotentialActions(record) {
        return addPotentialActions(record)
    }

    static addAdditionalProperty(record, propertyID, value) {
        return addPropertyValue(record, "additionalProperty", propertyID, value)

    }
}



/**
 * Convert a class Thing type object to record
 * @param {} value 
 * @returns 
 */
function classToRecord(value) {

    function _classToRecord(value) {
        if (Array.isArray(value)) {
            return value.map(x => _classToRecord(x))
        }

        if (value instanceof Date && !Number.isNaN(value.getTime())) {
            return value.toISOString()
        }


        if (value?.['_isThingClass'] == true) {
            value = value._record
        }

        if (value?.['@type'] || value?.['@id']) {
            let result = {}
            for (let k of Object.keys(value)) {
                result[k] = _classToRecord(value?.[k])
            }

            return result
        }

        return value
    }

    let r = _classToRecord(value)
    try {
        r = JSON.parse(JSON.stringify(r))
    } catch (err) {

    }
    return r
}

/**
 * Converts record ot Class instances
 * @param {*} value 
 */
function recordToClass(value) {

    if (Array.isArray(value)) {
        return value.map(x => recordToClass(x))
    }

    // Transform to thing if not one
    if (value?._isThingClass != true) {

        let record_type = h.getValue(value, '@type')

        if (record_type) {
            let T = things?.[record_type] || things.Thing
            let newThing = new T()
            newThing.record = value
            value = newThing
        }
    }

    // Iterate through property Values
    if (value?._isThingClass == true) {

        for (let k of Object.keys(value._record)) {
            value._record[k] = recordToClass(value._record?.[k])
        }
    }

    //
    return value

}



function addPotentialAction(record, potentialAction) {




}


function toString(record) {

    if (Array.isArray(record)) {
        let result = record.map(x => toString(x))
        result = result.join('\n')
        return result
    }

    let record_type = h.getValue(record, '@type')
    let record_id = h.getValue(record, '@id')
    let name = h.getValue(record, 'name')

    let result = `${record_type || ""}/${record_id || ""}`
    if (name) {
        result = `${result} - ${name}`
    }

    return result


}


function addPropertyValue(record, property, propertyID, value) {

    let pv = new things.PropertyValue()
    pv.propertyID = propertyID
    pv.value = value

    record = h.addValues(record, property, pv.record)

    return record
}