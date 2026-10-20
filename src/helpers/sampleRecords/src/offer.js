import { records } from '../records.js'

export function getOffer(name = 0) {


    let record_type = "Offer"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "name": name,
        "availability": "https://schema.org/InStock",
        "itemOffered": records.product(name + '_item'),
        "price": "55.00",
        "priceCurrency": "CAD",
        "seller": records.organization('org_a')
    }



    return record


}