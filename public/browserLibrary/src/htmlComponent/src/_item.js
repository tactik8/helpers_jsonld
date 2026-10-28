import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
import * as eh from '../../libraries/src/elementHelpers.js';

let BASE_URL = 'http://localhost:3021/';

import { libraries } from '../../libraries/libraries.js';

export class BaseContainerItem extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.flags = {};
    }



    get position() {
        return h.list.getPosition(this.record);
    }

    get item(){
        return h.getItem(this.record)
    }


    // ------------------------------------------------------------
    // Parent child
    // ------------------------------------------------------------

    get workplaceElement(){
        return eh.closest(this, 'kr-workplace')
    }
    get workplaceRef(){
        return eh.getRef(eh.closest(this, 'kr-workplace'))
    }

    get containerElement(){
        return eh.closest(this, 'kr-container')
    }
    get containerRef(){
        return eh.getRef(eh.closest(this, 'kr-container'))
    }


    // ------------------------------------------------------------
    // Attributes
    // ------------------------------------------------------------


    isSelectable(){
        return eh.isSelectable(this)
    }
    setSelectable(){
        return eh.setSelectable(this)
    }
    unsetSelectable(){
        return eh.unsetSelectable(this)
    }
    toggleSelectable(){
        return eh.toggleSelectable(this)
    }


    isSelected(){
        return eh.isSelected(this)
    }
    setSelected(){
        return eh.setSelected(this)
    }
    unsetSelected(){
        return eh.unsetSelected(this)
    }
    toggleSelected(){
        return eh.toggleSelected(this)
    }

    isDraggable(){
        return eh.isDraggable(this)
    }
    setDraggable(){
        return eh.setDraggable(this)
    }
    unsetDraggable(){
        return eh.unsetDraggable(this)
    }
    toggleDraggable(){
        return eh.toggleDraggable(this)
    }



    isDragging(){
        return eh.isDragging(this)
    }
    setDragging(){
        return eh.setDragging(this)
    }
    unsetDragging(){
        return eh.unsetDragging(this)
    }
    toggleDragging(){
        return eh.toggleDragging(this)
    }

    // ------------------------------------------------------------
    // 
    // ------------------------------------------------------------
    render() {
        super.render();
        eh.setDraggable(this)
        this.draggable = true
        eh.setSelectable(this)
    }


    initDragging(){


        if (this.flags?.initDragging == true) {
            return;
        }
        this.flags.initDragging = true;


        let item = this
        this.addEventListener('dragstart', (e) => {
           // e.preventDefault()
            let element = eh.closest(item, 'kr-item')
            eh.setDragging(element)
            let workspace = eh.closest(element, 'kr-workspace')
            workspace.selectedItemElements.forEach(x => eh.setDragging(x))
        })

        this.addEventListener('dragend', (e) => {

            e.preventDefault()
            let workspace = eh.closest(item, 'kr-workspace')
            workspace.unsetDraggingAll()
        })


    }


}

customElements.define('kr-item', BaseContainerItem);
