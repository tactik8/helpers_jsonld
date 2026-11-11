

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';




export function getUpdatePropertyAction(record, propertyID, value){


   

    let action = {
        "@type": "UpdateAction",
        "@id": h.record_id(record).split('#')[0] + "#updateAction",
        "targetCollection": h.ref(record),
        "object": {
            "@type": "PropertyValue",
            "@id": h.randomUUID() + "#propertyvalue",
            "name": propertyID,
            "value": value,
            "propertyID": propertyID
        },
        "actionStatus": "PotentialActionStatus"
    }


    return action
}

