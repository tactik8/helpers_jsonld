import { h } from '/jsonldCore.js';
import * as eh from '../libraries/src/elementHelpers.js';

let DRAGGABLE_WORKSPACE_CLASS = 'dragworkspace';
let DRAGGABLE_CLASS = 'draggable';
let DRAGGING_CLASS = 'dragging';
let SELECTABLE_CLASS = 'selectable';
let SELECTED_CLASS = 'selected';
let ACTIVABLE_CLASS = 'activable';
let ACTIVE_CLASS = 'active';

let elementDBs = {};

export function getElementDB(namespace) {
    let db = elementDBs?.[namespace];
    if (!db) {
        db = new ElementDB(namespace);
    }
    return db;
}

export function setElementDB(namespace, db) {
    elementDBs[namespace] = db;
}

export class ElementDB {
    constructor(namespace) {
        this._db = {};
        this._namespace = namespace;
        setElementDB(namespace, this);
    }

    add(element) {
        return this.set(element);
    }

    getElementsByRecordID(record_id) {
        record_id = h.record_id(record_id) || record_id;
        return this.getAll().filter(
            (x) => eh.record_id(x.element) == record_id,
        );
    }

    get(elementID) {
        elementID = getID(elementID);
        return this._db?.[elementID];
    }

    getAll() {
        return this._db.values();
    }

    set(element) {
        this._db[getID(element)] = element;
    }

    getElementsByState(value) {
        return this.getAll().filter((x) => x.classList.contains(value));
    }

    setClass(element, value) {
        if (h.isArray(element)) {
            return element.map((x) => this.setClass(x, value));
        }

        let ed = this.createIfMissing(element);
        ed.classList.add(value);
    }

    unsetClass(element, value) {
        if (h.isArray(element)) {
            return element.map((x) => this.unsetClass(x, value));
        }

        let ed = this.createIfMissing(element);
        ed.classList.remove(value);
    }

    toggleClass(element, value) {
        if (h.isArray(element)) {
            return element.map((x) => this.toggleClass(x, value));
        }

        let e = this.createIfMissing(element);
        if (e.classList.contains(value)) {
            e.classList.remove(value);
        } else {
            e.classList.add(value);
        }
    }

    getDragging() {
        return this.getElementsByState(DRAGGING_CLASS);
    }
    setDragging(element) {
        return this.setClass(element, DRAGGING_CLASS);
    }
    unsetDragging(element) {
        return this.unsetClass(element, DRAGGING_CLASS);
    }
    unsetAllDragging(element) {
        return this.unsetClass(this.getAll(), DRAGGING_CLASS);
    }

    getSelected() {
        return this.getElementsByState(SELECTED_CLASS);
    }
    setSelected(element) {
        return this.setClass(element, SELECTED_CLASS);
    }
    unsetSelected(element) {
        return this.unsetClass(element, SELECTED_CLASS);
    }
    unsetAllSelected(element) {
        return this.unsetClass(this.getAll(), SELECTED_CLASS);
    }

    createIfMissing(value) {
        if (h.isArray(value)) {
            return value.map((x) => this.createIfMissing(v));
        }

        let v = this.get(value);
        if (!v) {
            this.add(value);
            v = this.get(value);
        }

        return v;
    }

    getChilds(container) {
        let containerID = getID(container);
        return this.getAll().filter(x.containerID == containerID);
    }
}

function getID(element) {
    element = ensureID(element);
    if (typeof element == 'string') {
        return element;
    } else {
        return element.id;
    }
}
function ensureID(element) {
    if (element instanceof Element) {
        element.id = element?.id || h.randomUUID();
    }
    return element;
}
