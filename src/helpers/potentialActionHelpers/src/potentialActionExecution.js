import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js';

export function execute(action, recordsDB) {
    // Handle array
    if (h.isArray(action)) {
        return action.map((x) => execute(x, recordsDB));
    }

    //
    let record_type = h.record_type(action);

    // Properties
    if (record_type == 'ReplaceAction') {
        return replaceAction(action, recordsDB);
    }
    if (record_type == 'UpdateAction') {
        return updateAction(action, recordsDB);
    }

    // ItemList
    if (record_type == 'MoveUpAction') {
        return moveUpAction(action, recordsDB);
    }
    if (record_type == 'MoveDownAction') {
        return moveDownAction(action, recordsDB);
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
export function replaceAction(action, recordsDB) {
    let objects = h.getValues(action, 'object');

    let targets = h.getValues(action, 'targetCollection');

    for (let o of objects) {
        for (let t of targets) {
            // Match ids
            o['@id'] = h.record_id(t) || h.record_id(o);

            // Save new value, removing the previous one
            recordsDB.set(o);

            // Add to result
            h.addValue(action, 'result', o);
        }
    }

    // set action completed
    action = h.setCompleted(action);

    //
    return action;
}

/**
 * Update a record (targetCollection) with the values in object
 * @param {*} action
 * @param {*} recordsDB
 * @returns
 */
export function updateAction(action, recordsDB) {
    let objects = h.getValues(action, 'object');

    let targets = h.getValues(action, 'targetCollection');

    for (let o of objects) {
        for (let t of targets) {
            // Retrieve target from db
            let record = recordsDB.get(t);

            // Create if missing
            t = t || { '@id': h.record_id(t) };

            // merge values
            t = h.patch(t, o);

            // Save new value
            recordsDB.set(t);

            // Add to result
            action = h.addValue(action, 'result', t);
        }
    }

    // set action completed
    action = h.setCompleted(action);

    //
    return action;
}

// --------------------------------------------------------------
// ItemList Actions
// --------------------------------------------------------------

export function moveUpAction(action, recordsDB) {
    let objects = h.getValues(action, 'object');
    let targets = h.getValues(action, 'targetCollection');

    for (let o of objects) {
        for (let t of targets) {
            let target = recordsDB.get(t);

            target = helpers.things.ItemList.moveUp(target, o);

            recordsDB.set(target);

            action = h.addValue(action, 'result', target);
        }
    }

    h.setCompleted(action);

    return action;
}

export function moveDownAction(action, recordsDB) {
    let objects = h.getValues(action, 'object');
    let targets = h.getValues(action, 'targetCollection');

    for (let o of objects) {
        for (let t of targets) {
            let target = recordsDB.get(t);

            target = helpers.things.ItemList.moveDown(target, o);

            recordsDB.set(target);

            action = h.addValue(action, 'result', target);
        }
    }

    h.setCompleted(action);

    return action;
}
