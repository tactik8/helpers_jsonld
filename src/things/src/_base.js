

import { _h as h } from '../../index.js'
import { dataHelpers } from '../../dataHelpers/dataHelpers.js'


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'


import { addPotentialActions } from './_potentialActions.js';

import { getProperties } from './_properties.js'

import { things } from '../things.js'
import { records } from '../../records/records.js'

import { transformHelpers } from '../../index.js'


export class Base {
    constructor(x_or_record) {

        // 
        this._objectID = h.randomUUID()     // specific class instance identifier
        this._isThingClass = true           // identifier for evaluating if object is class thing instance
        this._record = {}                  // Store jsonld values and sub values as thing class instances
        this._defaultRecordType = ""       // Stores default record_type 


        // properties for dataPoints
        this._dataPoints = []


        // properties for callbacks
        this._callbacks = {}                // Stores callbacks methods
        this._previousRecord = {}           // Stores previous this.record value as jsonld
        this._previousRecordHash = ""
        this._currentRecord = {}            // Stores current this.record value as jsonld
        this._currentRecordHash = ""


        // Process initial input if jsonld record
        if (x_or_record?.["@type"] || x_or_record?.["@id"]) {
            this.record = x_or_record
        }


    }



    // -----------------------------------------------------------------
    // MetBase methods
    // -----------------------------------------------------------------


    // iterator, returns keys (properties)
    *[Symbol.iterator]() {
        for (const k of this.properties) {
            yield k;
        }
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



    // -----------------------------------------------------------------
    // Methods to get / set property values
    // -----------------------------------------------------------------
    get(propertyID) {
        return this.getValues(propertyID)
    }

    set(propertyID, value) {
        return this.setValues(propertyID, value)
    }

    getValue(propertyID) {
        return h.getValue(this._record, propertyID)
    }

    setValue(propertyID, value) {
        this.#takeSnapshot()
        return this.#setRecord(h.setValue(this._record, propertyID, value))
    }

    getValues(propertyID) {
        return h.getValues(this._record, propertyID)
    }

    setValues(propertyID, value) {
        this.#takeSnapshot()
        return this.#setRecord(h.setValues(this._record, propertyID, value))
    }




    // -----------------------------------------------------------------
    // Getter / setter
    // -----------------------------------------------------------------
    get objectID() {
        return this._objectID
    }

    set objectID(value) {
        this._objectID = value
    }

    /**
     * Returns list of available property names
     */
    get keys() {
        return Object.keys(this._record)
    }

    /**
     * Sets the base url for api
     */
    get baseUrl() {
        return process.env.baseUrl
    }

    set baseUrl(value) {
        process.env.baseUrl = value
    }

    /**
     * Returns jsonld object, decomposing class instances
     */
    get record() {

        // Set default record_type if required
        if (!this.record_type) {
            this._record["@type"] = [this._defaultRecordType]
        }

        // Set default record_id if required
        if (!this.record_id) {
            this._record["@id"] = idhelper.get(classToRecord(this._record), this.baseUrl)
        }

        return h.simplify(classToRecord(this._record))
    }

    /**
     * Sets values from jsonld, stored as class instances
     */
    set record(value) {

       this.#takeSnapshot()
       return this.#setRecord(value)
    }



    #setRecord(value){

         value = value || {}

        // Convert value from Thing instance if needed
        if (value?._isThingClass == true) {
            this._callbacks = { ... this._callbacks, ...value._callbacks }
            value = value?.record || value
        }

        // Set new ref records
        this._currentRecord = h.clone(classToRecord(value))

        // Convert to thing
        this._record = value
        Object.keys(this._record).forEach(k => this._record[k] = recordToClass(this._record?.[k]))

        // Process callbacks
        this.processCallbacks()

    }

    #takeSnapshot(){
        // Set new ref records
        this._previousRecord = h.clone(classToRecord(this.record))
    }



    /**
     * Returns the difference between old and new record
     */
    get delta() {
        return h.getDiff(this._previousRecord, this._currentRecord)
    }



    /**
     * Returns first @type value
     */
    get record_type() {
        return this.getValue("@type")
    }

    /**
     * Sets @type value
     */
    set record_type(value) {
        this.setValue("@type", value)
    }

    /**
     * Returns first @id value
     */
    get record_id() {
        return this.getValue("@id")
    }
    /**
     * Sets @id value
     */
    set record_id(value) {
        return this.setValue("@id", value)
    }

    /**
     * Return lists of properties (sames as keys)
     */
    get properties() {
        return getProperties(this.record_type)
    }



    // Record state

    /**
     * Returns a hash of the record without children values.
     */
    get hash() {
        return h.getHash(this.record)
    }


    // --------------------------------------------------------------------------
    // Callbacks and listeners
    // --------------------------------------------------------------------------


    /**
     * Register to listen to all chikldren to propagate change event up
     */
    registerToChildren() {

        for (let k of Object.keys(this.record)) {
            if (!k.startsWith('@')) {
                let values = this.getValues(k)
                for (let v of values) {
                    if (v?._isThingClass == true) {
                        v.addListenerNested(this.propagateChangeFromChildren.bind(this), this._objectID)
                    }
                }
            }
        }
    }

    /**
     * Call back funtion call by children change events to propagate changes up
     */
    propagateChangeFromChildren() {
        this.processCallbacks(this._previousRecordNested, this.record, true)
        this._previousRecordNested = this.record
    }

    /**
     * Add a listener. Will call the callbackFn if record has changed. 
     * @param {*} callback 
     * @return listenerId
     */
    addListener(callbackFn, listenerId = undefined, includeChildren = false) {

        listenerId = listenerId ?? h.randomUUID()
        let callbackRecord = {
            "id": listenerId,
            "includeChildren": includeChildren,
            "callbackFn": callbackFn
        }

        this._callbacks = this?._callbacks ?? {}
        this._callbacks[listenerId] = callbackRecord
        return listenerId
    }

    /**
     * Add listener to parent only. 
     * @param {*} callbackFn 
     * @param {*} listenerId 
     * @returns 
     */
    addListenerParent(callbackFn, listenerId = undefined) {
        return this.addListener(callbackFn, listenerId, false)
    }


    /**
     * Add listener for parent and children
     * @param {*} callbackFn 
     * @param {*} listenerId 
     * @returns 
     */
    addListenerNested(callbackFn, listenerId = undefined) {
        return this.addListener(callbackFn, listenerId, true)
    }


    addEventListener(callback, listenerId = undefined, includeChildren = false) {
        return this.addListener(callback, listenerId, includeChildren)
    }

    /**
     * Remove listener 
     * @param {*} listenerId 
     */
    removeListener(listenerId) {
        delete this._callbacks[listenerId]
    }
    removeEventListener(listenerId) {
        return this.removeListener(listenerId)
    }


    /**
     * Sends callbacks signals as action  record
     * changeWasOnChildrenOnly: the change was not on main record, only on one of the childrens
     */
    // todo: should this be async?
    processCallbacks() {


        // skip if not callbacks registered
        let r = Object.keys(this._callbacks).length
        if (Object.keys(this._callbacks).length == 0) {
            return
        }

        // Verify if changed
        let parentHasChanged = h.getHash(this._previousRecord, false) != h.getHash(this._currentRecord, false)
        let childrenHasChanged = parentHasChanged == true || (h.getHashNested(this._previousRecord) != h.getHashNested(this._currentRecord))

        // Process callbacks
        if (parentHasChanged == true) {
            this.executeCallbacks(this._previousRecord, this._currentRecord, false)
        }
        if (parentHasChanged == false && childrenHasChanged == true) {
            this.executeCallbacks(this._previousRecord, this._currentRecord, true)
        }

        // Register children for callbacks in order to propagate change event up
        this.registerToChildren()

    }


    executeCallbacks(previousRecord, newRecord, changeWasOnChildrenOnly = false) {

        let action = {
            "@type": "UpdateAction",
            "@id": h.randomUUID(),
            "object": previousRecord,
            "result": newRecord,
            "actionStatus": "CompletedActionStatus",
            "startTime": new Date(),
            "endTime": new Date()
        }

        for (let k of Object.keys(this._callbacks)) {

            try {

                // Skip if change on children and not monitoring children
                if (changeWasOnChildrenOnly == true && this._callbacks?.[k]?.includeChildren == false) {
                    continue
                }
    
                this._callbacks?.[k]['callbackFn'](action)
            } catch (err) {
                console.log('Callback failed: ', k, String(err), action)
            }
        }
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


    static isThing(value) {
        return value?._isThingClass == true
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

        let record_type = h.record_type(value)

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



function mergeThings(thing1, thing2) {


    if (!thing1 && thing2) {
        return thing2
    }

    if (thing1 && !thing2) {
        return thing1
    }

    if (!thing1?._isThingClass || !thing2?._isThingClass) {
        throw new Error("One of the things is not a Thing class object");
    }

    // todo: complete

}