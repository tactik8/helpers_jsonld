import { _h, helpers } from '../src/index.js';

async function test4() {
   


    let l = new _h.things.ItemList()

    for(let i =0; i< 5; i++ ){

        l.add((new _h.things.Thing('thing_' + String(i))).record)
    }

    console.log('d', JSON.stringify(l.record, null, 4))


    let r = l.record

    let a = l.itemListElement[0].record
    let b = l.itemListElement[3].record
    

    r = _h.things.ItemList.moveBefore(r, a, b)

    console.log('d', JSON.stringify(l.record, null, 4))


}

test4();
