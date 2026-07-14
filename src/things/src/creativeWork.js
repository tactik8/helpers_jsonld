

const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'



export class CreativeWork extends Thing {
    constructor() {
        super()
        this.record_type = "Message"
    }

    get about() {
        return h.getValues(this._record, "about")
    }  
    set about(value) {
        this._record = Thing.setValues(this._record, "about", value)
    }

    get abstract() {
        return h.getValues(this._record, "abstract")
    }  
    set abstract(value) {
        this._record = Thing.setValues(this._record, "abstract", value)
    }   

    get author() {
        return h.getValues(this._record, "author")
    }
    set author(value) {
        this._record = Thing.setValues(this._record, "author", value)
    }

    get comment() {
        return h.getValues(this._record, "comment")
    }
    set comment(value) {
        this._record = Thing.setValues(this._record, "comment", value)
    }

    get contributor() {
        return h.getValues(this._record, "contributor")
    }
    set contributor(value) {
        this._record = Thing.setValues(this._record, "contributor", value)
    }

    get creator() {
        return h.getValues(this._record, "creator")
    }
    set creator(value) {
        this._record = Thing.setValues(this._record, "creator", value)
    }

    get dateCreated() {
        return h.getValues(this._record, "dateCreated")
    }
    set dateCreated(value) {
        this._record = Thing.setValues(this._record, "dateCreated", value)
    }

    get dateModified() {
        return h.getValues(this._record, "dateModified")
    }
    set dateModified(value) {
        this._record = Thing.setValues(this._record, "dateModified", value)
    }   

    get datePublished() {
        return h.getValues(this._record, "datePublished")
    }
    set datePublished(value) {
        this._record = Thing.setValues(this._record, "datePublished", value)
    }

    get editor() {
        return h.getValues(this._record, "editor")
    }
    set editor(value) {
        this._record = Thing.setValues(this._record, "editor", value)
    }

   

    get hasPart() {
        return h.getValues(this._record, "hasPart")
    }
    set hasPart(value) {
        this._record = Thing.setValues(this._record, "hasPart", value)
    }   

    /**
     * Gets or sets the headline of the creative work.
     * 
     * @returns {string} The headline of the creative work.
     */
    get headline() {
        return h.getValue(this._record, "headline")
    }
    set headline(value) {
        this._record = Thing.setValue(this._record, "headline", value)
    }   

    get inLanguage() {
        return h.getValues(this._record, "inLanguage")
    }       
    set inLanguage(value) {
        this._record = Thing.setValues(this._record, "inLanguage", value)
    }

    get isPartOf() {
        return h.getValues(this._record, "isPartOf")
    }       
    set isPartOf(value) {
        this._record = Thing.setValues(this._record, "isPartOf", value)
    }   

    get keywords() {
        return h.getValues(this._record, "keywords")
    }    
    set keywords(value) {
        this._record = Thing.setValues(this._record, "keywords", value)
    }       

    get offers() {
        return h.getValues(this._record, "offers")
    }       
    set offers(value) {
        this._record = Thing.setValues(this._record, "offers", value)
    }   
    
    get provider() {
        return h.getValues(this._record, "provider")
    }       
    set provider(value) {
        this._record = Thing.setValues(this._record, "provider", value)
    }

    get publisher() {
        return h.getValues(this._record, "publisher")
    }
    set publisher(value) {
        this._record = Thing.setValues(this._record, "publisher", value)
    }

    get review() {
        return h.getValues(this._record, "review")
    }       
    set review(value) {
        this._record = Thing.setValues(this._record, "review", value)
    }

    get sourceOrganization() {
        return h.getValues(this._record, "sourceOrganization")
    }       
    set sourceOrganization(value) {
        this._record = Thing.setValues(this._record, "sourceOrganization", value)
    }   

    /**
     * Gets or sets the text of the creative work.
     * 
     * @returns {string} The text of the creative work.
     */
    get text() {
        return h.getValue(this._record, "text")
    }
    set text(value) {
        this._record = Thing.setValue(this._record, "text", value)
    }   

    get thumbnail(){
        return h.getValues(this._record, "thumbnail")
    }
    set thumbnail(value) {
        this._record = Thing.setValues(this._record, "thumbnail", value)
    }

    get thumbnailUrl(){
        return h.getValues(this._record, "thumbnailUrl")
    }
    set thumbnailUrl(value) {
        this._record = Thing.setValues(this._record, "thumbnailUrl", value)
    }

    get version() {
        return h.getValues(this._record, "version")
    }
    set version(value) {
        this._record = Thing.setValues(this._record, "version", value)
    }

    get video() {
        return h.getValues(this._record, "video")
    }
    set video(value) {
        this._record = Thing.setValues(this._record, "video", value)
    }

    get wordCount() {
        return h.getValues(this._record, "wordCount")
    }
    set wordCount(value) {
        this._record = Thing.setValues(this._record, "wordCount", value)
    }



}