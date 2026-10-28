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
 * Init dropzone
 * @param {*} element
 * @returns
 */
export function initDropzone(element) {
    return initDropzoneEventListeners(element);
}

/**
 * Init a container in a drag and drop list
 * @param {HTMLElement} element
 */
function initDropzoneEventListeners(element) {
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
        let container = eh.getContainerElement(e.target);
        let listRef = { '@id': container.dataset.id };

        // Get reference / peg item, skip if undefined
        let pegItemElement = eh.getDraggableElement(e.target);
        let pegItemID = pegItemElement ? pegItemElement.dataset?.id : undefined;
        let pegItemRef = pegItemID ? { '@id': pegItemID } : undefined;
        if (!pegItemRef) {
            return;
        }

        // Get records to move
        let workspace = eh.getDraggableWorkspaceElement(e.target);
        let draggingRefs = eh.getDraggingRefs(workspace);

        db.list.moveBefore(listRef, draggingRefs, pegItemRef);
    });
}
