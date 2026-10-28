import { db } from '../../recordsDB/recordsDB.js';
import * as elementDB from '../../elementDB/elementDB.js';

import { h } from '/jsonldCore.js';
import * as eh from './elementHelpers.js';

let CONTAINER_CLASS = 'container';
let ITEM_CLASS = 'draggable';

let DRAGGABLE_WORKSPACE_CLASS = 'dragworkspace';

let DRAGGABLE_CLASS = 'draggable';
let DRAGGING_CLASS = 'dragging';
let SELECTABLE_CLASS = 'selectable';
let SELECTED_CLASS = 'selected';

let observerDB = {};
let containerDB = {};
let itemDB = {};

/**
 * Init a container in a drag and drop list
 * @param {HTMLElement} element
 */
export function initWorkspace(element) {
    element.id = element?.id || 'namespace_' + h.randomUUID();

    eh.setDraggableWorkspace(element);

    initWorkspaceListeners(element);

    //initWorkspaceListeners(element);
    //initObserver(element, elementDB);

    initItems(element);
}

/**
 * Init all items in a container in a drag and drop list.
 * @param {HTMLElement} element
 */
export function initItems(element) {
    // let items = eh.getDraggableElements(element);

    let items = eh.querySelectorAllDeep(element, 'KR-LISTITEM');
    items.forEach((x) => eh.setDraggable(x));

    items.forEach((x) => (x.draggable = true));
}

/**
 * Init an item in a container in a drag and drop list.
 * @param {HTMLElement} element
 */
export function initItem(element) {
    initItemEventListeners(element);
}

export function initWorkspaceListeners(element) {
    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', '');
        e.dataTransfer.effectAllowed = 'move';

        let element = eh.getDraggableElement(e.target);
        eh.setDragging(element);

        // Set current item to dragging
    });

    element.addEventListener('dragend', (e) => {
        // Query globally so elements detached/moved during drop are always cleaned up

        let element = eh.getDraggableElement(e.target);
        let container = eh.getContainerElement(element);
        console.log('cc', container);

        let items = eh.getDraggableElements(container);
        items.forEach((x) => eh.unsetDragging(x));
    });
}

/**
 * Init an item in a drag and drop list
 * @param {HTMLElement} element
 */
export function initItemEventListenersOLD(element) {
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

        eh.setDragging(element);

        // Set current item to dragging
    });

    element.addEventListener('dragend', (e) => {
        // Query globally so elements detached/moved during drop are always cleaned up

        let container = eh.getContainerElement(e.target);
        console.log('cc', container);

        let items = eh.getDraggableElements(container);
        items.forEach((x) => eh.unsetDragging(x));
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
                            node.draggable = true;
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
