import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

import { listItem } from '../../listItem/listItem.js';
import * as p from './propertyHelpers.js'



export function newRecord(name, itemListElement, numberOfItems) {
    itemListElement = h.toArray(itemListElement);

    itemListElement = itemListElement.map((x, i) => listItem.toListItem(x, i));

    numberOfItems = numberOfItems ?? itemListElement.length;

    let record = {
        '@context': 'https://schema.org/',
        '@type': 'ItemList',
        '@id': h.randomUUID() + '#website',
        name,
        itemListElement,
        numberOfItems,
    };

    return record;
}

export function isItemList(record) {
    return h.record_type(record) == 'ItemList';
}

export function toItemList(record) {
    if (isItemList(record)) {
        return record;
    }
    record = h.toArray(record);
    return newRecord('New ItemList', record);
}

export function length(record) {
    if (!isItemList(record)) {
        return 0;
    }

    return p.getItemListElement(record).length;
}

export function clean(record) {
    record = toItemList(record);

    let items = h.list.getValues(record, 'itemListElement');

    // Clean items
    for (let i = 0; i < items.length; i++) {
        items[i] = listItem.clean(items[i]);
    }

    // sort items
    items = listItem.sort(items);

    // Reposition
    let positions = items.map((x) => listItem.getPosition(x));
    positions = positions.filter((x) => x !== undefined);
    let minPosition = Math.min(positions);
    minPosition = minPosition ?? 0;

    for (let i = 0; i < items.length; i++) {
        let p = listItem.getPosition(items[i]);
        if (p !== minPosition) {
            items[i] = listItem.setPosition(items[i], minPosition);
            minPosition += 1;
        }
    }

    record = h.setValues(record, 'itemListElement', items);

    return record;
}



/**
 * Adds items from list2 to list1
 * @param {*} itemList1
 * @param {*} itemList2
 * @param {boolean} skipDuplicates
 */
export function merge(itemList1, itemList2, skipDuplicates = false) {
    let items1 = h.list.getItems(itemList1);
    let items1RecordID = items1.map((x) => h.record_id(x));

    let items2 = h.list.getItems(itemList1);

    // remove duplicates
    if (skipDuplicates == true) {
        items2 = items2.filter((x) => !items1RecordID.includes(h.record_id(x)));
    }

    itemList1 = h.list.add(itemList1, items2);

    return itemList1;
}
