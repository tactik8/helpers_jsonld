

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { ItemList } from './itemList.js'
import { PropertyValueSpecification } from './propertyValueSpecification.js'

export class Action extends Thing {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "Action"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)

    }

    toString() {
        return `${this.name} - ${(this.actionStatus || "").replace('ActionStatus', '')}`
    }

    setPotential() {
        this.record = h.setPotential(this.record)
    }

    setActive() {
        this.record = h.setActive(this.record)
    }

    setCompleted(result) {
        this.record = h.setCompleted(this.record, result)
    }

    setFailed(error) {
        this.record = h.setFailed(this.record, error)
    }

    get isPotential() {
        return h.isPotential(this.record)
    }
    get isActive() {
        return h.isActive(this.record)
    }
    get isCompleted() {
        return h.isCompleted(this.record)
    }
    get isFailed() {
        return h.isFailed(this.record)
    }


    get object() {
        return this.getValues( "object")
    }
    set object(value) {
        return
    }
    get instrument() {
        return this.getValues( "instrument")
    }
    set instrument(value) {
        return this.setValues( "instrument", value)
    }

    get agent() {
        return this.getValues( "agent")
    }
    set agent(value) {
        return this.setValues( "agent", value)
    }

    get result() {
        return this.getValues( "result")
    }
    set result(value) {
        return this.setValues("result", value)
    }

    get actionStatus() {
        return this.getValue( "actionStatus")
    }
    set actionStatus(value) {
        return this.setValue( "actionStatus", value)
    }

    get startTime() {
        return this.getValue( "startTime")
    }
    set startTime(value) {
        return this.setValue( "startTime", value)
    }

    get endTime() {
        return this.getValue( "endTime")
    }
    set endTime(value) {
        return this.setValue( "endTime", value)
    }

    get error() {
        return this.getValue( "error")
    }
    set error(value) {
        return this.setValue( "error", value)
    }


    // Conditions

    addMinValue(property, value) {
        this.record = addMinValue(this.record, property, value)
    }
    addMaxValue(property, value) {
        this.record = addMaxValue(this.record, property, value)
    }

    addMinLength(property, value) {
        this.record = addMinLength(this.record, property, value)
    }

    addMaxLength(property, value) {
        this.record = addMaxLength(this.record, property, value)
    }

    addDefaultValue(property, value) {
        this.record = addDefaultValue(this.record, property, value)
    }

    addValueRequired(property, value) {
        this.record = addValueRequired(this.record, property, value)
    }

    addValuePattern(property, value) {
        this.record = addValuePattern(this.record, property, value)
    }

    addMultipleValues(property, value) {
        this.record = addMultipleValues(this.record, property, value)
    }

    addStepValue(property, value) {
        this.record = addStepValue(this.record, property, value)
    }




    testConditions() {
        return testConditions(this.record)
    }

    getInputconditions() {
        return getPVSInput(this.record)
    }
    addInputCondition(key, condition) {
        this.record = this.addValues(key + '-input', condition)
    }

    getOutputConditions() {
        return getPVSOutput(this.record)
    }
    addOutputCondition(key, condition) {
        this.record = this.addValues(key + '-output', condition)
    }


    test() {
        return testConditions(this.record)
    }


    // Static
    static setPotential(record) {
        return h.setPotential(record)
    }

    static setActive(record) {
        return h.setActive(record)
    }

    static setCompleted(record, result) {
        return h.setCompleted(record, result)
    }

    static setFailed(record, error) {
        return h.setFailed(record, error)
    }

    static isPotential(record) {
        return h.isPotential(record)
    }
    static isActive(record) {
        return h.isActive(record)
    }
    static isCompleted(record) {
        return h.isCompleted(record)
    }
    static isFailed(record) {
        return h.isFailed(record)
    }


    static addMinValue(record, property, value) {
        return addMinValue(record, property, value)
    }
    static addMaxValue(record, property, value) {
        return addMaxValue(record, property, value)
    }

    static addMinLength(record, property, value) {
        return addMinLength(record, property, value)
    }

    static addMaxLength(record, property, value) {
        return addMaxLength(record, property, value)
    }

    static addDefaultValue(record, property, value) {
        return addDefaultValue(record, property, value)
    }

    static addValueRequired(record, property, value) {
        return addValueRequired(record, property, value)
    }

    static addValuePattern(record, property, value) {
        return addValuePattern(record, property, value)
    }
   
    static addMultipleValues(record, property, value) {
        return addMultipleValues(record, property, value)
    }
  
    static addStepValue(record, property, value) {
        return addStepValue(record, property, value)
    }


    static test(record) {
        return testConditions(record)
    }
}


// Conditions

function getPVSInput(record, propertyID) {



    if (propertyID) {
        if (propertyID.endsWith('-input') == false) {
            propertyID = propertyID + '-input'
        }

        let result = record?.[propertyID]
        result = Array.isArray(result) ? result[0] : result
        return result

    }


    let results = []

    for (let k in Object.keys(record)) {


        if (k.endsWith('-input')) {
            k = k.replace('-input', '')
            results.push({ k: record?.[k] })
        }

    }
    return results

}

function setPVSInput(record, propertyID, pvs) {

    if (propertyID.endsWith('-input') == false) {
        propertyID = propertyID + '-input'
    }

    record[propertyID] = pvs

    return record

}


function getPVSOutput(record, propertyID) {



    if (propertyID) {
        if (propertyID.endsWith('-output') == false) {
            propertyID = propertyID + '-output'
        }

        let result = record?.[propertyID]
        result = Array.isArray(result) ? result[0] : result
        return result

    }


    let results = []

    for (let k in Object.keys(record)) {


        if (k.endsWith('-output')) {
            k = k.replace('-output', '')
            results.push({ k: record?.[k] })
        }

    }
    return results

}

function setPVSOutput(record, pps) {

    if (propertyID.endsWith('-output') == false) {
        propertyID = propertyID + '-output'
    }

    record[propertyID] = pvs

    return record

}

function addValuePattern(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.valuePattern = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}

function addMultipleValues(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.multipleValues = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}

function addStepValue(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.stepValue = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}
function addMinValue(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.minValue = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}

function addMaxValue(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.maxValue = value
    record = setPVSInput(pvs.record)
    return record
}
function addMinLength(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.valueMinLength = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}

function addMaxLength(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.valueMaxLength = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}

function addDefaultValue(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.defaultValue = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}

function addValueRequired(record, propertyID, value) {

    let pvs = getPVSInput(record, propertyID) || new PropertyValueSpecification()
    pvs.valueRequired = value
    record = setPVSInput(record, propertyID, pvs)
    return record
}




function testConditions(record) {

    let pps = getPVSInput(record)

    for (let k of Object.keys(pps)) {
        if (PropertyValueSpecification.test(pps[k], record?.[k]) == false) {
            return false
        }

    }
    return true

}





// 

export class UpdateAction extends Action {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "UpdateAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }

    get targetCollection() {
        return this.getValues(this.record, "targetCollection")
    }

    set targetCollection(value) {
        this.record = this.setValues(this.record, "targetCollection", value)
    }

    get toLocation() {
        return this.getValues(this.record, "toLocation")
    }

    set toLocation(value) {
        this.record = this.setValues(this.record, "toLocation", value)
    }
}


export class AddAction extends UpdateAction {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "AddAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }

}


export class DeleteAction extends UpdateAction {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "DeleteAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }

}

export class ReplaceAction extends UpdateAction {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "ReplaceAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }

    get replacer() {
        return this.getValues(this.record, "replacer")
    }

    set replacer(value) {
        this.record = this.setValues(this.record, "replacer", value)
    }

    get replacee() {
        return this.getValues(this.record, "replacee")
    }

    set replacee(value) {
        this.record = this.setValues(this.record, "replacee", value)
    }
}

export class InsertAction extends UpdateAction {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "InsertAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }
}

export class AppendAction extends UpdateAction {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "AppendAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }
}

export class PrependAction extends UpdateAction {
   constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "PrependAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }
}

export class SearchAction extends UpdateAction {
    constructor(name_or_record, object) {
        super()
        this._defaultRecordType = "SearchAction"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
        this._setValueIfNotNull('object', object)
    }

    get query() {
        return this.getValue( "query") || ""
    }

    set query(value) {
        return this.setValue(this.record, "query", value)
    }

    get filter() {
        let q = new URLSearchParams(this.query)
        return q.get("filter")
    }

    set filter(value) {
        let q = new URLSearchParams(this.query)
        q.set("filter", value)
        this.query = q.toString()
    }

    get limit() {
        let q = new URLSearchParams(this.query)
        return q.get("limit")
    }

    set limit(value) {
        let q = new URLSearchParams(this.query)
        q.set("limit", value)
        this.query = q.toString()
    }

    get offset() {
        let q = new URLSearchParams(this.query)
        return q.get("offset")
    }

    set offset(value) {
        let q = new URLSearchParams(this.query)
        q.set("offset", value)
        this.query = q.toString()
    }

    get orderBy() {
        let q = new URLSearchParams(this.query)
        return q.get("orderBy")
    }

    set orderBy(value) {
        let q = new URLSearchParams(this.query)
        q.set("orderBy", value)
        this.query = q.toString()
    }

    get orderDirection() {
        let q = new URLSearchParams(this.query)
        return q.get("orderDirection")
    }

    set orderDirection(value) {
        let q = new URLSearchParams(this.query)
        q.set("orderDirection", value)
        this.query = q.toString()
    }

    get tenantID() {
        let q = new URLSearchParams(this.query)
        return q.get("tenantID")
    }

    set tenantID(value) {
        let q = new URLSearchParams(this.query)
        q.set("tenantID", value)
        this.query = q.toString()
    }


    get target() {
        return this.getValue( "target") || ""
    }
    set target(value) {
        return this.setValue(this.record, "target", value)
    }


    async execute() {

        let url = new URL(this.target)
        url.search = this.query || ""

        let options = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer YOUR_TOKEN_HERE',
                'Custom-Header': 'MyValue'
            }
        }
        let response = await fetch(url, options)

        if (!response.ok) {
            this.setFailed(response.statusText)
        }

        let results = await response.json()

        results = Array.isArray(results) ? results : [results]
        results = results.map(x => x)

        let itemList = new ItemList()
        results.forEach(x => itemList.add(x))

        this.setCompleted()
        this.result = itemList.record


    }

}

