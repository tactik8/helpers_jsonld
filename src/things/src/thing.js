


import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'
import { dataHelpers } from '../../dataHelpers/dataHelpers.js'

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'




import { Base } from './_base.js'


export class Thing extends Base {
    constructor(name_or_record) {
        super()
        this._defaultRecordType = "Thing"

        this._loadRecord(name_or_record)
        this._setValueIfString('name', name_or_record)
       
    }




    get cleanUrl() {
        let url = this.getValue(this.record, "url")
        url = dataHelpers.url.clean(value)
        return url
    }
    set cleanUrl(value) {
        url = dataHelpers.url.clean(value)
        this.url = url

    }


    // Properties

    get description() {
        return this.getValue("description")
    }
    set description(value) {
        return this.setValue("description", value)
    }

    get sameAs() {
        return this.getValue("sameAs")
    }
    set sameAs(value) {
        return this.setValue("sameAs", value)
    }


    get hasPart() {
        return this.getValues("hasPart")
    }
    set hasPart(value) {
        return this.setValues("hasPart", value)
    }


    get image() {
        return this.getValue("image")
    }
    set image(value) {
        return this.setValue("image", value)
    }

    /**
     * The name of the item.
     * @type {string}
     */
    get name() {
        return this.getValue("name")
    }
    /**
     * The name of the item.
     * @type {string}
     */
    set name(value) {
        return this.setValue("name", value)
    }

    get owner() {
        return this.getValues("owner")
    }
    set owner(value) {
        return this.setValues("owner", value)
    }


    get potentialAction() {
        return this.getValues("potentialAction")
    }
    set potentialAction(value) {
        return this.setValues("potentialAction", value)
    }



    get sameAs() {
        return this.getValues("sameAs")
    }
    set sameAs(value) {
        return this.setValues("sameAs", value)
    }



    /**
     * A CreativeWork or Event about this Thing.
     */
    get subjectOf() {
        return this.getValues("subjectOf")
    }
    /**
     * A CreativeWork or Event about this Thing.
     */
    set subjectOf(value) {
        return this.setValues("subjectOf", value)
    }




    get url() {
        return this.getValue("url")
    }
    set url(value) {
        this.setValue("url", value)
        this.record_id = idhelper.get(this.record, this.baseUrl)
    }


    // --------------------------------------------------------------------------
    // Methods
    // --------------------------------------------------------------------------


    // Methods

    addPotentialActions() {
      //  this.record = addPotentialActions(this.record)
    }

    setAdditionalProperty(propertyID, value) {

        // Remove current
        let records = this.getValues("additionalProperty")
        records = records.filter(x => x?.propertyID != propertyID)
        

        // Create new
        let pv = {"@type": "PropertyValue", "@id": h.randomUUID()}
        pv.propertyID = propertyID
        pv.value = value
        records.push(pv)

        // Save in record
        this.setValues('additionalProperty', records)

        return

    }

    removeAdditionalProperty(propertyID){

        let records = this.getValues("additionalProperty")
        let r = records.find(x => x?.propertyID == propertyID)

        if(r){
            records = records.filter(x => x?.propertyID != propertyID)
            this.setValues('additionalProperty', records)
        }
        return
    }


    getAdditionalProperty(propertyID) {

        let records = this.getValues("additionalProperty")
        let r = records.find(x => x?.propertyID == propertyID)

        return r?.value 
    }

}


