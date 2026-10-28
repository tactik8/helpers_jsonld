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

export function initDropzone(element) {
    return initDropzoneEventListeners(element);
}

/**
 * Init a container in a drag and drop list
 * @param {HTMLElement} element
 */
function initDropzoneEventListeners(element) {
    // ensure id
    element.id = element?.id || 'container_' + h.randomUUID();

    // Skip if already initialized
    if (containerDB[element.id]) {
        return;
    }
    containerDB[element.id] = element;

    // set as container
    eh.setContainer(element);

    // Add dragover
    element.addEventListener('dragover', (e) => {
        // todo: add fn to disallow if not allowed
        e.preventDefault(); // Critical for drop to fire
        e.dataTransfer.dropEffect = 'move';
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();

        console.log('DROP kanban');
        // get container

        let container = eh.getContainerElement(e.currentTarget);
        let propertyID = eh.getPropertyID(container);
        let propertyValue = eh.getPropertyValue(container);

        // Make property modifier
        let r = {};
        r[propertyID] = propertyValue;

        // Get records to move
        let workspace = eh.getDraggableWorkspaceElement(e);
        console.log('ww', workspace);
        let draggingRefs = eh.getDraggingElements(workspace).map(x => eh.getRef(x));
        console.log('vv', draggingRefs);
        let draggingRecords = draggingRefs.map((x) => db.get(x));
                console.log('ffff', draggingRecords)

        let draggingItems = draggingRecords.map((x) => h.getItem(x));
        draggingItems = draggingItems.map((x) => h.ref(x));
        console.log('eeee', draggingItems)

        // Combine
        draggingItems = draggingItems.map((x) => ({ ...x, ...r }));

        console.log('dddd', draggingItems)
        db.patch(draggingItems);

        // render containers

        let container_record_id = eh.record_id(container);
        db.broadcast(container_record_id);
    });
}
