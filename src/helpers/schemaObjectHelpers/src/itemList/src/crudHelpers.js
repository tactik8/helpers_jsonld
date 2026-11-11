import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';
import * as listItem from '../../listItem/listItem.js';

import * as p from '../propertyHelpers.js';

/**
 *
 * @param {ItemList} record
 * @param {ListItem | Thing} newItem
 * @param {*} position
 * @returns {ItemList}
 */
export function insert(record, newItem, position) {
    let items = p.getItemListElement(record);

    newItem = listItem.toListItem(newItem, position);

    let indexPrevious = items.indexOf(
        (x) => Number(h.getValue(x, 'position')) == position - 1,
    );
    let indexNext = items.indexOf(
        (x) => Number(h.getValue(x, 'position')) == position + 1,
    );

    items[indexPrevious] = h.setValue(
        items[indexPrevious],
        'nextItem',
        h.ref(newItem),
    );
    newItem = h.setValue(newItem, 'previousItem', h.ref(items[indexPrevious]));

    items[indexNext] = h.setValue(
        items[indexNext],
        'previousItem',
        h.ref(newItem),
    );
    newItem = h.setValue(newItem, 'nextItem', h.ref(items[indexNext]));

    for (let i = 0; i < items.length; i++) {
        let p = Number(h.getValue(items[i], 'position') || 0);
        p = isNaN(p) ? 0 : i;

        if (p >= position) {
            items[i] = h.setValue(items[i], 'position', p + 1);
        }
    }

    // Add to array and sort
    items.push(newItem);
    items.sort(
        (a, b) =>
            Number(h.getValue(a, 'position')) -
            Number(h.getValue(b, 'position')),
    );

    //
    record = p.setItemListElement(record, items);

    return record;
}

/**
 *
 * @param {ItemList} itemList
 * @param {ListItem | Thing} listItem
 * @returns {ItemList}
 */
export function prepend(record, listItem) {
    let items = p.getItemListElement(record);
    let minPosition = Math.min(items.map((x) => listItem.getPosition(x) ?? 0));

    return insert(record, listItem, minPosition);
}

/**
 *
 * @param {ItemList} itemList
 * @param {ListItem | Thing} listItem
 * @returns {ItemList}
 */
export function append(record, listItem) {
    let items = p.getItemListElement(record);
    let maxPosition = Math.max(items.map((x) => listItem.getPosition(x) ?? 0));

    maxPosition =
        maxPosition > items.length - 1 ? maxPosition : items.length - 1;

    return insert(record, listItem, maxPosition + 1);
}

export function moveUp(record, listItem) {
    let items = p.getItemListElement(record);

    let item = listItem.find(items, listItem);

    if (!item) {
        return record;
    }

    let position = h.getValue(item, 'position');

    // If position 0, impossible to move up
    if (position === undefined || position === 0) {
        return record;
    }

    let newPosition = position - 1;

    return insert(record, item, newPosition);
}

export function moveDown(record, listItem) {
    let items = p.getItemListElement(record);

    let item = listItem.find(items, listItem);
    if (!item) {
        return record;
    }

    let maxPosition = Math.max(items.map((x) => listItem.getPosition(x) ?? 0));
    maxPosition =
        maxPosition > items.length - 1 ? maxPosition : items.length - 1;

    let position = listItem.getPosition(item);

    // If position max, impossible to move down
    if (position === undefined || position >= maxPosition) {
        return record;
    }

    let newPosition = position + 1;

    return insert(record, item, newPosition);
}

/**
 * Creates a copy with same item
 * @param {*} record
 * @param {*} listItem
 * @returns {ItemList} The modified ItemList
 */
export function duplicate(record, listItemRef) {
    let items = h.getValues(record, 'itemListElement');

    let listItemRecord = listItem.find(items, listItemRef);

    if (!listItemRecord) {
        return record;
    }

    let position = Number(h.getValue(listItemRecord, 'position') || 0);

    let item = listItem.getItem(item);

    return insert(record, item, position + 1);
}

export function insertBefore(record, item, itemRef) {
    let items = h.getValues(record, 'itemListElement');
    let listItemRecord = listItem.find(items, itemRef);

    if (!listItemRecord) {
        return prepend(record, item);
    }

    let position = listItem.getPosition(listItemRecord);

    if (isNaN(position)) {
        return prepend(record, item);
    }

    return insert(record, item, position);
}

export function insertAfter(record, item, itemRef) {
    let items = h.getValues(record, 'itemListElement');
    let listItemRecord = listItem.find(items, itemRef);

    if (!listItemRecord) {
        return append(record, item);
    }

    let position = listItem.getPosition(listItemRecord);

    if (isNaN(position)) {
        return append(record, item);
    }

    return insert(record, item, position + 1);
}

/**
 * Remove all listItems and listItems with item with same id
 * @param {ItemList} record
 * @param {ListItem | Thing} listItem
 * @returns {ItemList}
 */
export function remove(record, listItemRef) {
    let items = h.getValues(record, 'itemListElement');

    let itemToRemove = listItem.find(items, listItemRef);

    let record_id = h.record_id(itemToRemove);

    // Remove items from list
    items = items.filter((x) => h.record_id(x) !== record_id);

    // Process
    let r = itemToRemove;
    let position = listItem.getPosition(r);

    let indexPrevious = items.indexOf(
        (x) => Number(h.getValue(x, 'position')) == position - 1,
    );
    let indexNext = items.indexOf(
        (x) => Number(h.getValue(x, 'position')) == position + 1,
    );

    items[indexPrevious] = h.setValue(
        items[indexPrevious],
        'nextItem',
        h.ref(items[indexNext]),
    );
    items[indexNext] = h.setValue(
        items[indexNext],
        'previousItem',
        h.ref(items[indexPrevious]),
    );

    // Decrement positions
    for (let i = 0; i < items.length; i++) {
        let p = listItem.getPosition(items[i]) ?? 0;
        if (p > position) {
            items[i] = listItem.setPosition(items[i], p - 1);
        }
    }

    record = h.setValues(record, 'itemListElement', items);

    return record;
}

export function move(record, item, position) {
    return insert(record, item, position);
}

export function moveBefore(record, item, itemRef) {
    return insertBefore(record, item, itemRef);
}

export function moveAfter(record, item, itemRef) {
    return insertAfter(record, item, itemRef);
}

export function add(record, item) {
    return append(record, item);
}
