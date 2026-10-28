import { h } from '/jsonldCore.js';
import * as eh from './elementHelpers.js';

const SELECTABLE_CLASS = 'selectable';

const initializedContainers = new WeakSet();
const observerDB = new WeakMap();
const cleanupRegistry = new WeakMap();

export function initMain(element) {
    if (!element || initializedContainers.has(element)) return;
    initializedContainers.add(element);

    initItems(element);
    initObserver(element);

    const cleanupClick = initSelectorClick(element);
    const cleanupDrag = initSelectorDrag(element);

    cleanupRegistry.set(element, () => {
        cleanupClick();
        cleanupDrag();
        removeObserver(element);
        initializedContainers.delete(element);
    });
}

export function destroyMain(element) {
    const cleanup = cleanupRegistry.get(element);
    if (cleanup) {
        cleanup();
        cleanupRegistry.delete(element);
    }
}

export function initItems(element) {
    for (const child of element.children) {
        initItem(child);
    }
}

export function initItem(element) {
    element.classList.add(SELECTABLE_CLASS);
}

function initSelectorClick(container) {
    let lastSelectedIdx = -1;

    const handleClick = (e) => {
        const target = eh.getSelectableElement(e.target);
        const allItems = eh.getSelectableElements(container);

        // Clicked outside an item: deselect all unless modifier held
        if (!target) {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                allItems.forEach((item) => eh.unsetSelected(item));
                lastSelectedIdx = -1;
            }
            return;
        }

        const currentIdx = allItems.indexOf(target);
        if (currentIdx === -1) return;

        // Shift + Click: Range Select
        if (e.shiftKey && lastSelectedIdx !== -1) {
            const start = Math.min(lastSelectedIdx, currentIdx);
            const end = Math.max(lastSelectedIdx, currentIdx);

            if (!e.ctrlKey && !e.metaKey) {
                allItems.forEach((item) => eh.unsetSelected(item));
            }
            for (let i = start; i <= end; i++) {
                eh.setSelected(allItems[i]);
            }
        }
        // Ctrl/Cmd + Click: Toggle element
        else if (e.ctrlKey || e.metaKey) {
            eh.toggleSelected(target);
            lastSelectedIdx = currentIdx;
        }
        // Standard Click: Single selection
        else {
            allItems.forEach((item) => eh.unsetSelected(item));
            eh.setSelected(target);
            lastSelectedIdx = currentIdx;
        }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
}

function initSelectorDrag(container) {
    container.style.position = container.style.position || 'relative';
    container.style.userSelect = 'none';

    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let startY = 0;
    let selectionBox = null;
    let prevUserSelect = '';

    const onMouseDown = (e) => {
        // Only trigger on primary left click
        if (e.button !== 0) return;

        // Do not drag if clicking form controls, links, or editable areas
        if (
            e.target.closest(
                'button, input, textarea, select, a, [contenteditable="true"]',
            )
        ) {
            return;
        }

        // Do not drag if clicking directly on a selectable item
        if (eh.getSelectableElement(e.target)) return;

        // If the click landed inside a different container, ignore it
        const clickedContainer = eh.getContainerElement
            ? eh.getContainerElement(e.target)
            : null;
        if (clickedContainer && clickedContainer !== container) {
            return;
        }

        const items = eh.getSelectableElements(container);
        if (!e.ctrlKey && !e.metaKey) {
            items.forEach((item) => eh.unsetSelected(item));
        }

        isDragging = true;
        hasDragged = false;

        // Prevent native text selection across the document while marquee dragging
        prevUserSelect = document.body.style.userSelect;
        document.body.style.userSelect = 'none';

        // Use direct viewport coordinates (fixed positioning)
        startX = e.clientX;
        startY = e.clientY;

        selectionBox = document.createElement('div');
        selectionBox.classList.add('selection-box');
        selectionBox.style.position = 'fixed';
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        selectionBox.style.width = '0px';
        selectionBox.style.height = '0px';
        selectionBox.style.pointerEvents = 'none'; // Box will never swallow mouse events
        selectionBox.style.zIndex = '99999';

        document.body.appendChild(selectionBox);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
        if (!isDragging || !selectionBox) return;

        const currentX = e.clientX;
        const currentY = e.clientY;

        const boxX = Math.min(startX, currentX);
        const boxY = Math.min(startY, currentY);
        const boxWidth = Math.abs(startX - currentX);
        const boxHeight = Math.abs(startY - currentY);

        selectionBox.style.left = `${boxX}px`;
        selectionBox.style.top = `${boxY}px`;
        selectionBox.style.width = `${boxWidth}px`;
        selectionBox.style.height = `${boxHeight}px`;

        if (boxWidth < 5 && boxHeight < 5) return;

        hasDragged = true;

        const boxRect = selectionBox.getBoundingClientRect();
        const items = eh.getSelectableElements(container);

        items.forEach((item) => {
            const itemRect = item.getBoundingClientRect();

            // AABB collision detection in viewport coordinate space
            const isOverlapping = !(
                boxRect.right < itemRect.left ||
                boxRect.left > itemRect.right ||
                boxRect.bottom < itemRect.top ||
                boxRect.top > itemRect.bottom
            );

            if (isOverlapping) {
                eh.setSelected(item);
            } else if (!e.ctrlKey && !e.metaKey) {
                eh.unsetSelected(item);
            }
        });
    };

    const onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;

        document.body.style.userSelect = prevUserSelect;

        if (selectionBox) {
            selectionBox.remove();
            selectionBox = null;
        }

        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);

        // Suppress trailing 'click' event so the completed drag selection stays active
        if (hasDragged) {
            const captureClick = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            };

            window.addEventListener('click', captureClick, {
                capture: true,
                once: true,
            });

            setTimeout(() => {
                window.removeEventListener('click', captureClick, {
                    capture: true,
                });
                hasDragged = false;
            }, 50);
        }
    };

    window.addEventListener('mousedown', onMouseDown);

    return () => {
        window.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        if (selectionBox) selectionBox.remove();
    };
}

function initObserver(element) {
    if (observerDB.has(element)) return;

    const observer = new MutationObserver((mutationsList) => {
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

    observer.observe(element, { childList: true, subtree: false });
    observerDB.set(element, observer);
}

export function removeObserver(element) {
    const observer = observerDB.get(element);
    if (observer) {
        observer.disconnect();
        observerDB.delete(element);
    }
}
