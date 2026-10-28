import { db } from '../../recordsDB/recordsDB.js';
import { h } from '/jsonldCore.js';
import * as eh from './elementHelpers.js';

let CONTAINER_CLASS = 'container';
let ITEM_CLASS = 'draggable';

let DRAGGABLE_CLASS = 'draggable';
let DRAGGING_CLASS = 'dragging';
let SELECTABLE_CLASS = 'selectable';
let SELECTED_CLASS = 'selected';

let observerDB = {};
let containerDB = {};
let itemDB = {};

/**
 * Library to make elements draggable
 * Handles only the drag part, not the drop
 */

/**
 * Init a container in a drag and drop list
 * @param {HTMLElement} element
 */
export function initWorkspace(element) {
    eh.setDraggableWorkspace(element);
    initWorkspaceListeners(element);
    initObserver(element);
    initItems(element);
}

/**
 * Init all items in a container in a drag and drop list.
 * @param {HTMLElement} element
 */
export function initItems(element) {
    let items = eh.getDraggableElements(element);

    items.forEach((x) => initItem(x));
}

/**
 * Init an item in a container in a drag and drop list.
 * @param {HTMLElement} element
 */
export function initItem(element) {
    initItemEventListeners(element);
}

let workspaceDB = {};

export function initWorkspaceListeners(element) {
    element.id = element?.id || 'item_' + h.randomUUID();

    // Skip if already initialized
    if (itemDB[element.id]) {
        return;
    }
    itemDB[element.id] = element; // Store reference to prevent duplicate listeners

    element.addEventListener('workspace-drag-start', (e) => {
        console.log('buybble up');
        // This will catch the shadow-piercing event perfectly!
        activeDraggingIds = [e.detail.id];

        let elements = activeDraggingIds.map((x) => document.getElementById(x));
        eh.setDragging(activeDraggingIds);

        workspaceDB[element.id] = workspaceDB?.[element.id] || {};
        workspaceDB[element.id].dragging = activeDraggingIds;
    });
}

/**
 * Init an item in a drag and drop list
 * @param {HTMLElement} element
 */
export function initItemEventListeners(element) {
    element.id = element?.id || 'item_' + h.randomUUID();

    // Skip if already initialized
    if (itemDB[element.id]) {
        return;
    }
    itemDB[element.id] = element; // Store reference to prevent duplicate listeners

    // Set draggable
    element.classList.add(DRAGGABLE_CLASS);
    element.draggable = true;

    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', '');
        e.dataTransfer.effectAllowed = 'move';

        // Set current item to dragging
        let item = eh.getDraggableElement(e);
        console.log('drag', item);
        eh.setDragging(item);

        //

        // Dispatch an event that breaks out of the shadow root
        element.dispatchEvent(
            new CustomEvent('workspace-drag-start', {
                detail: { ref: this.dataset.id },
                bubbles: true,
                composed: true, // CRITICAL: Allows event to cross the shadow boundary
            }),
        );

        // Set selected items to dragging (fallback to empty array if container missing)
        let container = eh.getDraggableWorkspaceElement(e);
        let selectedElements = eh.getSelectedElements(container);
        eh.setDragging(selectedElements);
    });

    element.addEventListener('dragend', (e) => {
        // Query globally so elements detached/moved during drop are always cleaned up

        element.dispatchEvent(
            new CustomEvent('workspace-drag-end', {
                detail: { id: this.currentTarget.id },
                bubbles: true,
                composed: true, // CRITICAL: Allows event to cross the shadow boundary
            }),
        );
    });
}

// Observer
function initObserver(element) {
    element.id = element?.id || 'container_' + h.randomUUID();

    if (observerDB[element.id]) {
        return;
    }

    let observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (eh.isDraggable(node)) {
                            initItem(node);
                        }
                    }
                });
            }
        }
    });

    observer.observe(element, {
        childList: true,
        subtree: true,
    });

    observerDB[element.id] = observer;
}

export function removeObserver(element) {
    if (observerDB[element?.id]) {
        observerDB[element.id].disconnect();
        delete observerDB[element.id];
    }
}
