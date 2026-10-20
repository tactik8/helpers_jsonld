import { records } from '../records.js'

export function getProduct(name = 0) {


    let record_type = "Product"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "name": name,
        "description": "Product description",
        "gtin": "5901234123457",
        "mpn": "mpn_id_" + name,
        "sku": "sku_id_" + name,
        "category": "Category 1",
    }



    return record


}