import { records } from '../records.js'

export function getPostalAddress(name = 0) {


    let record_type = "PostalAddress"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {

        "@type": record_type,
        "@id": record_id,
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "postalCode": "98052",
        "streetAddress": "20341 Whitworth Institute 405 N. Whitworth",
        "extendedAddress": "Suite 123"
    }



    return record


}