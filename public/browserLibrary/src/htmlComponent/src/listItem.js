import { BaseElement } from './_base.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';

export class ListItem extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();

        this.iniSelectorFlag = false;
        this.initDragDropFlag = false;
    }

    get position() {
        if (!this.parentElement) {
            return undefined;
        }
        const index = [...this.parentElement.children].indexOf(this);

        return index;
    }

    render() {
        console.log('Rendering ListItem', this.record.position);

        this.classList.add('selectable');

        this.initSelector();
        this.initDragDrop();

        let html = `

      

           <!-- Outer Card Component -->
    
                <span>${h.getValue(this.record, 'position')}</span>
            <!-- 3. Nested Info Card Context Container -->
                <kr-card class="flex-1" data-record-id="${h.getValue(this.record, 'item.@id')}"></kr-card> 

      
   
    `;
        this.innerHTML = html;
    }

    initSelector() {
        if (this.iniSelectorFlag == true) {
            return;
        }
        this.iniSelectorFlag = true;

        const container = this.parentElement;
        let lastSelectedIdx = -1; // Tracks the start anchor for Shift-selection

        container.addEventListener('click', (e) => {
            const target = e.target.closest('.selectable');
            if (!target) return;

            const allItems = Array.from(
                container.querySelectorAll('.selectable'),
            );
            const currentIdx = allItems.indexOf(target);

            // Behavior A: SHIFT + CLICK (Select Range)
            if (e.shiftKey && lastSelectedIdx !== -1) {
                const start = Math.min(lastSelectedIdx, currentIdx);
                const end = Math.max(lastSelectedIdx, currentIdx);

                for (let i = start; i <= end; i++) {
                    allItems[i].ariaSelected = 'true';
                }
            }

            // Behavior B: CTRL / CMD + CLICK (Toggle Individual Element)
            else if (e.ctrlKey || e.metaKey) {
                target.ariaSelected =
                    target.classList.ariaSelected == 'true' ? 'false' : 'true';
                lastSelectedIdx = currentIdx; // Update anchor
            }
            // Behavior C: STANDARD CLICK (Clear others, select only this one)
            else {
                allItems.forEach((item) => (item.ariaSelected = 'false'));
                target.ariaSelected = 'true';
                lastSelectedIdx = currentIdx; // Reset anchor
            }
        });
    }

    initDragDrop() {
        if (this.initDragDropFlag) return;
        this.initDragDropFlag = true;

        this.draggable = 'true';
        const container = this.parentElement;

        let itemListElement = this.controller;
        // Item-level drag start
        let element = this
        this.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', '');
            e.dataTransfer.effectAllowed = 'move';

            element.classList.add('dragging');
            const selected = container.querySelectorAll(
                '.selectable[aria-selected="true"]',
            );
            selected.forEach((el) => el.classList.add('dragging'));
        });

        this.addEventListener('dragend', () => {
            const draggingItems = itemListElement.getDraggingElements()
            draggingItems.forEach((el) => el.classList.remove('dragging'));
        });

        // Container-level listeners (only bind once on container)
        if (!container.dataset.dragInitialized) {
            container.dataset.dragInitialized = 'true';

            container.addEventListener('dragover', (e) => {
                e.preventDefault(); // Critical for drop to fire
                e.dataTransfer.dropEffect = 'move';
            });

            
            container.addEventListener('drop', (e) => {
                e.preventDefault();

                const dropTarget = e.target.closest('.selectable');
                
                if (!dropTarget || !dropTarget.record) return;

                let dropRecord = dropTarget.record;

                let draggedRecords = itemListElement.getDraggingRefs()
            
                itemListElement.insertItemBefore(draggedRecords, dropRecord);
                
            });
        }
    }

    /**
     * Returns the selected elements (ariaSelected = true)
     * @returns
     */
    getSelectedElements() {
        const container = this.parentElement;
        let elements = Array.from(
            container.querySelectorAll('.selectable.selected'),
        ).map((el) => el.dataset.id);
        elements = elements.filter((x) => x);

        return elements;
    }
    /**
     * Returns the refs of the selected elements
     * @returns
     */
    getSelectedRefs() {
        const container = this.parentElement;
        let elements = Array.from(
            container.querySelectorAll('.selectable.selected'),
        ).map((el) => el.dataset.id);

        elements = elements.filter((x) => x);

        let refs = elements.map((x) => x.ref);
        return refs;
    }

    getDraggingRefs() {
        const container = this.parentElement;
        let elements = Array.from(container.querySelectorAll('.dragging')).map(
            (el) => el.dataset.id,
        );
        elements = elements.filter((x) => x);

        let refs = elements.map((x) => x.ref);
        return refs;
    }
}

customElements.define('kr-listitem', ListItem);
