import { records} from '../records.js'

export function getConversation(name=0, noOfMessages=5) {


    let record_type = "Conversation"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "hasPart": []
    }


    for (let i = 0; i < noOfMessages; i++) {

        let newName = name + '_' + String(i)
        let m = records.message(newName)
        m.sender = i % 2 == 0 ? m.recipient[0] : m.recipient[1]
        m.recipient = i % 2 == 0 ? m.recipient.toSpliced(0,1) : m.recipient.toSpliced(1,1)

        const date = new Date();
        date.setDate(date.getDate() - noOfMessages + i);

        m.dateSent = date
        m.dateReceived = date 

        record.hasPart.push(m)
    }

    return record


}