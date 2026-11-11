
import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';




/**
 * Returns true if the actionStatus property is PotentialActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is PotentialActionStatus, false
 */
export function isPotential(record) {
    return h.getValue(record, 'actionStatus') == 'PotentialActionStatus';
}

/**
 * Returns true if the actionStatus property is ActiveActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is ActiveActionStatus, false
 */
export function isActive(record) {
    return h.getValue(record, 'actionStatus') == 'ActiveActionStatus';
}

/**
 * Returns true if the actionStatus property is CompletedActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is CompletedActionStatus, false
 */
export function isCompleted(record) {
    return h.getValue(record, 'actionStatus') == 'CompletedActionStatus';
}

/**
 * Returns true if the actionStatus property is FailedActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is FailedActionStatus, false
 */
export function isFailed(record) {
    return h.getValue(record, 'actionStatus') == 'FailedActionStatus';
}

/**
 * Set action to PotentialActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setPotential(record) {
    record = h.setValue(record, 'actionStatus', 'PotentialActionStatus');
    record = h.setValue(record, 'startTime', undefined);
    record = h.setValue(record, 'endTime', undefined);
    record = h.setValue(record, 'error', undefined);
    record = h.setValue(record, 'result', undefined);
    return record;
}

/**
 * Set action to ActiveActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setActive(record) {
    record = h.setValue(record, 'actionStatus', 'ActiveActionStatus');
    record = h.setValue(
        record,
        'startTime',
        h.getValue(record, 'startTime') ?? new Date().toISOString(),
    );
    record = h.setValue(record, 'endTime', undefined);
    record = h.setValue(record, 'error', undefined);
    record = h.setValue(record, 'result', undefined);
    return record;
}

/**
 * Set action to CompletedActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setCompleted(record, result) {
    record = h.setValue(record, 'actionStatus', 'CompletedActionStatus');
    record = h.setValue(
        record,
        'startTime',
        h.getValue(record, 'startTime') || new Date().toISOString(),
    );
    record = h.setValue(
        record,
        'endTime',
        h.getValue(record, 'endTime') || new Date().toISOString(),
    );
    record = h.setValue(record, 'error', undefined);

    if (h.isNotNull(result)) {
        record = h.setValue(record, 'result', result);
    }

    return record;
}

/**
 * Set action to FailedActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setFailed(record, error) {
    record = h.setValue(record, 'actionStatus', 'FailedActionStatus');
    record = h.setValue(
        record,
        'startTime',
        h.getValue(record, 'startTime') ?? new Date().toISOString(),
    );
    record = h.setValue(
        record,
        'endTime',
        h.getValue(record, 'endTime') ?? new Date().toISOString(),
    );
    record = h.setValue(record, 'error', String(error));
    record = h.setValue(record, 'result', undefined);
    return record;
}
