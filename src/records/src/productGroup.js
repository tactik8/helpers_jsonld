import { records } from '../records.js'

export function getProductGroup(name = 0) {


    let record_type = "ProductGroup"
    if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/" + name + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "name": name,
        "productGroupID": `A ${name} product group`,
        "variesBy": ["color", "size"],
        "hasVariant": []
    }

    for (let size of ['small', "medium", 'large']) {

        for (let color of ['blue', 'white', 'red']) {

            let product = records.product(`variant ${size} ${color}`)
            product.size = size
            product.color = color
            product.isVariantOf = {"@id": record?.['@id']}
            record.hasVariant.push(product)
        }

    }

    return record

}