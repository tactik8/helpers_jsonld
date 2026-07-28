

import { _h, helpers } from './index.js'


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



    let l = {
        "@type": "ItemList",
        "@id": "https://www.test.com/listRecord3"
    }

    let r = {
        "@type": "WebPage",
        "@id": "https://www.test.com/page1",
        "url": "https://www.test.com/page1"
    }

    l = helpers.things.ItemList.append(l, r)


    console.log(l.itemListElement.length)

   l = helpers.things.ItemList.duplicate(l, r)

    console.log(l.itemListElement.length)

}


test2()