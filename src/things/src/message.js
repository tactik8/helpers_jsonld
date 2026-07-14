

const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'


/**
 * Represents a message in the system.
 * 
 * 
 */
export class Message extends CreativeWork {
    constructor(sender, recipient, subject, text, dateSent, dateReceived) {
        super()
        this.record_type = "Message"

        if(sender?.['@type'] == "Message"){
            this.record = sender.record
        } else {
            this.sender = sender
            this.recipient = recipient
            this.headline = subject
            this.text = text
            this.dateSent = dateSent
            this.dateReceived = dateReceived
        }
       
    }

    toString(){
        return toString(this.record)
    }

    get bccRecipient() {
        return h.getValues(this._record, "bccRecipient")
    }  
    set bccRecipient(value) {
        this._record = Thing.setValues(this._record, "bccRecipient",  toContactPoint(value))
    }

    get ccRecipient() {
        return h.getValues(this._record, "ccRecipient")
    }  
    set ccRecipient(value) {
        this._record = Thing.setValues(this._record, "ccRecipient", toContactPoint(value))
    }

    get dateRead() {
        return h.getValue(this._record, "dateRead")
    }  
    set dateRead(value) {
        this._record = Thing.setValue(this._record, "dateRead", value)
    }

    get dateReceived() {
        return h.getValue(this._record, "dateReceived")
    }  
    set dateReceived(value) {
        this._record = Thing.setValue(this._record, "dateReceived", value)
    }

    get dateSent() {
        return h.getValue(this._record, "dateSent")
    }  
    set dateSent(value) {
        this._record = Thing.setValue(this._record, "dateSent", value)
    }

    get messageAttachment() {
        return h.getValues(this._record, "messageAttachment")
    }  
    set messageAttachment(value) {
        this._record = Thing.setValues(this._record, "messageAttachment", value)
    }

    get recipient() {
        return h.getValues(this._record, "recipient")
    }  
    set recipient(value) {
        this._record = Thing.setValues(this._record, "recipient", toContactPoint(value))
    }

    get sender() {
        return h.getValue(this._record, "sender")
    }  
    set sender(value) {
        this._record = Thing.setValue(this._record, "sender",  toContactPoint(value))
    }

    get toRecipient() {
        return h.getValues(this._record, "toRecipient")
    }  
    set toRecipient(value) {
        this._record = Thing.setValues(this._record, "toRecipient",  toContactPoint(value))
    }   


    // Shortcurts for common properties
    get subject() {
        return this.headline
    }
    set subject(value) {
        this.headline = value
    }

    get body() {
        return this.text
    }
    set body(value) {
        this.text = value
    }

    // Schema conversion methods for Gmail and Outlook formats
    get gmail(){
        return toGmail(this.record)
    }

    set gmail(value){
        this.record = fromGmail(value)
    }

    get outlook(){
        return toOutlook(this.record)
    }
    
    set outlook(value){
        this.record = fromOutlook(value)
    }


    // static
    static toString(messageRecord){
        return toString(messageRecord)
    }

    static fromGmail(gmailMessage){
        return fromGmail(gmailMessage)
    }

    static toGmail(message){
        return toGmail(message)
    }

    static fromOutlook(outlookMessage){
        return fromOutlook(outlookMessage)
    }

    static toOutlook(message){
        return toOutlook(message)
    }

}


function toString(messageRecord){

    if(!messageRecord){
        return ""
    }
    
    if(Array.isArray(messageRecord) && messageRecord.length > 1){
        return messageRecord.map(m => toString(m)).join("\n")
    }
    
    if(Array.isArray(messageRecord) && messageRecord.length == 1){
        messageRecord = messageRecord[0]
    }

    let sender = h.getValue(messageRecord, "sender")
    let senderString = sender?.email || sender?.name || ""
    senderString = formatText(senderString, 20)

    let recipients = h.getValues(messageRecord, "recipient")
    let recipientString = recipients.map(r => r?.email || r?.name || "")
    recipientString = formatText(recipientString, 25)
    
    let subject = (h.getValue(messageRecord, "headline") || "")
    if(subject.length > 20){
        subject = formatText(subject, 30)
    }

    let date = h.getValue(messageRecord, "dateSent")|| h.getValue(messageRecord, "dateReceived") || ""
    
    let dateString = ""
    try {
        dateString = new Intl.DateTimeFormat('en-US').format(date)
    } catch(err){
    }

    let result = `${senderString} | ${recipientString} | ${subject} | ${dateString}`

    return result    

}


function formatText(text, maxLength = 100) {

    if(!text){
        return ""
    }

    // If text is an array, join the elements into a single string
    if(Array.isArray(text) && text.length > 1){
        let r = text.join(', ')
        if(r.length > maxLength){
            let endString = `... [${text.length}]`
            r = r.slice(0, maxLength - endString.length) + endString
        }
        return r
    }

    if(Array.isArray(text) && text.length == 0){
        return ""
    }

    if(Array.isArray(text) && text.length == 1){
        text = text[0]
    }

    // If text is a string, truncate it if it's too long
    if(typeof text === 'string' && text.length > maxLength){
        return `${text.slice(0, maxLength - 3)}...`
    }

    return text

}



function toContactPoint(value){
    if(!value){
        return []
    }
    if(Array.isArray(value)){
        return value.map(x => toContactPoint(x))
    }
    
    if(typeof value == "string"){

        if(value.includes("@")){
            return {"@type": "ContactPoint", "email": value}
        }
        else{
            return {"@type": "Person", "name": value}
        }
    }

    return value

}   


function fromGmail(gmailMessage){
    let message = new Message()

    message.sender = gmailMessage.sender
    message.recipient = gmailMessage.recipient
    message.subject = gmailMessage.subject
    message.text = gmailMessage.text
    message.dateSent = gmailMessage.dateSent
    message.dateReceived = gmailMessage.dateReceived

    return message
}

function toGmail(message){
    let gmailMessage = {}

    gmailMessage.sender = message.sender
    gmailMessage.recipient = message.recipient
    gmailMessage.subject = message.subject
    gmailMessage.text = message.text
    gmailMessage.dateSent = message.dateSent
    gmailMessage.dateReceived = message.dateReceived

    return gmailMessage
}

function fromOutlook(outlookMessage){
    let message = new Message()

    message.record_id = "https://www.outlook.com/message/" + message.id
    message.sender = outlookMessage.sender
    message.recipient = outlookMessage.toRecipients.emailAddress
    message.subject = outlookMessage.subject
    message.text = outlookMessage.text
    message.dateSent = outlookMessage.sentDateTime
    message.dateReceived = outlookMessage.receivedDateTime

    return message
}

function toOutlook(message){
    let outlookMessage = {}

    outlookMessage.sender = message.sender
    outlookMessage.toRecipients = message.recipient
    outlookMessage.subject = message.subject
    outlookMessage.text = message.text
    outlookMessage.sentDateTime = message.dateSent
    outlookMessage.receivedDateTime = message.dateReceived

    return outlookMessage
}