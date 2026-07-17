

import { _h } from './index.js'


function test() {



    let p = new _h.things.ProductGroup()

    p.name = "Some awesome product"
    p.url = "https://www.someurl.com/product1"
    p.record_id = "https://www.someurl.com/product1#productgroup"
    p.model = "model 1"


    let variants = {
        "size": ['small', 'medium', 'large'],
        'color': ['red', 'blue', 'black'],
        'kickassProperty': ['leather', 'fabric']
    }

    p.generateVariants(variants)

    for (let v of p.hasVariant) {
        if (!v) {
            continue
        }
        v.addOffer(122.1, 'CAD')
    }

    console.log(p.toString())


    let i = _h.records.itemList()
    console.log(i)
}

function test2() {

    let record1 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1",
        "name": "thing1",
        "other": [
            {
           
                    "@type": "Thing",
                    "@id": "https://www.test.com/thing2",
                    "name": "thing2",
                   
            }
        ]

    }
    let record2 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1",
        "name": "thing1",
        "other": [
            {
           
                    "@type": "Thing",
                    "@id": "https://www.test.com/thing2",
                    "name": "thing3",
                   
            }
        ]

    }

    let db = new _h.DB()
    db.set(record1)

    let r1 = db.getValue(record1?.['@id'], 'name', 0)
    db.setValue(record1?.['@id'], 'name', 'bob', 0)
    let r2 = db.getValue(record1?.['@id'], 'name', 0)

    console.log('ss', r1, r2)

}


test2()