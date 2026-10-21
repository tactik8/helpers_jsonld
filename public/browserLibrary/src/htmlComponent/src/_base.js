import { db } from '../../recordsDB/recordsDB.js';
import { h } from '/jsonldCore.js';

let BASE_URL = 'http://localhost:3021/';

// Create a class for the element
export class BaseElement extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.listenerRecordID;
        this.previousRecord;
        this.oldRecord;
    }

    get ref() {
        return { '@id': this.record_id };
    }

    set ref(value) {
        this.record_id = value?.['@id'];
    }

    /**
     * return true if shares the same record_id
     * @returns
     */
    isSame(value) {

        if (!this?.record_id) {
            return false;
        }

        if (value instanceof Element) {
            return value?.record_id == this.record_id;
        }

        let result = h.record_id(value) == this.record_id;

        return result;
    }

    get record() {
        if (this.record_id) {
            return db.get(this.record_id);
        } else {
            return undefined;
        }
    }

    set record(value) {
        let record_id = h.record_id(value);
        if (record_id) {
            db.set(value);
            if (this.record_id != record_id) {
                this.record_id = record_id;
            }
        }
        this.setListeners();
    }

    get record_id() {
        return this.dataset.recordId;
    }

    set record_id(value) {
        this.dataset.recordId = value;
        this.setListeners();
    }

    get propertyID() {
        return this.dataset.propertyId;
    }

    set propertyID(value) {
        return (this.dataset.propertyId = value);
    }

    // Element at the top in charge of the childs. An id that groups elements in a group.
    get controllerID() {
        return this.dataset.controllerId;
    }

    set controllerID(value) {
        this.dataset.controllerId = value;
    }

    get controller() {
        return document.getElementById(this.controllerID);
    }

    // Aris Selected
    get selected() {
        return this.ariaSelected === 'true';
    }

    set selected(value) {
        this.ariaSelected = value ? 'true' : 'false';
    }

    toggleSelected() {
        this.ariaSelected = this.ariaSelected == 'true' ? 'false' : 'true';
    }

    //
    connectedCallback() {
        this.id = this?.id || 'element-' + h.randomUUID();
        this.setListeners();
        this.render();
    }

    disconnectedCallback() {
        this.removeListeners();
    }

    connectedMoveCallback() {
        console.log('Custom element moved with moveBefore()');
    }

    adoptedCallback() {
        console.log('Custom element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    setListeners() {
        // Return if already set
        if (this.listenerRecordID == this.record_id) {
            return;
        }

        // Remove current listener
        this.removeListeners(this.listenerRecordID);

        // Set new listener
        if (this.record_id) {
            db.subscribe(this.record_id, this.processListeners.bind(this));
            this.listenerRecordID = this.record_id;
        }
    }

    removeListeners() {
        if (this.record_id) {
            db.unsubscribe(this.record_id, this.processListeners.bind(this));
            this.listenerRecordID = undefined;
        }
    }

    processListeners(value) {
        if (h.isEqual(this.record, this.oldRecord) == true) {
            return;
        }

        this.oldRecord = this.record;

        this.render();
    }

    /**
     * Render html for this element
     */
    render() {}
}

customElements.define('base-element', BaseElement);
