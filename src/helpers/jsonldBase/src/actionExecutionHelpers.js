export function execute(action) {
    // Handle array
    if (h.isArray(action)) {
        return action.map((x) => execute(x));
    }

    //
    let record_type = h.record_type(action);

    // Properties
    if (record_type == 'ReplaceAction') {
        return replaceAction(action);
    }
    if (record_type == 'UpdateAction') {
        return updateAction(action);
    }

    // ItemList
    if (record_type == 'MoveUpAction') {
        return moveUpAction(action);
    }
    if (record_type == 'MoveDownAction') {
        return moveDownAction(action);
    }
    if (record_type == 'AppendAction') {
        return appendAction(action);
    }
    if (record_type == 'PrependAction') {
        return prependAction(action);
    }
    if (record_type == 'ReplaceAction') {
        return replaceAction(action);
    }
    if (record_type == 'DuplicateAction') {
        return duplicateAction(action);
    }
}

// --------------------------------------------------------------
// Record property actions
// --------------------------------------------------------------

/**
 * Update a record (targetCollection) with the values in object
 * @param {*} action
 * @param {*} recordsDB
 * @returns
 */
function updateAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    for (let t of targets) {
        for (let o of objects) {
            // merge values
            t = h.patch(t, o);
        }

        // Add to result
        action = h.addValue(action, 'result', t);
    }

    // set action completed
    action = h.setCompleted(action);

    //
    return action;
}

// --------------------------------------------------------------
// ItemList Actions
// --------------------------------------------------------------

export function prependAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.prepend(t, o);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;
}

export function appendAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.append(t, o);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;
}

export function moveUpAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.moveUp(t, o);
        }
    }
    action = h.addValue(action, 'result', t);

    action = h.setCompleted(action);

    return action;
}

export function moveDownAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.moveDown(t, o);
        }
    }
    action = h.addValue(action, 'result', t);

    action = h.setCompleted(action);

    return action;
}

export function replaceAction(action) {
    let target = h.targetCollection(action);
    let replacer = h.getValue(action, 'replacer');
    let replacee = h.getValue(action, 'replacee');

    t = h.list.replace(t, replacer, replacee);
    action = h.addValue(action, 'result', target);

    action = h.setCompleted(action);

    return action;
}

export function duplicateAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.duplicate(t, o);
        }
    }
    action = h.addValue(action, 'result', t);

    action = h.setCompleted(action);

    return action;
}
