import { _h } from '../../index.js'




describe('ItemList', () => {
  describe('base', () => {
    it('add to empty list', () => {
      
        let l = getEmptyItemList()
        let i = getThing(0)
        l == _h.things.ItemList.upsert(l,i)
        expect(_h.getValue(l, 'numberOfItems') == 1)

        l == _h.things.ItemList.append(l,i)
        expect(_h.getValue(l, 'numberOfItems') == 2)

        l == _h.things.ItemList.upsert(l,i)
        expect(_h.getValue(l, 'numberOfItems') == 2)

    });


    
  });
});


function getEmptyItemList(){

    return {
        "@type": "ItemList",
        "@id": "someID",
        "itemListElement": [],
        "numberOfItems": 0
    }
}

function getThing(no){
    return {
        "@type": "Thing",
        "@id": "thing_" + String(no) + "#thing",
        "name": "thing_" + String(no),
    }
}