import { records } from '../records.js'

export function getOrganization(name = 0) {


    let record_type = "Organization"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "name": name,
        "address": records.postalAddress(),
        "url": `https://www.test_${name.replaceAll(' ', '_')}.com`
    }



    return record


}