import { db } from '../../recordsDB/recordsDB.js';
import { h } from '/jsonldCore.js';

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
 * Init a container in a drag and drop list
 * @param {HTMLElement} element
 */
export function initContainer(element) {
    initContainerEventListeners(element);
    initObserver(element);
    initItems(element);
}

/**
 * Init all items in a container in a drag and drop list.
 * @param {HTMLElement} element
 */
export function initItems(element) {
    [...element.children].forEach((x) => initItem(x));
}

/**
 * Init an item in a container in a drag and drop list.
 * @param {HTMLElement} element
 */
export function initItem(element) {
    initItemEventListeners(element);
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
        let item = e.target.closest('.' + DRAGGABLE_CLASS);
        item?.classList.add(DRAGGING_CLASS);

        // Set selected items to dragging (fallback to empty array if container missing)
        let container = e.target.closest('.' + CONTAINER_CLASS);
        let selectedElements = [...(container?.children ?? [])].filter((el) =>
            el.classList.contains(SELECTED_CLASS),
        );
        selectedElements.forEach((el) => el.classList.add(DRAGGING_CLASS));
    });

    element.addEventListener('dragend', () => {
        // Query globally so elements detached/moved during drop are always cleaned up
        let draggingElements = document.querySelectorAll('.' + DRAGGING_CLASS);
        draggingElements.forEach((el) => el.classList.remove(DRAGGING_CLASS));
    });
}

/**
 * Init a container in a drag and drop list
 * @param {HTMLElement} element
 */
export function initContainerEventListeners(element) {
    element.id = element?.id || 'container_' + h.randomUUID();

    // Skip if already initialized
    if (containerDB[element.id]) {
        return;
    }
    containerDB[element.id] = element;

    element.addEventListener('dragover', (e) => {
        e.preventDefault(); // Critical for drop to fire
        e.dataTransfer.dropEffect = 'move';
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();

        // element is the container that holds this listener
        let container = element;
        let listRef = { '@id': container.dataset.id };

        // Get reference / peg item, skip if undefined
        let pegItemElement = e.target.closest('.' + ITEM_CLASS);
        let pegItemID = pegItemElement ? pegItemElement.dataset?.id : undefined;
        let pegItemRef = pegItemID ? { '@id': pegItemID } : undefined;
        if (!pegItemRef) {
            return;
        }

        // Get records to move
        let draggingItemElements = [...(container.children ?? [])].filter((x) =>
            x.classList.contains(DRAGGING_CLASS),
        );

        let draggingRefs = draggingItemElements.map((x) => ({
            '@id': x.dataset?.id,
        }));

        db.list.moveBefore(listRef, draggingRefs, pegItemRef);
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
                        initItem(node);
                    }
                });
            }
        }
    });

    observer.observe(element, {
        childList: true,
        subtree: false,
    });

    observerDB[element.id] = observer;
}

export function removeObserver(element) {
    if (observerDB[element?.id]) {
        observerDB[element.id].disconnect();
        delete observerDB[element.id];
    }
}
