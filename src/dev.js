

import { _h } from './index.js'


function test(){

    
    
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

    for(let v of p.hasVariant){
        if(!v){
            continue
        }
        v.addOffer(122.1, 'CAD')
    }

    console.log(p.toString())


    let i = _h.records.itemList()
    console.log(i)
}

test()