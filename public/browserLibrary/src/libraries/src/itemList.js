import { db } from '../../recordsDB/recordsDB.js';
import { h } from '/jsonldCore.js';

import * as eh from './elementHelpers.js';

/**
 * Methods to manage the list of items in a container using ItemList records
 * Allows filtering using filter string
 * Definition:
 *  - container: the element that contains the ListItem elements (itemListElement property)
 *
 */

/**
 * Draws or redraws child elements
 * @param {*} container
 * @param {*} template
 */
export function refresh(container, template) {
    removeMissingItems(container);
    addMissingElement(container, template);
}

/**
 * Draws or redraws child elements
 * @param {*} container
 * @param {*} template
 * @returns
 */
export function render(container, template) {
    return refresh(container, template);
}

/**
 *
 * @param {*} container
 * @returns
 */
export function removeMissingItems(container) {
    //
    container = eh.getContainerElement(container);
    let containerRef = eh.getContainerElement(container);

    // Get itemList record, filter if required
    let itemList = db.get(containerRef);
    let filter = eh.getFilter(container);
    if (filter) {
        itemList = h.list.filter(itemList, filter);
    }

    // Get ListItem Elements
    let listItemElements = eh.getChildElements(container);

    // Remove items if not in itemList
    for (let i of listItemElements) {
        let ref = eh.getRef(i);
        if (!h.list.find(itemList, ref)) {
            i.remove();
        }
    }
    return;
}

export function addMissingElement(container, template) {
    // Add / reorder

    container = eh.getContainerElement(container);
    let containerRef = eh.getRef(container);

    // Get templates
    if (!template) {
        template = eh
            .getChildTemplateElements(container)
            .map((x) => x.innerHTML)
            .join(' ');
    }

    // Get itemList record, filter if required
    let itemList = db.get(containerRef);
    let filter = eh.getFilter(container);
    let listItemRecords = h.list.filter(itemList, filter);

    let previousElement;

    for (let i = 0; i < listItemRecords.length; i++) {
        let listItemRecord = db.get(listItemRecords[i]);

        let e = eh.getChildElement(container, listItemRecord);

        // Create if not exist
        if (!e) {
            e = document.createElement('kr-container-item');
            e.innerHTML = template;
            e.dataset.id = h.record_id(listItemRecord);

            // Set item id to all elements in children
            let item = h.list.getItem(listItemRecord);
            for (let ee of [...e.children]) {
                ee.dataset.id = h.record_id(item);
            }
        }

        // Add to container / reorder
        if (i == 0) {
            container.prepend(e);
        } else {
            previousElement.after(e);
        }
        previousElement = e;
    }
}
