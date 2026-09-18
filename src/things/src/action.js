
const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import { _h as h } from '../../index.js'

import * as things from '../../things/things.js'


import { Thing } from './thing.js'

import { PropertyValueSpecification } from './propertyValueSpecification.js'

export class Action extends Thing {
    constructor(name, object) {
        super()

        // If record provided instead of name
        if (typeof name != "string" ) {
            this.record = name
        } else {
            if(name){
                this.name = name
            }
            if(object){
                this.object = object
            }
            this.record_type = this.record_type || "Action"
        }
     

    }

    toString() {
        return `${this.name} - ${(this.actionStatus || "").replace('ActionStatus', '')}`
    }

    setPotential() {
        this.record = setPotential(this.record)
    }

    setActive() {
        this.record = setActive(this.record)
    }

    setCompleted(result) {
        this.record = setCompleted(this.record, result)
    }

    setFailed(error) {
        this.record = setFailed(this.record, error)
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
        return h.getValues(this.record, "object")
    }
    set object(value) {
        this.record = Thing.setValues(this.record, "object", value)
    }

    get instrument() {
        return h.getValues(this.record, "instrument")
    }
    set instrument(value) {
        this.record = Thing.setValues(this.record, "instrument", value)
    }

    get agent() {
        return h.getValues(this.record, "agent")
    }
    set agent(value) {
        this.record = Thing.setValues(this.record, "agent", value)
    }

    get result() {
        return h.getValues(this.record, "result")
    }
    set result(value) {
        this.record = Thing.setValues(this.record, "result", value)
    }

    get actionStatus() {
        return h.getValue(this.record, "actionStatus")
    }
    set actionStatus(value) {
        this.record = Thing.setValue(this.record, "actionStatus", value)
    }

    get startTime() {
        return h.getValue(this.record, "startTime")
    }
    set startTime(value) {
        this.record = Thing.setValue(this.record, "startTime", value)
    }

    get endTime() {
        return h.getValue(this.record, "endTime")
    }
    set endTime(value) {
        this.record = Thing.setValue(this.record, "endTime", value)
    }

    get error() {
        return h.getValue(this.record, "error")
    }
    set error(value) {
        this.record = Thing.setValue(this.record, "error", value)
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
        this.record = h.addValues(k + '-input', condition)
    }

    getOutputConditions() {
        return getPVSOutput(this.record)
    }
    addOutputCondition(key, condition) {
        this.record = h.addValues(k + '-output', condition)
    }


    test() {
        return testConditions(this.record)
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
        this.record = addMinValue(record, property, value)
    }
    static addMaxValue(record, property, value) {
        this.record = addMaxValue(record, property, value)
    }

    static addMinLength(record, property, value) {
        this.record = addMinLength(record, property, value)
    }

    static addMaxLength(record, property, value) {
        this.record = addMaxLength(record, property, value)
    }

    static addDefaultValue(record, property, value) {
        this.record = addDefaultValue(record, property, value)
    }

    static addValueRequired(record, property, value) {
        this.record = addValueRequired(record, property, value)
    }

    static addValuePattern(record, property, value) {
        this.record = addValuePattern(record, property, value)
    }
   
    static addMultipleValues(record, property, value) {
        this.record = addMultipleValues(record, property, value)
    }
  
    static addStepValue(record, property, value) {
        this.record = addStepValue(record, property, value)
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
        return h.getValues(this.record, "targetCollection")
    }

    set targetCollection(value) {
        this.record = Thing.setValues(this.record, "targetCollection", value)
    }

    get toLocation() {
        return h.getValues(this.record, "toLocation")
    }

    set toLocation(value) {
        this.record = Thing.setValues(this.record, "toLocation", value)
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
        return h.getValues(this.record, "replacer")
    }

    set replacer(value) {
        this.record = Thing.setValues(this.record, "replacer", value)
    }

    get replacee() {
        return h.getValues(this.record, "replacee")
    }

    set replacee(value) {
        this.record = Thing.setValues(this.record, "replacee", value)
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
        return h.getValue(this.record, "query") || ""
    }

    set query(value) {
        return Thing.setValue(this.record, "query", value)
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
        return h.getValue(this.record, "target") || ""
    }
    set target(value) {
        return Thing.setValue(this.record, "target", value)
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

        let itemList = new things.ItemList()
        results.forEach(x => itemList.add(x))

        this.setCompleted()
        this.result = itemList.record


    }

}

