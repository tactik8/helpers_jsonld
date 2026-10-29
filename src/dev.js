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
        ile.record_id = 'li_' + ile.item.name;
        let item = ile.item;
        item.record_id = 'item_' + item.name;
        ile.item = item;
    }

    l.itemListElement = iles;


    return l;
}

function test1() {
    let recordsDB = new _h.DB();
    let db = recordsDB;

    // Generate list record
    let l1 = getList(0);
    
    recordsDB.set(l1);

    //
    let l2 = getList(100);
    recordsDB.set(l2);

    let actions = [
        {
            '@type': 'UpdateAction',
            '@id': '4064d3d3-e880-42e6-b1da-ded5ed71b080',
            object: {
                '@id': '25bd681d-c5af-45c9-98ba-1b25c5f974f3',
                'item.actionStatus': 'ActiveActionStatus',
            },
            actionStatus: 'PotentialActionStatus',
        },
        {
            '@type': 'InsertBeforeAction',
            '@id': '96bbfb02-3509-46b6-927e-c1fa13331df9',
            targetCollection: {
                '@id': '_:a7c6b2f0-c2a1-450c-9f19-e412331cedf6',
            },
            object: {
                '@id': '25bd681d-c5af-45c9-98ba-1b25c5f974f3',
            },
            toLocation: {
                '@id': 'a135482d-dbc7-4fd3-a7f6-566c74474c51',
            },
        },
    ];

    db.execute(actions);

    l1 = db.get(record1);
    l2 = db.get(record2);

    console.log(l1.itemListElement[0]);
}
test1();
