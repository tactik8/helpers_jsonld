
import { v4 as uuidv4 } from 'uuid';

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

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
        this._record = h.setValues(this._record, "object", value)
    }

    get instrument() {
        return h.getValues(this._record, "instrument")
    }
    set instrument(value) {
        this._record = h.setValues(this._record, "instrument", value)
    }

    get agent() {
        return h.getValues(this._record, "agent")
    }
    set agent(value) {
        this._record = h.setValues(this._record, "agent", value)
    }

    get result() {
        return h.getValues(this._record, "result")
    }
    set result(value) {
        this._record = h.setValues(this._record, "result", value)
    }

    get actionStatus() {
        return h.getValue(this._record, "actionStatus")
    }
    set actionStatus(value) {
        this._record = h.setValue(this._record, "actionStatus", value)
    }

    get startTime() {
        return h.getValue(this._record, "startTime")
    }
    set startTime(value) {
        this._record = h.setValue(this._record, "startTime", value)
    }

    get endTime() {
        return h.getValue(this._record, "endTime")
    }
    set endTime(value) {
        this._record = h.setValue(this._record, "endTime", value)
    }

    get error() {
        return h.getValue(this._record, "error")
    }
    set error(value) {
        this._record = h.setValue(this._record, "error", value)
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

}

function setPotential(record) {
    record = record?.record || record
    h.setValue(record, 'actionStatus', 'PotentialActionStatus')
    h.setValue(record, 'timeStart', undefined)
    h.setValue(record, 'timeEnd', undefined)
    h.setValues(record, 'result', undefined)
    h.setValue(record, 'error', undefined)
    return record
}

function setActive(record) {
    record = record?.record || record
    h.setValue(record, 'actionStatus', 'ActiveActionStatus')
    h.setValue(record, 'timeStart', new Date())
    h.setValue(record, 'timeEnd', undefined)
    return record
}

function setCompleted(record, result) {
    record = record?.record || record
    h.setValue(record, 'actionStatus', 'CompletedActionStatus')
    h.setValue(record, 'timeStart', h.getValue(record, 'timeStart') || new Date())
    h.setValue(record, 'timeEnd', new Date())
    h.setValues(record, 'result', result)
    return record
}

function setFailed(record, error) {
    record = record?.record || record
    h.setValue(record, 'actionStatus', 'FailedActionStatus')
    h.setValue(record, 'timeStart', h.getValue(record, 'timeStart') || new Date())
    h.setValue(record, 'timeEnd', new Date())
    h.setValue(record, 'error', error)
    return record
}




function getPPS(record){

    let pps = []
    for(let k of Object.keys(record)){
        if(k.includes('-input')){
            let p = record[k]
        }
    }

}