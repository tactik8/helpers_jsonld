


import { _h } from '../src/index.js'


function test() {




    let l = _h.records.ItemList(10)


    let filter = {'item.@type': "Thing2"}
    let items = _h.things.ItemList.search(l, filter, 2, 2, 'item.name', 1)

    console.log('i', _h.toString(items))
    
    



}

test()



