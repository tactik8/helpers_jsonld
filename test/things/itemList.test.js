
import  { _h } from '../../src/index.js';



describe('itemList', () => {
  

  test('itemlist basics', async () => {
    

    let itemList = {
        "@type": "ItemList",
        "@id": "https://www.test.com/itemlsit1",
        "itemListElement": []
    }
    

    expect (_h.things.ItemList.length(itemList)).toBe(0)


    let item = {
        "@type": "Thing",
        "@id": "https://www.tets.com/thing1",
        "name": "thing1"
    }

    itemList = _h.things.ItemList.append(itemList, item)

    expect (_h.things.ItemList.length(itemList)).toBe(1)

  });

 
  
});

