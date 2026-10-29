import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js';

import { Thing } from './thing.js';

export class ItemList extends Thing {
    constructor(name_or_record_or_items) {
        super();
        this._defaultRecordType = 'ItemList';

        this._loadRecord(name_or_record_or_items);
        this._setValueIfString('name', name_or_record_or_items);

        for (let r of h.toArray(name_or_record_or_items)) {
            if (h.record_type(r) !== 'ItemList') {
                this.add(r);
            }
        }
    }

    toString() {
        h.list.toString(this.record)
    }

    get itemListElement() {
        return h.list.getItemListElement(this.record)
    }

    set itemListElement(value) {
        this.record = h.list.setItemListElement(this.record, value)
    }

    get items() {
        return h.list.getItems(this.record)
    }

    set items(value) {
        return this.add(value);
    }

    length() {
        return this.itemListElement.length;
    }

    prepend(item) {
        this.record = h.list.insert(this.record, item, 0);
    }
    append(item) {
        this.record = h.list.append(this.record, item);
    }
    add(item) {
        this.record = h.list.append(this.record, item);
    }
    insert(item, position) {
        this.record = h.list.insert(this.record, item, position);
    }
    delete(position) {
        this.record = h.list.remove(this.record, position);
    }
    replace(replacer, replacee) {
        this.record = h.list.replace(this.record, replacer, replacee);
    }
    move(item, position) {
        this.record = h.list.move(this.record, item, position);
    }

    moveUp(item) {
        this.record = h.list.moveUp(this.record, item);
    }

    moveDown(item) {
        this.record = h.list.moveDown(this.record, item);
    }

    upsert(item) {
        this.record = h.list.upsert(this.record, item);
    }

    // static

    static clean(record) {
        return h.list.clean(record);
    }

    static length(record) {
        return h.list.length(record);
    }

    static getItem(record, item) {
        return h.list.getItem(record, item);
    }

    static prepend(record, item) {
        return h.list.insert(record, item, 0);
    }
    static append(record, item) {
        return h.list.append(record, item);
    }
    static add(record, item) {
        return h.list.insert(record, item, getLength(record));
    }
    static insert(record, item, position) {
        return h.list.insert(record, item, position);
    }
    static delete(record, id_or_position) {
        return h.list.remove(record, id_or_position);
    }
    static replace(record, replacer, replacee) {
        return h.list.replace(record, replacer, replacee);
    }

    static move(record, item, position) {
        return h.list.move(record, item, position);
    }

    static moveUp(record, item) {
        return h.list.moveUp(record, item);
    }

    static moveDown(record, item) {
        return h.list.moveDown(record, item);
    }

    static moveBefore(record, itemToMove, item) {
        return h.list.moveBefore(record, itemToMove, item);
    }

    static moveAfter(record, itemToMove, item) {
        return h.list.moveAfter(record, itemToMove, item);
    }

    static upsert(record, item) {
        return h.list.upsert(record, item);
    }

    static duplicate(record, item) {
        return duplicateItem(record, item);
    }

    static search(record, filter, limit, offset, orderBy, orderDirection) {
        return search(record, filter, limit, offset, orderBy, orderDirection);
    }
}
