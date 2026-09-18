


import { _h as h } from '../../index.js'
import { dataHelpers } from '../../dataHelpers/dataHelpers.js'


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'


import { addPotentialActions } from './_potentialActions.js';

import { getProperties } from './_properties.js'

import { things } from '../things.js'
import { records } from '../../records/records.js'

import { transformHelpers } from '../../index.js'

import { Base } from './_base.js'


export class Thing extends Base {
    constructor(name_or_record) {
        super(name_or_record)
        this._defaultRecordType = "Thing"


        if(typeof name_or_record == "string"){
            this.name = name_or_record || this.name
        }
        

    }


    get name() {
        return this.getValue("name")
    }
    set name(value) {
        return this.setValue("name", value)
    }

    get url() {
        return this.getValue("url")
    }
    set url(value) {
        this.setValue("url", value)
        this.record_id = idhelper.get(this.record, this.baseUrl)
    }

    get cleanUrl() {
        let url = h.getValue(this.record, "url")
        url = dataHelpers.url.clean(value)
        return url
    }
    set cleanUrl(value) {
        url = dataHelpers.url.clean(value)
        this.url = url

    }

    get description() {
        return this.getValue("description")
    }
    set description(value) {
        return this.setValue("description", value)
    }

    get sameAs() {
        return h.getValue("sameAs")
    }
    set sameAs(value) {
        return this.setValue("sameAs", value)
    }


    get hasPart() {
        return h.getValues("hasPart")
    }
    set hasPart(value) {
        return this.setValues("hasPart", value)
    }

    get potentialAction() {
        return this.getValues("potentialAction")
    }
    set potentialAction(value) {
        return this.setValues("potentialAction", value)
    }




    // --------------------------------------------------------------------------
    // Methods
    // --------------------------------------------------------------------------


    // Methods

    addPotentialActions() {
        this.record = addPotentialActions(this.record)
    }

    addAdditionalProperty(propertyID, value) {
        this.record = addPropertyValue(this.record, "additionalProperty", propertyID, value)
    }


}


