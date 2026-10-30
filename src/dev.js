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
test1();
