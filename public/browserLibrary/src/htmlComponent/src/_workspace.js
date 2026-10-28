import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
import * as eh from '../../libraries/src/elementHelpers.js';

let BASE_URL = 'http://localhost:3021/';

export class Workspace extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.init = false;
        this.flags = {};
    }


    initListeners() {
        if (this.init == true) {
            return;
        }

        this.init = true;
    }

    // ------------------------------------------------------------
    // Children
    // ------------------------------------------------------------

    get containerElements() {
        return eh.querySelectorAllDeep(this, 'kr-container');
    }
    get containerRefs() {
        return eh
            .querySelectorAllDeep(this, 'kr-container')
            .map((x) => eh.getRef(x));
    }

    get itemElements() {
        return eh.querySelectorAllDeep(this, 'kr-item');
    }
    get itemRefs() {
        return eh
            .querySelectorAllDeep(this, 'kr-item')
            .map((x) => eh.getRef(x));
    }

    // --------------------------------------------------------------
    // Select
    // --------------------------------------------------------------

    get selectableItemElements() {
        return this.itemElements.filter((x) => eh.isSelectable(x));
    }
    get selectableItemRefs() {
        return this.itemElements
            .filter((x) => eh.isSelectable(x))
            .map((x) => eh.getRef(x));
    }

    // Selected
    get selectedItemElements() {
        return this.itemElements.filter((x) => eh.isSelected(x));
    }
    get selectedItemRefs() {
        return this.itemElements
            .filter((x) => eh.isSelected(x))
            .map((x) => eh.getRef(x));
    }

    setSelectedAll() {
        eh.setSelected(eh.getSelectableElements(this));
    }

    unsetSelectedAll() {
        eh.unsetSelected(eh.getSelectableElements(this));
    }

    // Draggable
    get draggableItemElements() {
        return eh.getDraggableElement(this)
    }
    get draggableItemRefs() {
        return eh.getDraggableRefs(this)
    }

    // Dragging
    get draggingItemElements() {
        return eh.getDraggingElements(this) 
    }
    get draggingItemRefs() {
        return eh.getDraggingRefs(this)
    }

    setDraggingAll() {
        eh.setDragging(eh.getDraggableElements(this));
    }

    unsetDraggingAll() {
        eh.unsetDragging(eh.getDraggableElements(this));
    }


    // 
    initSelect() {
        if (this.flags?.initSelect == true) {
            return;
        }
        this.flags.initSelect = true;

        this.initSelectWorkspace();
        this.initSelectItem(eh.getSelectableElements(this));
    }

    initSelectWorkspace() {
        this.addEventListener('click', (e) => {
            e.preventDefault();

            
            let element = e.target.closest('kr-item')
            if (element) {
                eh.toggleSelected(element);
            }
        });
    }

    initSelectItem(element) {
        eh.setSelectable(element);
    }

   
    initDragging() {
        if (this.flags?.initDragging == true) {
            return;
        }
        this.flags.initDragging = true;

        this.initDraggingWorkspace();
        this.initDraggingItem(this.draggableElements);
    }

    initDraggingWorkspace() {
        if (this.initDraggingFlag == true) {
            return;
        }
        this.initDraggingFlag = true;

        this.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        this.addEventListener('drop', (e) => {});
    }

    initDraggingItem(element) {
        if (h.isArray(element)) {
            return element.map((x) => this.initDraggingItem(x));
        }

        if(!element){ return }
        element.draggable = true;
        eh.setDraggable(element);

        element.addEventListener('dragstart', (e) => {
            let element = eh.getDraggableElement(e.target);
            eh.setDragging(element);
            this.selectedElements.forEach((x) => eh.setDragging(x));
        });

        element.addEventListener('dragend', (e) => {
            this.draggableElements.forEach((x) => eh.unsetDragging(x));
        });
    }
    // ------------------------------------------------------------
    // ------------------------------------------------------------
    render(){
        this.initSelect()
        this.initDragging()
        return
    }
}

customElements.define('kr-workspace', Workspace);
