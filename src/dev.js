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

function test1() {
    let recordsDB = new _h.DB();
    let db = recordsDB;

    // Generate list record
    let l1 = getList(200);
    
    recordsDB.set(l1.record);

    //
    let l2 = getList(200);
    recordsDB.set(l2.record);

    let actions = [
    {
        "@type": "UpdateAction",
        "@id": "c0fede50-16a7-465c-9aa2-de12c6b5b187",
        "object": {
            "@type": "PropertyValue",
            "@id": "f9a8b0bf-c3b9-4967-8e9e-47f6915f20c1",
            "propertyID": "item.actionStatus",
            "value": "ActiveActionStatus"
        },
        "targetCollection": {
            "@id": "li_Action_200"
        },
        "actionStatus": "PotentialActionStatus"
    },
    {
        "@type": "InsertBeforeAction",
        "@id": "ce33409c-8ead-4d33-bc92-c1ea04b3ce90",
        "targetCollection": {
            "@id": "list_200"
        },
        "object": {
            "@id": "li_Action_201"
        },
        "toLocation": {
            "@id": "li_Action_200"
        }
    }
]
    db.execute(actions);

    l1 = db.get(l1);
    l2 = db.get(l2);

    console.log(l1.itemListElement[1].item);
}
test1();
