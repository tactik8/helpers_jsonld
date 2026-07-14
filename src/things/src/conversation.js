

const randomUUID = globalThis.crypto.randomUUID

import { records} from '../../records/records.js'

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'
import { Message } from './message.js'
import { timeStamp } from 'console';


/**
 * Represents a message in the system.
 * 
 * 
 */
export class Conversation extends CreativeWork {
    constructor(record) {
        super()
        this.record_type = "Conversation"
        if(record?.['@type'] == "Conversation"){
            this.record = record
        }
    }

    toString(){
        return toString(this.record)
    }

    get messages() {
        return getMessages(this._record)
    }
    set messages(value) {
        this._record = Thing.setValues(this._record, "hasPart", value)
    }

    get firstMessage(){ 
        return this.messages.length > 0 ? this.messages[0] : undefined
    }

    get lastMessage(){
        return this.messages.length > 0 ? this.messages[this.messages.length - 1] : undefined
    }


    // Convenience properties
    get participants(){
        return getParticipants(this.record)
    }

    // Helper methods
    add(sender, recipient, subject, text, dateSent, dateReceived){
        return newMessage(this._record, sender, recipient, subject, text, dateSent, dateReceived)
    }

    addMessage(sender, recipient, subject, text, dateSent, dateReceived){
        return newMessage(this._record, sender, recipient, subject, text, dateSent, dateReceived)
    }

    newMessage(sender, recipient, subject, text, dateSent, dateReceived){
        return newMessage(this._record, sender, recipient, subject, text, dateSent, dateReceived)
    }


    // static

    static getParticipants(conversationRecord){
        return getParticipants(conversationRecord)
    }

    static newMessage(conversationRecord, sender, recipient, subject, text, dateSent, dateReceived){
        return newMessage(conversationRecord, sender, recipient, subject, text, dateSent, dateReceived)
    }

    static addMessage(conversationRecord, sender, recipient, subject, text, dateSent, dateReceived){
        return newMessage(conversationRecord, sender, recipient, subject, text, dateSent, dateReceived)
    }

    static getMessages(conversationRecord){
        return getMessages(conversationRecord)
    }

    static getFirstMessage(conversationRecord){
        let messages = getMessages(conversationRecord)
        return messages.length > 0 ? messages[0] : undefined
    }

    static getLastMessage(conversationRecord){
        let messages = getMessages(conversationRecord)
        return messages.length > 0 ? messages[messages.length - 1] : undefined
    }
}


function toString(conversationRecord){

    let messages = getMessages(conversationRecord)

    let result = `Conversation with ${messages.length} messages:\n`

    result += Message.toString(messages)

    return result
}


function newMessage(conversationRecord, sender, recipient, subject, text, dateSent, dateReceived){
    
    let message = new Message(sender, recipient, subject, text, dateSent, dateReceived)
    
    let messages = getMessages(conversationRecord)
    messages.push(message.record)
    messages = sortMessages(messages)
    conversationRecord = Thing.setValues(conversationRecord, "hasPart", messages)
    return message

}

function getMessages(conversationRecord){
    let messages = h.getValues(conversationRecord, "hasPart").filter(x => h.getValue(x, "@type") == "Message")
    messages = sortMessages(messages)
    return messages
}

function sortMessages(messages){
    messages.sort((a, b) => {
        let dateA = new Date(h.getValue(a, "dateSent") || h.getValue(a, "dateCreated") || h.getValue(a, "dateReceived"))
        let dateB = new Date(h.getValue(b, "dateSent") || h.getValue(b, "dateCreated") || h.getValue(b, "dateReceived"))
        return dateA - dateB
    })
    return messages
}

function getParticipants(conversationRecord){
    let messages = getMessages(conversationRecord)
    let participants = new Set()

    messages.forEach(message => {
        let sender = h.getValue(message, "sender")
        if(sender){
            participants.add(sender)
        }
        let recipients = h.getValues(message, "recipient")
        recipients.forEach(recipient => {
            participants.add(recipient)
        })
    })
    
    return Array.from(participants)

}