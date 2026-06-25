

import { randomUUID } from 'crypto';


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'



export class PropertyValueSpecification extends Thing {
    constructor(url) {
        super()
        this.record_type = "PropertyValueSpecification"
        this.url = url
    }

    get valueRequired() {
        return h.getValue(this._record, "valueRequired")
    }
    set valueRequired(value) {
        this._record = h.setValue(this._record, "valueRequired", value)
    }

    get defaultValue() {
        return h.getValue(this._record, "defaultValue")
    }
    set defaultValue(value) {
        this._record = h.setValue(this._record, "defaultValue", value)
    }

    get valueName() {
        return h.getValue(this._record, "valueName")
    }
    set valueName(value) {
        this._record = h.setValue(this._record, "valueName", value)
    }

    get readonlyValue() {
        return h.getValue(this._record, "readonlyValue")
    }
    set readonlyValue(value) {
        this._record = h.setValue(this._record, "readonlyValue", value)
    }

    get multipleValues() {
        return h.getValue(this._record, "multipleValues")
    }
    set multipleValues(value) {
        this._record = h.setValue(this._record, "multipleValues", value)
    }

    get valueMinLength() {
        return h.getValue(this._record, "valueMinLength")
    }
    set valueMinLength(value) {
        this._record = h.setValue(this._record, "valueMinLength", value)
    }

    get valueMaxLength() {
        return h.getValue(this._record, "valueMaxLength")
    }
    set valueMaxLength(value) {
        this._record = h.setValue(this._record, "valueMaxLength", value)
    }

    get valuePattern() {
        return h.getValue(this._record, "valuePattern")
    }
    set valuePattern(value) {
        this._record = h.setValue(this._record, "valuePattern", value)
    }

    get minValue() {
        return h.getValue(this._record, "minValue")
    }
    set minValue(value) {
        this._record = h.setValue(this._record, "minValue", value)
    }

    get maxValue() {
        return h.getValue(this._record, "maxValue")
    }
    set maxValue(value) {
        this._record = h.setValue(this._record, "maxValue", value)
    }

    get stepValue() {
        return h.getValue(this._record, "stepValue")
    }
    set stepValue(value) {
        this._record = h.setValue(this._record, "stepValue", value)
    }


    test(value){
        return validateValue(this.record, value)
    }

    static test(pps, value){
        return validateValue(pps, value)
    }

}

function validateValue(value, pps) {

    let action = {
        "@type": "Action",
        "name": "Validate PPS",
        "object": value,
        "instrument": pps,
        "actionStatus": "CompletedActionStatus"
    }

    pps = JSON.parse(JSON.stringify(pps))
    Object.keys(pps).foreach(x => pps[k] = Array.isArray(pps?.[k]) ? pps?.[k][0] : pps?.[k])


    // 
    if (pps.valueRequired == true && (!value && value != 0)) {
        action.actionStatus = "FailedActionStatus"
        action.error = "A value is required, no value provided."
        return action
    }

    if (pps.multipleValues == false && Array.isArray(value)) {
        action.actionStatus = "FailedActionStatus"
        action.error = "Cannot contain multiple values."
        return action
    }

    if (pps.valueMinLength && String(value).length < pps.valueMinLength) {
        action.actionStatus = "FailedActionStatus"
        action.error = "Value does not meet minimum length."
        return action
    }

    if (pps.valueMaxLength && String(value).length > pps.valueMinLength) {
        action.actionStatus = "FailedActionStatus"
        action.error = "Value exceeds maximum length."
        return action
    }

    if (pps.minValue && value < pps.minValue) {
        action.actionStatus = "FailedActionStatus"
        action.error = "Value is smaller than minimum value allowed."
        return action
    }

    if (pps.maxValue && value > pps.maxValue) {
        action.actionStatus = "FailedActionStatus"
        action.error = "Value exceeds maximum length."
        return action
    }


    if(pps.valuePattern){
        const patternString = "hello";
        const flags = "gi";

        const regex = new RegExp(pps.valuePattern, flags);

        // Usage
        const result = value.test(regex); 

        if(result == false){
            action.actionStatus = "FailedActionStatus"
            action.error = "Value doesn't match pattern."
            return action
        }
    }

    return action


}



function uriToPPS(uri){

    

}

