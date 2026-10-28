import { db } from '../../recordsDB/recordsDB.js';
import { h } from '/jsonldCore.js';

let CONTAINER_CLASS = 'container';

let ITEM_CLASS = 'draggable';

let DRAGGABLE_WORKSPACE_CLASS = 'dragworkspace';
let DRAGGABLE_CLASS = 'draggable';
let DRAGGING_CLASS = 'dragging';
let SELECTABLE_CLASS = 'selectable';
let SELECTED_CLASS = 'selected';
let ACTIVABLE_CLASS = 'activable';
let ACTIVE_CLASS = 'active';

let observerDB = {};
let containerDB = {};

/**
 * Return true if element
 * @param {*} element
 * @returns
 */
export function isElement(element) {
    return element instanceof Element;
}

/**
 * Return true if element
 * @param {*} element
 * @returns
 */
export function isValid(element) {
    return isElement(element);
}

/**
 * Return current data-id of an element or the one from its closest parent (Shadow DOM safe)
 * @param {HTMLElement} element
 * @returns {string|undefined}
 */
export function record_id(element) {
    let el = element;
    while (el) {
        if (el.dataset && el.dataset.id) {
            return el.dataset.id;
        }
        el =
            el instanceof ShadowRoot
                ? el.host
                : el.parentElement || el.parentNode;
    }
    return undefined;
}

/**
 * Return current data-proeprty-id of an element or the one from its closest parent
 * @param {*} element
 * @returns
 */
export function propertyID(element) {
    return element.dataset.propertyId;
}

/**
 * Return current data-proeprty-id of an element or the one from its closest parent
 * @param {*} element
 * @returns
 */
export function getPropertyID(element) {
    return element.dataset.propertyId;
}

/**
 * Return current data-proeprty-id of an element or the one from its closest parent
 * @param {*} element
 * @returns
 */
export function setPropertyID(element, value) {
    element.dataset.propertyId = value;
}



/**
 * Return current data-property-value of an element or the one from its closest parent
 * @param {*} element
 * @returns
 */
export function propertyValue(element) {
    return element.dataset.propertyValue;
}

/**
 * Return current data-property-value of an element or the one from its closest parent
 * @param {*} element
 * @returns
 */
export function getPropertyValue(element) {
    return element.dataset.propertyValue;
}

/**
 * Return current data-property-value of an element or the one from its closest parent
 * @param {*} element
 * @returns
 */
export function setPropertyValue(element, value) {
    element.dataset.propertyValue = value;
}

/**
 * Get filter value form element
 * @param {*} element
 * @returns
 */
export function getFilter(element) {
    let filter = element.dataset.filter;
    let propertyID = getPropertyID(element);
    let propertyValue = getPropertyValue(element);

    if (!filter) {
        if (propertyID && propertyValue) {
            filter = {};
            filter[propertyID] = propertyValue;
        }
    }

    if (!filter) {
        return undefined;
    }

    try {
        filter = JSON.parse(filter);
    } catch {}
    return filter;
}

/**
 * Set filter value on element
 * @param {*} element
 * @returns
 */
export function setFilter(element, value) {
    element.dataset.filter = JSON.stringify(value);
}

/**
 * Returns true if elment has ref
 */
export function isRef(element, ref) {
    let elementRef = getRef(element);
    return elementRef?.['@id'] && elementRef?.['@id'] == ref?.['@id'];
}

/**
 * Returns ref of an element
 * @param {*} element
 * @returns
 */
export function getRef(element) {
    let r = record_id(element);
    if (r) {
        return { '@id': r };
    }
    return undefined;
}

/**
 * Returns ref of an element
 * @param {*} element
 * @returns
 */
export function ref(element) {
    return getRef(element);
}

// ItemList

// ----------------------------------------------------------
// ItemList
// ----------------------------------------------------------

/**
 * Returns all directchilds Elements from a container (except templates)
 * @param {*} container
 */
export function getChildElements(container) {
    return [...container.children].filter((x) => x && x.tagName != 'template');
}

/**
 * Returns the direct child element with same ref
 * @param {*} container
 * @param {*} ref
 */
export function getChildElement(container, ref) {
    return getChildElements(container).find((x) => isRef(x, ref));
}

/**
 * Returns all direct child template elements templates
 *
 * @param {*} container
 * @returns
 */
export function getChildTemplateElements(container) {
    return [...container.children].filter((x) => x && x.tagName == 'template');
}

// ----------------------------------------------------------
// Containers
// ----------------------------------------------------------

/**
 * Returns closest container element
 * @param {Event | Element} event
 * @returns
 */
export function getContainerElement(event) {
    return getClosestElementWithClass(event, CONTAINER_CLASS);
}

export function getContainerElements(element) {
    return [...element.querySelectorAll('.' + CONTAINER_CLASS)];
}

export function setContainer(element) {
    elementSetClass(element, CONTAINER_CLASS);
}

/**
 * RetuReturns closest container ref
 * @param {*} element
 * @returns
 */
export function getContainerRef(element) {
    return getRef(getContainerElement(element));
}

// ----------------------------------------------------------
// Draggable Workspace
// ----------------------------------------------------------

/**
 * Uses the native event path to find the closest wrapping .dragworkspace element,
 * completely bypassing shadow boundary encapsulation.
 * @param {Event} event
 * @returns {HTMLElement|null}
 */
export function getDraggableWorkspaceElement(event) {
    return getClosestElementWithClass(event, DRAGGABLE_WORKSPACE_CLASS);
}

export function getDraggableWorkspaceElements(container) {
    return getChildElementsWithClass(container, DRAGGABLE_WORKSPACE_CLASS);
}

export function getDraggableWorkspaceRefs(container) {
    return getChildRefsWithClass(container, DRAGGABLE_WORKSPACE_CLASS);
}

export function isDraggableWorkspace(element) {
    elementContainsClass(element, DRAGGABLE_WORKSPACE_CLASS);
}

export function setDraggableWorkspace(element) {
    return elementSetClass(element, DRAGGABLE_WORKSPACE_CLASS);
}

export function unsetDraggableWorkspace(element) {
    return elementUnSetClass(element, DRAGGABLE_WORKSPACE_CLASS);
}

export function toggleDraggableWorkspace(element) {
    return elementToggleClass(element, DRAGGABLE_WORKSPACE_CLASS);
}

// ----------------------------------------------------------
// Draggable
// ----------------------------------------------------------

export function getDraggableElement(element) {
    return getClosestElementWithClass(element, DRAGGABLE_CLASS);
}

export function getDraggableElements(workspace) {
    let selector = '.' + DRAGGABLE_CLASS;
    return querySelectorAllDeep(workspace, selector);
}

export function getDraggableRefs(workspace) {
    return getDraggableElements(workspace).map((x) => getRef(x));
    //return getChildRefsWithClass(container, DRAGGABLE_CLASS)
}

export function isDraggable(element) {
    elementContainsClass(element, DRAGGABLE_CLASS);
}

export function setDraggable(element) {
    return elementSetClass(element, DRAGGABLE_CLASS);
}

export function unsetDraggable(element) {
    return elementUnSetClass(element, DRAGGABLE_CLASS);
}

export function toggleDraggable(element) {
    return elementToggleClass(element, DRAGGABLE_CLASS);
}

// ----------------------------------------------------------
// Dragging
// ----------------------------------------------------------

export function getDraggingElement(element) {
    return getClosestElementWithClass(element, DRAGGING_CLASS);
}

export function getDraggingElements(workspace) {
    let selector = '.' + DRAGGING_CLASS;
    return querySelectorAllDeep(workspace, selector);
}

export function getDraggingRefs(workspace) {
    return getDraggingElements(workspace).map((x) => getRef(x));
    //return getChildRefsWithClass(container, DRAGGING_CLASS)
}

export function isDragging(element) {
    elementContainsClass(element, DRAGGING_CLASS);
}

export function setDragging(element) {
    return elementSetClass(element, DRAGGING_CLASS);
}

export function unsetDragging(element) {
    return elementUnSetClass(element, DRAGGING_CLASS);
}

export function toggleDragging(element) {
    return elementToggleClass(element, DRAGGING_CLASS);
}

// ----------------------------------------------------------
// Selectable
// ----------------------------------------------------------

export function getSelectableElement(element) {
    return getClosestElementWithClass(element, SELECTABLE_CLASS);
}

export function getSelectableElements(workspace) {
    let selector = '.' + SELECTABLE_CLASS;
    return querySelectorAllDeep(workspace, selector);
}

export function getSelectableRefs(container) {
    let selector = '.' + SELECTABLE_CLASS;
    return querySelectorAllDeep(workspace, selector).map(x => getRef(x));
}

export function isSelectable(element) {
    elementContainsClass(element, SELECTABLE_CLASS);
}

export function setSelectable(element) {
    return elementSetClass(element, SELECTABLE_CLASS);
}

export function unsetSelectable(element) {
    return elementUnSetClass(element, SELECTABLE_CLASS);
}

export function toggleSelectable(element) {
    return elementToggleClass(element, SELECTABLE_CLASS);
}

// ----------------------------------------------------------
// Selected
// ----------------------------------------------------------

export function getSelectedElement(element) {
    return getClosestElementWithClass(element, SELECTED_CLASS);
}

export function getSelectedElements(container) {
    let selector = '.' + SELECTED_CLASS;
    return querySelectorAllDeep(container, selector);
}

export function getSelectedRefs(container) {
    let selector = '.' + SELECTED_CLASS;
    return querySelectorAllDeep(container, selector).map(x => getRef(x));
}

export function isSelected(element) {
    elementContainsClass(element, SELECTED_CLASS);
}

export function setSelected(element) {
    return elementSetClass(element, SELECTED_CLASS);
}

export function unsetSelected(element) {
    return elementUnSetClass(element, SELECTED_CLASS);
}

export function toggleSelected(element) {
    return elementToggleClass(element, SELECTED_CLASS);
}

// ----------------------------------------------------------
// Activable
// ----------------------------------------------------------

export function getActivableElement(element) {
    return getClosestElementWithClass(element, ACTIVABLE_CLASS);
}

export function getActivableElements(container) {
    return getChildElementsWithClass(container, ACTIVABLE_CLASS);
}

export function getActivableRefs(container) {
    return getChildRefsWithClass(container, ACTIVABLE_CLASS);
}

export function isActivable(element) {
    elementContainsClass(element, ACTIVABLE_CLASS);
}

export function setActivable(element) {
    return elementSetClass(element, ACTIVABLE_CLASS);
}

export function unsetActivable(element) {
    return elementUnSetClass(element, ACTIVABLE_CLASS);
}

export function toggleActivable(element) {
    return elementToggleClass(element, ACTIVABLE_CLASS);
}

// ----------------------------------------------------------
// Active
// ----------------------------------------------------------

export function getActiveElement(element) {
    return getClosestElementWithClass(element, ACTIVE_CLASS);
}

export function getActiveElements(container) {
    return getChildElementsWithClass(container, ACTIVE_CLASS, ACTIVABLE_CLASS);
}

export function getActiveRefs(container) {
    return getChildRefsWithClass(container, ACTIVE_CLASS, ACTIVABLE_CLASS);
}

export function isActive(element) {
    elementContainsClass(element, ACTIVE_CLASS);
}

export function setActive(element) {
    return elementSetClass(element, ACTIVE_CLASS);
}

export function unsetActive(element) {
    return elementUnSetClass(element, ACTIVE_CLASS);
}

export function toggleActive(element) {
    return elementToggleClass(element, ACTIVE_CLASS);
}

// ----------------------------------------------------------
// Generic
// ----------------------------------------------------------

function getChildElementsWithClass(container, className, className2) {
    if (!isElement(container)) {
        return [];
    }

    let items = [...container.children].filter((x) =>
        x.classList.contains(className),
    );
    if (className2) {
        items = items.filter((x) => x.classList.contians(className2));
    }

    return items;
}

function getChildRefsWithClass(container, className, className2) {
    let items = getChildElementsWithClass(container, className, className2);
    return items.map((x) => getRef(x));
}

/**
 * Traverses up the DOM tree, including crossing Shadow boundaries,
 * to find the closest element matching a given class name.
 * @param {HTMLElement} element
 * @param {string} className
 */
function getClosestElementWithClass(element, className) {
    if (!(element instanceof Element)) {
        // Scan the actual event composition path
        let event = element;
        const path = event.composedPath ? event.composedPath() : [];
        return (
            path.find(
                (node) => node.classList && node.classList.contains(className),
            ) || null
        );
    }

    let el = element;
    while (el) {
        // If it's a standard element, check its class list
        if (el.classList && el.classList.contains(className)) {
            return el;
        }

        // Move upward, crossing Shadow DOM boundaries if present
        if (el instanceof ShadowRoot) {
            el = el.host;
        } else {
            el = el.parentElement || el.parentNode;
        }
    }
    return null;
}

function elementSetClass(element, className) {
    if (element && element.classList) {
        element.classList.add(className);
    }
    return element;
}

function elementUnSetClass(element, className) {
    if (element && element.classList) {
        element.classList.remove(className);
    }
    return element;
}

function elementContainsClass(element, className) {
    return element?.classList?.contains(className) || false;
}

function elementToggleClass(element, className) {
    if (h.isArray(element)) {
        return element.map((x) => elementToggleClass(x, className));
    }
    if (!isElement(element)) {
        return element;
    }
    if (elementContainsClass(element, className)) {
        return elementUnSetClass(element, className);
    }
    return elementSetClass(element, className);
}

export function querySelectorAllDeep(root, selector) {
    const results = [];

    function traverse(node) {
        if (!node) return;

        // 1. Query all matches inside the current tree scope (Document, Element, or ShadowRoot)
        if (node.querySelectorAll) {
            results.push(...node.querySelectorAll(selector));

            // 2. Find all elements that host an open shadow root and traverse into them
            const treeElements = node.querySelectorAll('*');
            for (const el of treeElements) {
                if (el.shadowRoot) {
                    traverse(el.shadowRoot);
                }
            }
        }

        if (node.tagName === 'SLOT') {
                const assigned = node.assignedElements ? node.assignedElements({ flatten: true }) : [];
                for (const el of assigned) {
                    walk(el);
                }
            }

        // Handle case where root itself is a custom element with a shadowRoot
        if (node.shadowRoot) {
            traverse(node.shadowRoot);
        }
    }

    traverse(root);
    return results;
}


/**
 * Handle shadow dom
 * @param {*} element 
 * @param {*} selector 
 * @returns 
 */
export function closest(element, selector) {
  while (element) {
    // Check if the current element matches in the active DOM level
    if (element.nodeType === Node.ELEMENT_NODE && element.matches(selector)) {
      return element;
    }

    // Traverse up the tree
    if (element.assignedSlot) {
      element = element.assignedSlot;
    } else if (element.parentNode) {
      element = element.parentNode;
    } else if (element.host) {
      // Cross the shadow boundary from the shadow root to the custom element host
      element = element.host;
    } else {
      break;
    }
  }
  return null;
}
// ----------------------------------------------------------
// Generic
// ----------------------------------------------------------
