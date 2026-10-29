import { _h, helpers } from '../src/index.js';
import { _h as h } from '../src/index.js';

function getList(start = 0) {
    // Generate list record
    let l = new h.things.ItemList();
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

    return l;
}

function test1() {
    let recordsDB = new _h.DB();
    let db = recordsDB

    // Generate list record
    let l1 = getList(0);
    let record1 = l1.record;
    record1['@id'] = 'itemList1';
    record1.itemListElement.forEach((x) => (x['@id'] = 'li_' + x.item.name));
    record1.itemListElement.forEach(
        (x) => (x.item['@id'] = 'item_' + x.item.name),
    );

    recordsDB.set(record1);

    //
    let l2 = getList(100);
    let record2 = l2.record;
    record2['@id'] = 'itemList2';

    record2.itemListElement.forEach((x) => (x['@id'] = 'li_' + x.item.name));
    record2.itemListElement.forEach(
        (x) => (x.item['@id'] = 'item_' + x.item.name),
    );

    recordsDB.set(record2);

    let actions = [
        {
            '@type': 'InsertBeforeAction',
            '@id': '69782e96-c978-436d-822a-4de61102a347',
            targetCollection: {
                '@id': 'itemList1',
            },
            object: {
                '@id': 'li_Action_0',
            },
            toLocation: {
                '@id': 'li_Action_0',
            },
        },
    ];

    db.execute(actions);
}
test1();
