import { jsonldBase as h } from '../jsonldBase/jsonldBase.js';

import * as executeHelpers from './src/potentialActionExecution.js';

import * as defineHelpers from './src/potentialActionDefinition.js';

export const potentialActionHelpers = {
    add: defineHelpers.addPotentialActions,
    execute: executeHelpers.execute,
};

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
            h.addValue(action, 'result', t);
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
