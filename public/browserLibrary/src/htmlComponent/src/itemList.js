import { BaseElement } from './_base.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
import { ListItem } from './listItem.js';

export class ItemList extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    get containerID() {
        return this.id + '-container';
    }

    get container() {
        return document.getElementById(this.containerID);
    }

    /**
     * Returns the ListItem records
     */
    get itemListElement() {
        let itemListElement = h.list.getItemListElement(this.record);
        itemListElement = h.list.sort(itemListElement);
        return itemListElement;
    }

    /**
     * Returns an item in the list
     * @param {*} reference
     * @returns
     */
    findItem(reference) {
        return h.list.find(this.record, reference);
    }

    /**
     * Returns the refs of the selected records
     */
    getSelectedRefs() {
        const container = this.container;
        let elements = Array.from(
            container.querySelectorAll('[aria-selected="true"]'),
        );
        let refs = elements.map((x) => x.ref);
        return refs;
    }

    getSelectedElements() {
        const container = this.container;
        let elements = Array.from(
            container.querySelectorAll('[aria-selected="true"]'),
        );
        return elements;
    }

    /**
     * Returns the refs of the selected records
     */
    getDraggingRefs() {
        const container = this.container;
        let elements = Array.from(container.querySelectorAll('.dragging'));
        let refs = elements.map((x) => x.ref);
        return refs;
    }

    /**
     * Returns the refs of the selected records
     */
    getDraggingElements() {
        const container = this.container;
        let elements = Array.from(container.querySelectorAll('.dragging'));
        return elements;
    }

    /**
     * Insert an item
     * @param {*} item
     * @param { number} position  position
     */
    insertItem(item, position) {
        if (h.isArray(item)) {
            item.forEach((x) => this.insertItemBefore(x, reference));
            return;
        }

        if (!item) {
            return;
        }
        item = db.get(item);

        let record = this.record;
        record = h.list.insert(record, item, position);
        record.updatedDate = new Date();
        db.set(record);
    }

    /**
     * Insert an item
     * @param {*} item
     * @param {ListItem | item | number} reference item or position
     */
    insertItemAfter(item, reference) {
        if (h.isArray(item)) {
            item.forEach((x) => this.insertItemBefore(x, reference));
            return;
        }

        if (!item) {
            return;
        }
        item = db.get(item);

        let record = this.record;
        record = h.list.insertAfter(record, item, reference);
        record.updatedDate = new Date();
        db.set(record);
    }

    /**
     * Insert an item
     * @param {*} item
     * @param {ListItem | item | number} reference item or position
     */
    insertItemBefore(item, reference) {
        if (h.isArray(item)) {
            item.forEach((x) => this.insertItemBefore(x, reference));
            return;
        }

        if (!item) {
            return;
        }

        

        db.list.insertBefore(this.ref, item, reference)

        this.render()
        return 
        item = db.get(item);

        let record = this.record;
        record = h.list.insertBefore(record, item, reference);
        record.updatedDate = new Date();

        db.set(record);

        console.log('After');
        console.log(h.list.toString(record));
        this.render();
    }

    /**
     * Removes an item
     * @param {ListItem | item | number} reference
     */
    removeItem(reference) {
        let record = this.record;
        record = h.list.remove(record, reference);
        record.updatedDate = new Date();
        db.set(record);
    }

    render() {
        console.log('Rendering ItemList');

        if (!this.container) {
            this.initialRender();
        }

        this.removeDeletedItems();

        this.addMissingItems();

        this.reorderItems();
    }

    initialRender() {
        let nbOfColumns = 1;
        let nbOfColumnsSM = 2;
        let nbOfColumnsLG = 3;
        let nbOfColumnsXL = 4;

        let html = `
        <div>
            <div>
                <kr-mainselector data-controlled-id="${this.id}"></kr-mainselector>
            </div>
            <div id="${this.containerID}" class="grid grid-cols-${nbOfColumns} gap-6 sm:grid-cols-${nbOfColumnsSM} lg:grid-cols-${nbOfColumnsLG} xl:grid-cols-${nbOfColumnsXL}">
            </div>
        </div>
        `;
        this.innerHTML = html;
    }

    removeDeletedItems() {
        let newRecords = this.itemListElement;

        let currentElements = [...this.container.children];

        // Remove items no longer there
        for (let c of currentElements) {
            let r = this.findItem(c.record);
            if (!r) {
                c.remove();
            }
        }
    }

    addMissingItems() {
        let newRecords = this.itemListElement;

        for (let r of newRecords) {
            this.addElement(r);
        }

        return;
    }

    /**
     * Add an element (item) to the list (or reorders)
     * @param {*} record
     * @returns
     */
    addElement(record) {
        let targetPosition = Number(h.getValue(record, 'position'));
        let currentElement = this.getItemElement(record);

        if (!currentElement) {
            currentElement = document.createElement('kr-listitem');
            currentElement.dataset.recordId = h.record_id(record);
            currentElement.dataset.controllerId = this.id;
        }

        // Return if already in right position
        if (currentElement.position == targetPosition) {
            return;
        }

        //
        if (targetPosition == 0) {
            this.container.prepend(currentElement);
            return;
        }

        // Get before element
        let beforeElement = this.getItemElementByPosition(targetPosition - 1);
        if (beforeElement) {
            beforeElement.after(currentElement);
        }
        return;
    }

    /**
     * Puts the items in order
     */
    reorderItems() {
        let elements = [...this.container.children];

        function sortFn(a, b) {
            return a.position - b.position;
        }

        elements.sort((a, b) => sortFn(a, b));

        elements.forEach((x) => this.container.appendChild(x));

        return;
    }

    /**
     * Returns the element in the list with the same record_id
     * @param {*} record
     */
    getItemElement(record) {
        let c = [...this.container.children].find((x) => x.isSame(record));

        return c;
    }

    getItemElementByPosition(position) {
        let c = [...this.container.children]?.[position];

        return c;
    }
}

customElements.define('kr-itemlist', ItemList);
