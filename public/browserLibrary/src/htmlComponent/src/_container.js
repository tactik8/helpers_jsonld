import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
import * as eh from '../../libraries/src/elementHelpers.js';
import { libraries } from '../../libraries/libraries.js';

let BASE_URL = 'http://localhost:3021/';

export class BaseContainer extends BaseElement {
    constructor() {
        super();
        this.flags = {};
    }

    // ------------------------------------------------------------
    // Parent / Children Getters
    // ------------------------------------------------------------

    get workspaceElement() {
        return eh.closest(this, 'kr-workspace') || this.closest('kr-workspace');
    }

    get workspaceRef() {
        return eh.getRef(this.workspaceElement);
    }

    get itemElements() {
        return eh.querySelectorAllDeep(this, 'kr-item');
    }

    get itemRefs() {
        return this.itemElements.map(x => eh.getRef(x));
    }

    get selectableItemElements() {
        return this.itemElements.filter(x => eh.isSelectable(x));
    }

    get selectableItemRefs() {
        return this.selectableItemElements.map(x => eh.getRef(x));
    }

    get selectedItemElements() {
        return this.itemElements.filter(x => eh.isSelected(x));
    }

    get selectedItemRefs() {
        return this.selectedItemElements.map(x => eh.getRef(x));
    }

    get draggableItemElements() {
        return this.itemElements.filter(x => eh.isDraggable(x));
    }

    get draggableItemRefs() {
        return this.draggableItemElements.map(x => eh.getRef(x));
    }

    get draggingItemElements() {
        return this.itemElements.filter(x => eh.isDragging(x));
    }

    get draggingItemRefs() {
        return this.draggingItemElements.map(x => eh.getRef(x));
    }

    // ------------------------------------------------------------
    // Actions
    // ------------------------------------------------------------

    setSelectedAll() {
        eh.setSelected(this.selectedItemElements);
    }

    get itemListElement() {
        let filter = {};
        if (this.dataset.propertyId && this.dataset.propertyValue) {
            filter[this.dataset.propertyId] = this.dataset.propertyValue;
        }

        return h.list.filter(this.record, filter) || [];
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------

    render() {
        // Guard: ensure template is populated
        if (!this.childrenTemplate) {
            this.initTemplate();
            if (!this.childrenTemplate) {
                const tmpl = this.querySelector('template');
                if (tmpl) this.childrenTemplate = tmpl.innerHTML.trim();
            }
        }

        let listItems = this.itemListElement;

        // Delete elements removed (skip <template>)
        let children = [...this.children].filter(c => c.tagName !== 'TEMPLATE');
        for (let c of children) {
            let record = listItems.find((x) => h.record_id(x) == c.dataset.id);
            if (!record) {
                this.removeChild(c);
            }
        }

        // Add / reorder elements
        children = [...this.children].filter(c => c.tagName !== 'TEMPLATE');
        let current = undefined;

        for (let r of listItems) {
            let item = h.getItem(r);
            let e = children.find((x) => x.dataset.id == h.record_id(r));

            if (!e) {
                e = document.createElement('kr-item');
                e.innerHTML = this.childrenTemplate;
                e.dataset.id = h.record_id(r);

                let subChildren = [...e.children];
                subChildren.forEach((x) => (x.dataset.id = h.record_id(item)));
            }

            if (!current) {
                this.prepend(e);
            } else {
                current.after(e);
            }
            current = e;
        }

        if (libraries?.dropzoneReorder?.initDropzone) {
            libraries.dropzoneReorder.initDropzone(this);
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add('container');
    }
}

customElements.define('kr-container', BaseContainer);