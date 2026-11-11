import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';






export function newRecord(
    name,
    object,
    startTime,
    endTime,
    actionStatus,
    result,
) {
    actionStatus = actionStatus || 'PotentialActionStatus';

    let record = {
        '@context': 'https://schema.org/',
        '@type': 'Action',
        '@id': h.randomUUID() + '#action',
        actionStatus,
        endTime,
        name,
        object,
        result,
        startTime,
    };

    return record;
}

