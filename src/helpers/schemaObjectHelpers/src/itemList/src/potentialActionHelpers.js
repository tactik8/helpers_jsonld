import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';





export function getDeleteAction(record, objects){


    objects = h.toArray(objects)
    objects = objects.map(x => h.ref(x))

    let action = {
        "@type": "DeleteAction",
        "@id": h.record_id(record).split('#')[0] + "#deleteAction",
        "targetCollection": h.ref(record),
        "object": objects,
        "actionStatus": "PotentialActionStatus"
    }


    return action
}

