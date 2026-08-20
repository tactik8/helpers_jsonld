


import { _h } from '../src/index.js'


function test() {

    let l = _h.records.ItemList(10)


    let item = _h.getValue(l, 'itemListElement[4].item')
    console.log('i', item)

    item = _h.setValue(item, 'name', 'NEW NAME')


    l = _h.things.ItemList.upsert(l, item)

    let records = _h.getValues(l, 'itemListElement')
    for(let r of records){
        console.log(_h.getValue(r, 'position'), _h.getValue(r, 'item.name'))
    }
    
}

test()



