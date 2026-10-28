import { db } from '../../recordsDB/recordsDB.js';
import { h } from '/jsonldCore.js';
import * as eh from '../../libraries/src/elementHelpers.js';

let BASE_URL = 'http://localhost:3021/';

// Create a class for the element
export class BaseElement extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.listenerRecordID;
        this.previousRecord;
        this.oldRecord;
        this.childrenTemplate = '';
        this.boundProcessListeners = this.processListeners.bind(this);
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

    get record_type() {
        return h.record_type(this.record);
    }

    get record_id() {
        return this.dataset.id;
    }

    set record_id(value) {
        this.dataset.id = value;
        this.setListeners();
    }

    get propertyID() {
        return eh.getPropertyID(this);
    }

    set propertyID(value) {
        return eh.setPropertyID(this, value);
    }

    get propertyValue() {
        return eh.getPropertyValue(this);
    }

    set propertyValue(value) {
        return eh.setPropertyValue(this, value);
    }

    get filter() {
        return eh.getFilter(this);
    }

    set filter(value) {
        return eh.setFilter(this, value);
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

    // ------------------------------------------------------------
    // Status
    // ------------------------------------------------------------
    // Selected
    isSelected() {
        return eh.isSelected(this);
    }

    setSelected(value) {
        return eh.setSelected(this);
    }

    toggleSelected() {
        this.ariaSelected = this.ariaSelected == 'true' ? 'false' : 'true';
    }

    //
    connectedCallback() {
        this.id = this?.id || 'element-' + h.randomUUID();
        this.initTemplate();
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
        if (this.listenerRecordID == this.record_id) return;
        this.removeListeners();
        if (this.record_id) {
            db.subscribe(this.record_id, this.boundProcessListeners);
            this.listenerRecordID = this.record_id;
        }
    }

    removeListeners() {
        if (this.listenerRecordID) {
            db.unsubscribe(this.listenerRecordID, this.boundProcessListeners);
            this.listenerRecordID = undefined;
        }
    }
    processListeners(value) {
        if (h.isEqual(this.record, this.oldRecord) == true) {
            return;
        }

        this.oldRecord = this.record;

        this.asyncRender();
    }

    async asyncRender() {
        this.render();
    }

    /**
     * Render html for this element
     */
    render() {}

    initTemplate() {
        let template = this.innerHTML || '';
        template = template.split('<template>')?.[1] || template;
        template = template.split('</template>')?.[0] || template;
        template = template.trim();
        if (template) {
            this.childrenTemplate = template;
        }
        // this.innerHTML = '';
    }
}

customElements.define('base-element', BaseElement);
