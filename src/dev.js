

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



    let l = helpers.records.ItemList(5)

    let i = l.itemListElement[0]

    let items 


    items = l.itemListElement.map(x => x.position + " - " + x.item.name)

    console.log(items)
    


    l = helpers.things.ItemList.moveDown(l, i)

    items = l.itemListElement.map(x => x.position + " - " + x.item.name)

    console.log(items)

    return

    let l2 = {
        "@type": "ItemList",
        "@id": "https://www.test.com/listRecord3"
    }

    let r = {
        "@type": "WebPage",
        "@id": "https://www.test.com/page1",
        "url": "https://www.test.com/page1"
    }

    l2 = helpers.things.ItemList.append(l, r)


    console.log(l2.itemListElement.length)

   l2 = helpers.things.ItemList.duplicate(l, r)

    console.log(l2.itemListElement.length)

}


test2()