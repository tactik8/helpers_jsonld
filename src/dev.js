import { _h, helpers } from '../src/index.js';
import { _h as h } from '../src/index.js';

function getList(start = 0) {
    // Generate list record
    let l = new h.things.ItemList();
    l.record_id = 'list_' + String(start);
    for (let i = 0 + start; i < 5 + start; i++) {
        let a = new h.things.Action('Action_' + String(i));
        a.setPotential();
        l.add(a);
    }
    for (let i = 5 + start; i < 10 + start; i++) {
        let a = new h.things.Action('Action_' + String(i));
        a.setActive();
        l.add(a);
    }
    for (let i = 10 + start; i < 15 + start; i++) {
        let a = new h.things.Action('Action_' + String(i));
        a.setCompleted();
        l.add(a);
    }
    for (let i = 15 + start; i < 20 + start; i++) {
        let a = new h.things.Action('Action_' + String(i));
        a.setFailed();
        l.add(a);
    }

    let iles = l.itemListElement;

    for (let ile of iles) {
        
        h.setRecordID(ile, 'li_' + ile.item.name)
        let item = ile.item;
        h.setRecordID(item, 'item_' + item.name)
        h.setItem(ile, item)
    }

    l.itemListElement = iles;


    return l;
}

async function test1() {
    
    let base_url = 'https://db.tactik8.com/api'
    let databaseID = 'bronzeV1'
    let tenantID = 'stash'

    let record_id = 'https://stash.tactik8.com/scenes/330#video'

    let apiDB = new _h.ApiDB(base_url, databaseID, tenantID)

    let r1 = await apiDB.get(record_id)
    console.log('r1', r1)



    let r2 = await apiDB.search({})
    console.log('r2', r2)


    let record_ids = r2.itemListElement.map(x => _h.record_id(h.getItem(x)))
    
    console.log('rr', record_ids)

    let f = {'@id': record_ids.slice(0, 3)}


}
//test1();


async function test2(){

    
    let r = {
  "@context": "https://schema.org/",
  "@type": "Thing",
  "@id": "https://www.test.com/thing1#thing",
  "name": "thing1",
  "url": "https://www.test.com/thing1",
  "image":  {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "@id": "https://www.test.com/imageobject1#imageobject",
    "name": "image_1",
    "contentUrl": "https://placehold.co/600x400"
  }
}


    let db = new _h.dph.DatapointDB()

    db.metadata.confidence = 0.3
    db.metadata.sourceID = "https://www.test.com/system1#webapi"
    db.metadata.tableID = "https://www.test.com/system1/table1"

    db.add(r)

    db.metadata.confidence =  0.5
    db.addValue('https://www.test.com/thing1#thing', 'image.name', 'bob4', 'https://www.tes.tcom/system1/table1/record3', '2020-02-01')

    db.metadata.confidence =  0.4
    db.addValue('https://www.test.com/thing1#thing', 'image.name', 'bob3', 'https://www.tes.tcom/system1/table1/record3', '2022-02-01')


    let n = db.getValues('https://www.test.com/thing1#thing', 'image[1].name')

    console.log(n)

    console.log(db.records)

    console.log(db.toString())

}

test2()