
import { v4 as uuidv4 } from 'uuid';

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'


import { getProperties} from './_properties.js'

export class Thing {
    constructor(value) {
        this._isThingClass = true
        this._record = value || {}
        this.record_type = "Thing"
        this.record_id = idhelper.get(this.record, this.baseUrl)
        
    }

    toString() {
        return `${this._record_type}/${this._record_id}`
    }

    toJSON() {
        return this.record
    }

    get(propertyID) {
        return h.getValues(this._record, propertyID)
    }

    set(propertyID, value) {
        this._record = h.setValues(this._record, propertyID, value)
    }

    get baseUrl() {
        return process.env.baseUrl
    }

    set baseUrl(value) {
        process.env.baseUrl = value
    }

    get record() {
        return classToRecord(this._record)
    }

    set record(value) {
        this._record = value
    }

    get record_type() {
        return h.getValue(this._record, "@type")
    }
    set record_type(value) {
        this._record = h.setValue(this._record, "@type", value)
    }

    get record_id() {
        return h.getValue(this._record, "@id")
    }
    set record_id(value) {
        this._record = h.setValue(this._record, "@id", value)
    }

    get properties(){
        return getProperties(this.record_type)
    }


    get name() {
        return h.getValue(this._record, "name")
    }
    set name(value) {
        this._record = h.setValue(this._record, "name", value)
    }

    get url() {
        return h.getValue(this._record, "url")
    }
    set url(value) {
        this._record = h.setValue(this._record, "url", value)
        this.record_id = idhelper.get(this._record, this.baseUrl)
    }

    get description() {
        return h.getValue(this._record, "description")
    }
    set description(value) {
        this._record = h.setValue(this._record, "description", value)
    }

    get sameAs() {
        return h.getValue(this._record, "sameAs")
    }
    set sameAs(value) {
        this._record = h.setValue(this._record, "sameAs", value)
    }


    get hasPart() {
        return h.getValues(this._record, "hasPart")
    }
    set hasPart(value) {
        this._record = h.setValues(this._record, "hasPart", value)
    }

    get potentialAction() {
        return h.getValues(this._record, "potentialAction")
    }
    set potentialAction(value) {
        this._record = h.setValues(this._record, "potentialAction", value)
    }




    // Static

    static get baseUrl() {
        return process.env.baseUrl
    }

    static set baseUrl(value) {
        process.env.baseUrl = value
    }


    static getProperties(record_type){
        return getProperties(record_type)
    }

    static getValue(record, propertyID) {
        return h.getValue(record, propertyID)
    }
    static setValue(record, propertyID, value) {
        return h.setValue(record, propertyID, value)
    }
    static getValues(record, propertyID) {
        return h.getValues(record, propertyID)
    }
    static setValues(record, propertyID, value) {
        return h.setValues(record, propertyID, value)
    }

    static flatten(value) {
        return h.flatten(value)
    }

}



/**
 * Convert a class Thing type object to record
 * @param {} value 
 * @returns 
 */
function classToRecord(value) {

    if (Array.isArray(value)) {
        return value.map(x => classToRecord(x))
    }

    if (value?.['_isThingClass'] == true) {
        value = value._record
    }

    if (value?.['@type'] || value?.['@id']) {
        for (let k of Object.keys(value)) {
            value[k] = classToRecord(value[k])
        }

    }

    return value

}



function addPotentialAction(record, potentialAction){




}