import { records} from '../records.js'

export function getMessage(name=0) {


    let record_type = "Message"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let d = new Date()

    let record = {
        "@type": record_type,
        "@id": record_id,
        "sender": records.person(0),
        "recipient": [records.person(10), records.person(11), records.person(12)],
        "headline": `Test ${String(name)} - this is a test message no ${String(name)}`,
        "dateSent": new Date(),
        "dateReceived": new Date(),
        "text": `Test ${String(name)} This is a test mesage. This message is used for testing purposes only.`
    }

   

    return record


}