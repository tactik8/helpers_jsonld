

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'


import { Thing } from './thing.js'



export class PropertyValueSpecification extends Thing {
    constructor(name_or_record) {
        super()
        this._defaultRecordType = "PropertyValueSpecification"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)

    }

    get valueRequired() {
        return this.getValue("valueRequired")
    }
    set valueRequired(value) {
        return this.setValue("valueRequired", value)
    }

    get defaultValue() {
        return this.getValue("defaultValue")
    }
    set defaultValue(value) {
        return this.setValue("defaultValue", value)
    }

    get valueName() {
        return this.getValue("valueName")
    }
    set valueName(value) {
        return this.setValue("valueName", value)
    }

    get readonlyValue() {
        return this.getValue("readonlyValue")
    }
    set readonlyValue(value) {
        return this.setValue("readonlyValue", value)
    }

    get multipleValues() {
        return this.getValue("multipleValues")
    }
    set multipleValues(value) {
        return this.setValue("multipleValues", value)
    }

    get valueMinLength() {
        return this.getValue("valueMinLength")
    }
    set valueMinLength(value) {
        return this.setValue("valueMinLength", value)
    }

    get valueMaxLength() {
        return this.getValue("valueMaxLength")
    }
    set valueMaxLength(value) {
        return this.setValue("valueMaxLength", value)
    }

    get valuePattern() {
        return this.getValue("valuePattern")
    }
    set valuePattern(value) {
        return this.setValue("valuePattern", value)
    }

    get minValue() {
        return this.getValue("minValue")
    }
    set minValue(value) {
        return this.setValue("minValue", value)
    }

    get maxValue() {
        return this.getValue("maxValue")
    }
    set maxValue(value) {
        return this.setValue("maxValue", value)
    }

    get stepValue() {
        return this.getValue("stepValue")
    }
    set stepValue(value) {
        return this.setValue("stepValue", value)
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

