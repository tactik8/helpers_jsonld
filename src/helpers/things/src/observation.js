

import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { QuantitativeValue } from './quantitativeValue.js'



/**
 * Represents a message in the system.
 * 
 * 
 */
export class Observation extends QuantitativeValue {
    constructor(record_or_value) {
        super()
        this._defaultRecordType = "Observation"

        if (h.record_type(record_or_value) == this._defaultRecordType) {
            this.record = record_or_value
        } else {

        }

    }

    toString() {
        return toString(this.record)
    }

    get marginOfError() {
        return this.getValue('marginOfError')
    }
    set marginOfError(value) {
        return this.setValue('marginOfError', value)
    }

    get measuredProperty() {
        return this.getValue('measuredProperty')
    }
    set measuredProperty(value) {
        return this.setValue('measuredProperty', value)
    }

    get measurementDenominator() {
        return this.getValue('measurementDenominator')
    }
    set measurementDenominator(value) {
        return this.setValue('measurementDenominator', value)
    }

    get measurementMethod() {
        return this.getValue('measurementMethod')
    }
    set measurementMethod(value) {
        return this.setValue('measurementMethod', value)
    }

    get measurementQualifier() {
        return this.getValue('measurementQualifier')
    }
    set measurementQualifier(value) {
        return this.setValue('measurementQualifier', value)
    }

    get measurementTechnique() {
        return this.getValue('measurementTechnique')
    }
    set measurementTechnique(value) {
        return this.setValue('measurementTechnique', value)
    }

    get observationAbout() {
        return this.getValue('observationAbout')
    }
    set observationAbout(value) {
        return this.setValue('observationAbout', value)
    }

    get observationDate() {
        return this.getValue('observationDate')
    }
    set observationDate(value) {
        return this.setValue('observationDate', value)
    }

    get observationPeriod() {
        return this.getValue('observationPeriod')
    }
    set observationPeriod(value) {
        return this.setValue('observationPeriod', value)
    }

    get variableMeasured() {
        return this.getValue('variableMeasured')
    }
    set variableMeasured(value) {
        return this.setValue('variableMeasured', value)
    }


}


function toString(record) {

    let content = ''

    content += `${record?.name || record?.['@id']} `



}
