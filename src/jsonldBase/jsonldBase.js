const randomUUID = globalThis.crypto.randomUUID

import dot from '../dotHelpers/dotHelpers.js'
import * as recordIDHelpers from '../recordIdHelpers/recordIdHelpers.js'

/**
 * Database for storing jsonld records
 * Post or set Overwrites current record, unless it is only a @id record
 */
export class DB {
    constructor() {
        this._store = new Map()
        this._subscriptions = new Map()
    }

    *[Symbol.iterator]() {
        for (const item of this._store.values()) {
            yield item;
        }
    }

    toString() {
        return "JSONLD Array items: " + String(this.length())
    }

    toJSON() {
        return JSON.stringify(this.records, null, 4)
    }

    get(record_id) {
        return getRecord(this._store, record_id, true)
    }

    set(value) {
        if(Array.isArray(value)){
            return value.map(x => this.set(x))
        }
        let currentRecord = getRecord(value?.['@id'])
        let result = postRecord(this._store, value)
        if(JSON.stringify(currentRecord) != JSON.stringify(value)){
            this.broadcast(value?.['@id'])
        }
        return result
    }

    post(value) {
        return postRecord(this._store, value)
    }

    delete(record_id) {
        return deleteRecord(this._store, value)
    }

    getValue(record_id, propertyID, position){
        let record = this.get(record_id)
        return getValue(record, propertyID, position)
    }
    getValues(record_id, propertyID){
        let record = this.get(record_id)
        return getValues(record, propertyID)
    }
    setValue(record_id, propertyID, value){
        let record = this.get(record_id)
        if(!record){
            record = {"@id": record_id}
        }
        record = JSON.parse(JSON.stringify(record))
        record = setValue(record, propertyID, value)
        return this.set(record)
    }


    length() {
        return length(this._store)
    }

    get records() {
        return getRecords(this._store)
    }

    getRecords(expand = false) {
        return getRecords(this._store, undefined, false)
    }

    get record_ids() {
        return getRecordIDs(this._store)

    }

    // callbacks

    subscribe(record_id, callbackFn){

        if(!record_id || record_id == "*" || record_id == "all" ){
            record_id = "all"
        }
        let ss = this._subscriptions.get(record_id) || []
        if(!ss.includes(callbackFn)){
            ss.push(callbackFn)
            this._subscriptions.set(record_id, ss)
        }
        return
    }

    unsubscribe(record_id, callbackFn){

        if(!record_id || record_id == "*" || record_id == "all" ){
            record_id = "all"
        }
        let ss = this._subscriptions.get(record_id) || []
        ss = ss.filter(x => x != callbackFn)
        this._subscriptions.set(record_id, ss)
        return
    }

    broadcast(record_id){
        let record = this.get(record_id)
        let ss = this._subscriptions.get(record_id) || []
        ss = ss.concat(this._subscriptions.get('all') || [])
        ss = [ ... new Set(ss)]

        ss.forEach(x => x(record))

    }

    // Static

    static clean(value, baseUrl) {
        return clean(value, baseUrl)
    }


    static flatten(value) {
        return flatten(value)
    }

    static getValue(record, propertyID, position) {
        return getValue(record, propertyID, position)
    }
    static getValues(record, propertyID) {
        return getValues(record, propertyID)
    }

    static setValue(record, propertyID, value, position) {
        return setValue(record, propertyID, value, position)
    }

    static setValues(record, propertyID, values) {
        return setValues(record, propertyID, values)
    }

    static addValue(record, propertyID, value) {
        return addValue(record, propertyID, value)
    }

    static addValues(record, propertyID, values) {
        return addValues(record, propertyID, values)
    }

    static strip(value){
        return strip(value)
    }

    static get dot() {
        return dot
    }

    static simplify(value) {
        return simplify(value)
    }



}


export default {
    DB,
    record_type,
    record_id,
    eq,
    evaluate,
    expand,
    flatten,
    getValue,
    getValues,
    setValue,
    setValues,
    addValue,
    addValues,
    setTempID,
    clean,
    simplify,
    strip
}



export function record_type(record) {

    return getValue(record, '@type')

}

export function record_id(record) {

    return getValue(record, '@id')

}



function testClass() {

    let record = {
        "@type": "Thing",
        "@id": "Thing1",
        "name": "bob1",
        "other": {
            "@type": "Thing",
            "@id": "Thing2",
            "name": "bob2",
            "other": {
                "@type": "Thing",
                "@id": "Thing3",
                "name": "bob3",
            }
        },
        "other2": [
            {
                "@type": "Thing",
                "@id": "Thing21",
                "name": "bob21",
                "other": {
                    "@type": "Thing31",
                    "@id": "Thing31",
                    "name": "bob31",
                }
            },
            {
                "@type": "Thing",
                "@id": "Thing21",
                "name": "bob22",
                "other": {
                    "@type": "Thing32",
                    "@id": "Thing32",
                    "name": "bob32",
                }
            }
        ]
    }

    let db = new JsonldDB()
    db.post(record)


    return db.records

}

export function testRecord(name, no = 0, depth = 1) {


    name = String(name || "test")


    let records = []

    for (let i = 0; i <= no; i++) {
        let item_name = name + "_" + String(i)
        let record = {
            "@type": "Thing",
            "@id": "https://testrecord.com/" + item_name,
            "name": item_name
        }

        if (depth > 0) {
            record.other1 = testRecord(item_name, no, depth - 1)
        }

        records.push(record)
    }

    return no == 0 ? records[0] : records


}


export function eq(value1, value2){

    if(value1 === undefined && value2 === undefined){
        return true
    }
    if(value1 !== undefined && value2 === undefined){
        return false
    }
    if(value1 === undefined && value2 !== undefined){
        return false
    }

    if(value1 === null && value2 === null){
        return true
    }
    if(value1 !== null && value2 === null){
        return false
    }
    if(value1 === null && value2 !== null){
        return false
    }
    
    // Clean
    value1 = clean(value1)
    value2 = clean(value2)

    // Strip child records
    value1 = strip(value1)
    value2 = strip(value2)


    try {
        value1 = JSON.stringify(value1,Object.keys(value1).sort(),0)  
    } catch {}

    try {
        value2 = JSON.stringify(value2,Object.keys(value2).sort(),0)  
    } catch {}



    return value1 == value2
    
}


/**
 * Replace record_ids by standardized record_id. Sets permanent id if _:
 * @param {*} value 
 * @returns 
 */
export function clean(value, baseUrl) {

    if(Array.isArray(value) && value.length > 1){
        return value.map(x => clean(x, baseUrl))
    }

    if(!value?.['@type'] || !value?.['@id']){
        return value
    }

    try {
        JSON.parse(JSON.stringify(value))
    } catch (err) {

    }

    value = setTempID(value)

    let flatRecords = flatten(value)

    // Order keys
    flatRecords = flatRecords.map(x => JSON.parse(JSON.stringify(x, Object.keys(x).sort(), 4)))

    // 
    let replacements = []

    // Get combinations of replacer, replacees
    for (let f of flatRecords) {

        // Ensure id not array
        f['@id'] = Array.isArray(f?.['@id']) ? f?.['@id'][0] : f?.['@id']

        // Validate id, skip if ok
        if (recordIDHelpers.validate(f) == true) {
            continue
        }


        // Get standard id
        let newID = recordIDHelpers.getStandardID(f, baseUrl)

        if (newID && f?.['@id'] != newID) {
            let r = {
                "replacer": newID,
                "replacee": f?.['@id']
            }
            replacements.push(r)
        }

        if (!newID && f?.['@id'].startsWith('_:')) {
            let r = {
                "replacer": recordIDHelpers.getGenericRecordID(baseUrl),
                "replacee": f?.['@id']
            }
            replacements.push(r)
        }

    }

    // Execute replacement
    value = replaceIds(value, replacements)

    //
    return value
}

// -----------------------------------------------------------------------
// Utility
// -----------------------------------------------------------------------

function toArray(value) {

    return Array.isArray(value) ? value : [value]

}


export function getValue(record, propertyID, position) {
    position = position || 0
    let values = dot.get(record, propertyID)
    values = toArray(values)
    return values?.[position]
}

export function setValue(record, propertyID, value, position) {
    position = position || 0
    let values = getValues(record, propertyID)
    value = toArray(value)?.[0]
    values[position] = value
    dot.set(record, propertyID, values)
    return record
}

export function addValue(record, propertyID, value) {

    value = toArray(value)

    let currentValues = getValues(record, propertyID)

    let newValues = currentValues.concat(value)

    record = dot.set(record, propertyID, newValues)

    return record
}

export function addValues(record, propertyID, values) {

    return addValue(record, propertyID, values)
}


export function getValues(record, propertyID) {
    let values = dot.get(record, propertyID)
    values = toArray(values)
    return values
}

export function setValues(record, propertyID, value) {
    value = toArray(value)
    dot.set(record, propertyID, value)
    return record
}



// -----------------------------------------------------------------------
// Array
// -----------------------------------------------------------------------


function postRecord(store, value) {

    // Assign Id
    value = assignId(value)

    // flatten
    value = flatten(value)


    // convert store to map
    let storeRecord = _storeToMap(store)

    // Add to store
    for (let v of value) {

        // Compare with existing value
        let storeValue = storeRecord.store.get(v?.['@id'])

        // Skip if value already exista and new value doesn't have properties
        // Prevents overwriting current record with simple link
        let nbProperties = Object.keys(v).filter(x => !x.startsWith('@'))
        if (storeValue && nbProperties == 0) {
            continue
        }

        // Store value
        storeRecord.store.set(v?.['@id'], v)
    }

    // Convert back to array if required
    store = _storeToOriginal(storeRecord)

    return store

}


function getRecord(store, record_id, expandFlag = true) {

    // convert store to map
    let storeRecord = _storeToMap(store)

    // Retrieve record
    let record = storeRecord.store.get(record_id)

    // Expand record
    if (expandFlag == true) {
        record = expand(storeRecord, record)
    }

    // Return
    return record;
}


function getRecords(store, filters, expandFlag = true) {

    // convert store to map
    let storeRecord = _storeToMap(store)

    let records = Array.from(storeRecord.store.values());

    if (filters) {
        records = records.filter(x => evaluate(x, filters))

    }

    if (expandFlag == true) {
        records = expand(storeRecord, records)
    }


    return records

}






function deleteRecord(store, record_id) {

    storeRecord = _storeToMap(store)

    record_id = Array.isArray(record_id) ? record_id : [record_id]

    record_id.map(x => storeRecord.store.delete(x))

    return true

}


function length(store) {
    let storeRecord = _storeToMap(store)
    return storeRecord.store.size
}


function getRecordIDs(store) {


    let records = getRecords(store)

    let recordIDs = records.map(x => x?.['@id'])

    return recordIDs

}

// -----------------------------------------------------------------------
// Array
// -----------------------------------------------------------------------

function testCond() {

    let record = {
        "@type": "Thing",
        "@id": "Thing1",
        "name": "bob1",
        "other": {
            "@type": "Thing",
            "@id": "Thing2",
            "name": "bob2",
            "other": {
                "@type": "Thing",
                "@id": "Thing3",
                "name": "bob3",
            }
        },
        "other2": [
            {
                "@type": "Thing",
                "@id": "Thing21",
                "name": "bob21",
                "other": {
                    "@type": "Thing31",
                    "@id": "Thing31",
                    "name": "bob31",
                }
            },
            {
                "@type": "Thing",
                "@id": "Thing21",
                "name": "bob22",
                "other": {
                    "@type": "Thing32",
                    "@id": "Thing32",
                    "name": "bob32",
                }
            }
        ]
    }

    let filter = {
        "$and": [
            {
                "other.name": "bob2"
            },
            {
                "other.name": "bob1"
            }
        ]
    }

    let result = evaluate(record, filter)

    return result
}

//
export function evaluate(record, condition) {

    for (let k of Object.keys(condition)) {

        let propertyID = k
        let values = condition?.[k]
        values = Array.isArray(values) ? values : [values]

        // handle and & or
        if (propertyID == "$and") {
            values = Array.isArray(values) ? values : [values]
            return values.every(x => evaluate(record, x))
        }
        if (propertyID == "$or") {
            values = Array.isArray(values) ? values : [values]
            return values.some(x => evaluate(record, x))
        }

        // Extract conditions
        let conditions = []
        for (let v of values) {
            let c = _extractCondition(record, propertyID, v)
        }

        // test conditions
        let result = conditions.every(x => testCondition(x.r, x.p, x.o, x.v))

        return result

    }
}


function testCondition(record, propertyID, operator, value) {


    try {
        let recordValue = dot.get(record, propertyID)

        if (operator == "$equal") {
            return recordValue == value
        }
        if (operator == "$lt") {
            return recordValue < value
        }
        if (operator == "$gt") {
            return recordValue > value
        }
        if (operator == "$le") {
            return recordValue <= value
        }
        if (operator == "$ge") {
            return recordValue >= value
        }
        if (operator == "$same") {
            return recordValue?.['@id'] && recordValue?.['@id'] >= value?.['@id']
        }
        if (operator == "$includes") {
            return recordValue.includes(value)
        }

    } catch (error) {
        return false
    }

}


function _extractCondition(record, propertyID, value) {

    let c = {
        r: record,
        p: propertyID,
        o: null,
        v: null
    }

    if (typeof value == "string") {
        if (value.startsWith('$')) {
            c = {
                r: record,
                p: propertyID,
                o: value.split(' ')[0],
                v: value.split(' ').slice(1).join(' ')
            }
        } else {
            c = {
                r: record,
                p: propertyID,
                o: "$equal",
                v: value
            }
        }
    }

    if (typeof value == "object") {
        c = {
            r: record,
            p: propertyID,
            o: Object.keys(v)?.[0],
            v: value?.[Object.keys(v)?.[0]]
        }
    }

    return c
}









// -----------------------------------------------------------------------
// json
// -----------------------------------------------------------------------



export function expand(store, record) {


    function _expand(store, record, cache) {

        let storeRecord = _storeToMap(store)

        if (Array.isArray(record)) {
            return record.map(x => _expand(storeRecord, x, cache))
        }

        if (!record?.['@id']) {
            return record
        }

        let newRecord = cache.get(record?.['@id'])
        if (newRecord) {
            return { "@id": newRecord?.["@id"] }
        }


        newRecord = getRecord(storeRecord, record?.['@id'], false)
        record = newRecord || record

        cache.set(newRecord?.['@id'], newRecord)

        for (let k of Object.keys(record)) {
            record[k] = _expand(storeRecord, record[k], cache)
        }


        return record

    }

    let cache = new Map()
    return _expand(store, record, cache)
}

/**
 * Reeplaces all children objects by @id
 * @param {*} record 
 * @returns 
 */
export function strip(record){

    function _strip(record, maxLevel, currentLevel){
        
        if(Array.isArray(record)){
            return record.map(x => _strip(x, maxLevel, currentLevel))
        }

        if(record?.['@type'] || record?.['@id']){

            if(currentLevel > maxLevel){
                return { "@id": record?.['@id'] }
            } else {
                let newRecord = {}
                for(let k of Object.keys(record).sort()){
                    newRecord[k] = _strip(record?.[k], maxLevel, currentLevel + 1)
                }
                return newRecord
            }
            
        }
        return record
    }

    return _strip(record, 0, 0)

}


export function flatten(record) {


    function _flatten(record) {

        let records = []

        if (Array.isArray(record)) {
            records = record.map(x => flatten(x))
            records = records.flat()
            return records
        }

        if (!record?.['@id'] && !record?.['@type']) {
            return []
        }

        for (let k of Object.keys(record)) {
            if (k == "@id") {
                continue
            }

            let values = record[k]
            values = Array.isArray(values) ? values : [values]

            record[k] = []
            for (let v of values) {
                if (v?.["@id"]) {
                    record[k].push({ "@id": v?.['@id'] })
                } else {
                    record[k].push(v)
                }
                records.push(flatten(v))
            }
        }
        records = [record].concat(records)
        records = records.flat()

        // Remove values with only @id
        records = records.filter(x => Object.keys(x).pop('@id').length > 0)

        return records
    }

    try {
        record = JSON.parse(JSON.stringify(record))
    } catch (err) {

    }

    return _flatten(record)

}



/**
 * Fill in missing @id
 * @param {*} value 
 * @returns 
 */
export function setTempID(value) {

    if (Array.isArray(value)) {
        return value.map(x => assignId(x))
    }

    if (!value?.['@id'] && !value?.['@type']) {
        return value
    }

    for (let k of Object.keys(value)) {
        value['@id'] = value?.["@id"] || "_:" + globalThis.crypto.randomUUID();
        value[k] = assignId(value[k])
    }
    return value
}



/**
 * Fill in missing @id
 * @param {*} value 
 * @returns 
 */
function assignId(value) {

    if (Array.isArray(value)) {
        return value.map(x => assignId(x))
    }

    if (!value?.['@id'] && !value?.['@type']) {
        return value
    }

    for (let k of Object.keys(value)) {
        value['@id'] = value?.["@id"] || "_:" + globalThis.crypto.randomUUID();
        value[k] = assignId(value[k])
    }
    return value
}

/**
 * Replace @id from one value to another
 * idsMap {"replacee": "xxx", "replacer": "xxx"}
 * @param {*} value 
 * @param {*} idsMap 
 * @returns 
 */
export function replaceIds(value, idsMap) {


    function _replaceIds(value, idsMap) {

        if (Array.isArray(value)) {
            return value.map(x => replaceIds(x, idsMap))
        }

        if (!value?.['@id']) {
            return value
        }

        // Check if a replacer value exist for the current @id
        let replacee = value?.['@id']
        let replacer = idsMap.get(replacee)

        if (replacer) {
            value['@id'] = replacer
        }

        // iterate keys
        for (let k of Object.keys(value)) {
            value[k] = replaceIds(value?.[k], idsMap)
        }




        return value

    }
    // Convert to map if not already
    if (!(idsMap instanceof Map)) {
        let newIdsMap = new Map()
        idsMap = Array.isArray(idsMap) ? idsMap : idsMap
        idsMap.map(x => newIdsMap.set(x.replacee, x.replacer))
        idsMap = newIdsMap
    }

    return _replaceIds(value, idsMap)

}



// ------------------------------------------------------------
// Map helper functions
// ------------------------------------------------------------

/**
 * Converts a store into a map (if required)
 * @param {*} store 
 * @returns 
 * storeRecord: 
 *      - store: the actual map
 *      - storeIsMapFlag: flag that identifies original format
 */
function _storeToMap(store) {

    // Return if already in storeRecord format
    if (store?.store) {
        return store
    }

    // Return storeRecord  if already a map

    if (store instanceof Map) {
        return {
            store: store,
            storeIsMapFlag: true
        }
    }

    // Convert to map
    store = store || []
    store = Array.isArray(store) ? store : [store]
    let newStore = new Map()
    store.forEach(x => newStore.set(x?.['@id'], x))
    store = newStore


    let storeRecord = {
        store: store,
        storeIsMapFlag: false
    }

    return storeRecord

}


/**
 * Converts store to original format
 * @param {*} storeRecord 
 */
function _storeToOriginal(storeRecord) {

    // 
    if (storeRecord.storeIsMapFlag == true) {
        return storeRecord.store
    }

    let store = Array.from(store.values())
    return store

}






export function simplify(value) {

    if (Array.isArray(value)) {

        if (value.length == 1) {
            return simplify(value[0])
        }
        if (value.length == 0) {
            return undefined
        }

        return value.map(x => simplify(x))
    }

    if (value?.['@type'] || value?.['@id']) {
        for (let k of Object.keys(value)) {

            value[k] = simplify(value?.[k])

            if (value?.[k] === undefined) {
                delete value[k]
            }
        }
        return value

    }

    return value
}