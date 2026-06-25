import { randomUUID } from 'crypto';

import * as h from '../../jsonldBase/jsonldBase.js'


/**
 * 
 * @param {*} record 
 * @returns record with potentialAction added
 */
export function addPotentialActions(record, baseUrl) {


    if (Array.isArray(record)) {
        return record.map(x => addPotentialActions(x))
    }

    if (!record?.['@type'] || !record?.['@id']) {
        return record
    }


    for (let k of Object.keys(record)) {
        record[k] = addPotentialActions(record)
    }

    let record_type = h.record_type(record)


    // Generic
    record = addAction(record, "BookmarkAction", "Bookmark", baseUrl)


    // ListItem
    if (record_type == "ListItem") {
        record = addAction(record, "MoveUpAction", "Move Up", baseUrl)
        record = addAction(record, "MoveDownAction", "Move Down", baseUrl)
        record = addAction(record, "DeleteAction", "Delete", baseUrl)
    }


    return record


}



function addAction(record, action_type, name, baseUrl) {
    let action = {
        "@type": action_type,
        "@id": randomUUID(),
        "name": name,
        "actionStatus": "PotentialActionStatus",
        "object": { "@id": h.record_id(record) },
        "url": baseUrl
    }

    record = addActionToRecord(record, action)

    return record

}


function addActionToRecord(record, action) {

    if (record?._record) {
        record._record.potentialAction = record._record?.potentialAction || []
        record._record.potentialAction = Array.isArray(record._record.potentialAction) ? record._record.potentialAction : [record._record.potentialAction]
        record._record.potentialAction.push(action)
        return record
    } else {
        record.potentialAction = record?.potentialAction || []
        record.potentialAction = Array.isArray(record.potentialAction) ? record.potentialAction : [record.potentialAction]
        record.potentialAction.push(action)
        return record
    }


}