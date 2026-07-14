
const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import * as things from '../../things/things.js'


import { Thing } from './thing.js'

import { PropertyValueSpecification } from './propertyValueSpecification.js'

export class Action extends Thing {
    constructor(name, object) {
        super()
        this.name = name
        this.object = object
        this.record_type = "Action"
        this.setActive()
    }

    toString() {
        return `${this.name} - ${(this.actionStatus || "").replace('ActionStatus', '')}`
    }

    setPotential() {
        this._record = setPotential(this._record)
    }

    setActive() {
        this._record = setActive(this._record)
    }

    setCompleted(result) {
        this._record = setCompleted(this._record, result)
    }

    setFailed(error) {
        this._record = setFailed(this._record, error)
    }

    get isPotential() {
        return this.actionStatus == "PotentialActionStatus"
    }
    get isActive() {
        return this.actionStatus == "ActiveActionStatus"
    }
    get isCompleted() {
        return this.actionStatus == "CompletedActionStatus"
    }
    get isFailed() {
        return this.actionStatus == "FailedActionStatus"
    }


    get object() {
        return h.getValues(this._record, "object")
    }
    set object(value) {
        this._record = Thing.setValues(this._record, "object", value)
    }

    get instrument() {
        return h.getValues(this._record, "instrument")
    }
    set instrument(value) {
        this._record = Thing.setValues(this._record, "instrument", value)
    }

    get agent() {
        return h.getValues(this._record, "agent")
    }
    set agent(value) {
        this._record = Thing.setValues(this._record, "agent", value)
    }

    get result() {
        return h.getValues(this._record, "result")
    }
    set result(value) {
        this._record = Thing.setValues(this._record, "result", value)
    }

    get actionStatus() {
        return h.getValue(this._record, "actionStatus")
    }
    set actionStatus(value) {
        this._record = Thing.setValue(this._record, "actionStatus", value)
    }

    get startTime() {
        return h.getValue(this._record, "startTime")
    }
    set startTime(value) {
        this._record = Thing.setValue(this._record, "startTime", value)
    }

    get endTime() {
        return h.getValue(this._record, "endTime")
    }
    set endTime(value) {
        this._record = Thing.setValue(this._record, "endTime", value)
    }

    get error() {
        return h.getValue(this._record, "error")
    }
    set error(value) {
        this._record = Thing.setValue(this._record, "error", value)
    }


    // Conditions

    addMinValue(property, value) {
        this._record = addMinValue(this._record, property, value)
    }
    addMaxValue(property, value) {
        this._record = addMaxValue(this._record, property, value)
    }

    addMinLength(property, value) {
        this._record = addMinLength(this._record, property, value)
    }

    addMaxLength(property, value) {
        this._record = addMaxLength(this._record, property, value)
    }

    addDefaultValue(property, value) {
        this._record = addDefaultValue(this._record, property, value)
    }

    addValueRequired(property, value) {
        this._record = addValueRequired(this._record, property, value)
    }

    addValuePattern(property, value) {
        this._record = addValuePattern(this._record, property, value)
    }
    addDefaultValue(property, value) {
        this._record = addDefaultValue(this._record, property, value)
    }
    addMultipleValues(property, value) {
        this._record = addMultipleValues(this._record, property, value)
    }
    addValueRequired(property, value) {
        this._record = addValueRequired(this._record, property, value)
    }
    addStepValue(property, value) {
        this._record = addStepValue(this._record, property, value)
    }




    testConditions() {
        return testConditions(this._record)
    }

    getInputconditions() {
        return getPVSInput(this._record)
    }
    addInputCondition(key, condition) {
        this._record = h.addValues(k + '-input', condition)
    }

    getOutputConditions() {
        return getPVSOutput(this._record)
    }
    addOutputCondition(key, condition) {
        this._record = h.addValues(k + '-output', condition)
    }


    test() {
        return testConditions(this._record)
    }


    // Static
    static setPotential(record) {
        return setPotential(record)
    }

    static setActive(record) {
        return setActive(record)
    }

    static setCompleted(record, result) {
        return setCompleted(record, result)
    }

    static setFailed(record, error) {
        return setFailed(record, error)
    }

    static isPotential(record) {
        return h.getValue(record?.record || record, actionStatus) == "PotentialActionStatus"
    }
    static isActive(record) {
        return h.getValue(record?.record || record, actionStatus) == "ActiveActionStatus"
    }
    static isCompleted(record) {
        return h.getValue(record?.record || record, actionStatus) == "CompletedActionStatus"
    }
    static isFailed(record) {
        return h.getValue(record?.record || record, actionStatus) == "FailedActionStatus"
    }


    static addMinValue(record, property, value) {
        this._record = addMinValue(record, property, value)
    }
    static addMaxValue(record, property, value) {
        this._record = addMaxValue(record, property, value)
    }

    static addMinLength(record, property, value) {
        this._record = addMinLength(record, property, value)
    }

    static addMaxLength(record, property, value) {
        this._record = addMaxLength(record, property, value)
    }

    static addDefaultValue(record, property, value) {
        this._record = addDefaultValue(record, property, value)
    }

    static addValueRequired(record, property, value) {
        this._record = addValueRequired(record, property, value)
    }

    static addValuePattern(record, property, value) {
        this._record = addValuePattern(record, property, value)
    }
    static addDefaultValue(record, property, value) {
        this._record = addDefaultValue(record, property, value)
    }
    static addMultipleValues(record, property, value) {
        this._record = addMultipleValues(record, property, value)
    }
    static addValueRequired(record, property, value) {
        this._record = addValueRequired(record, property, value)
    }
    static addStepValue(record, property, value) {
        this._record = addStepValue(record, property, value)
    }


    static test(record) {
        return testConditions(record)
    }
}

function setPotential(record) {
    record = record?.record || record
    Thing.setValue(record, 'actionStatus', 'PotentialActionStatus')
    Thing.setValue(record, 'timeStart', undefined)
    Thing.setValue(record, 'timeEnd', undefined)
    Thing.setValues(record, 'result', undefined)
    Thing.setValue(record, 'error', undefined)
    return record
}

function setActive(record) {
    record = record?.record || record
    Thing.setValue(record, 'actionStatus', 'ActiveActionStatus')
    Thing.setValue(record, 'timeStart', new Date())
    Thing.setValue(record, 'timeEnd', undefined)
    return record
}

function setCompleted(record, result) {
    record = record?.record || record
    Thing.setValue(record, 'actionStatus', 'CompletedActionStatus')
    Thing.setValue(record, 'timeStart', h.getValue(record, 'timeStart') || new Date())
    Thing.setValue(record, 'timeEnd', new Date())
    Thing.setValues(record, 'result', result)
    return record
}

function setFailed(record, error) {
    record = record?.record || record
    Thing.setValue(record, 'actionStatus', 'FailedActionStatus')
    Thing.setValue(record, 'timeStart', h.getValue(record, 'timeStart') || new Date())
    Thing.setValue(record, 'timeEnd', new Date())
    Thing.setValue(record, 'error', error)
    return record
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
    constructor(name, object) {
        super(name, object)
        this.record_type = "UpdateAction"
    }

    get targetCollection() {
        return h.getValues(this._record, "targetCollection")
    }

    set targetCollection(value) {
        this._record = Thing.setValues(this._record, "targetCollection", value)
    }

    get toLocation() {
        return h.getValues(this._record, "toLocation")
    }

    set toLocation(value) {
        this._record = Thing.setValues(this._record, "toLocation", value)
    }
}


export class AddAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "AddAction"
    }

}


export class DeleteAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "DeleteAction"
    }

}

export class ReplaceAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "ReplaceAction"
    }

    get replacer() {
        return h.getValues(this._record, "replacer")
    }

    set replacer(value) {
        this._record = Thing.setValues(this._record, "replacer", value)
    }

    get replacee() {
        return h.getValues(this._record, "replacee")
    }

    set replacee(value) {
        this._record = Thing.setValues(this._record, "replacee", value)
    }
}

export class InsertAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "InsertAction"
    }
}

export class AppendAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "AppendAction"
    }
}

export class PrependAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "PrependAction"
    }
}

export class SearchAction extends UpdateAction {
    constructor(name, object) {
        super(name, object)
        this.record_type = "SearchAction"
    }

    get query() {
        return h.getValue(this._record, "query") || ""
    }

    set query(value) {
        return Thing.setValue(this._record, "query", value)
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


    get target(){
        return h.getValue(this._record, "target") || ""
    }
    set target(value){
        return Thing.setValue(this._record, "target", value)
    }


    async execute(){

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

        let itemList = new things.ItemList()
        results.forEach(x => itemList.add(x))

        this.setCompleted()
        this.result = itemList.record


    }

}

