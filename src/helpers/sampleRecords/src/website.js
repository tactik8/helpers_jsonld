import { records} from '../records.js'

export function getWebsite(name=0) {


    let record_type = "WebSite"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "name": name,
        "url": "https://www.testrecord.com"
    }

   

    return record


}