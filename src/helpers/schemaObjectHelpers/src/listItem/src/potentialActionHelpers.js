
import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';









export function getInsertAction(itemListRef, listItemRef, position){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)


    let action = {
        "@type": "InsertAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#insertaction",
        "name": "Insert ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "toLocation": position,
        "actionStatus": "PotentialActionStatus"
    }

    return action
}


export function getDeleteAction(itemListRef, listItemRef){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)

    let action = {
        "@type": "DeleteAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#deleteaction",
        "name": "Delete ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "actionStatus": "PotentialActionStatus"
    }
    return action
}




export function getDuplicateAction(itemListRef, listItemRef){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)


    let action = {
        "@type": "DeleteAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#duplicateaction",
        "name": "Duplicate ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "actionStatus": "PotentialActionStatus"
    }


    return action
}



export function getMoveupAction(itemListRef, listItemRef){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)


    let action = {
        "@type": "MoveupAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#moveupaction",
        "name": "Moveup ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "actionStatus": "PotentialActionStatus"
    }


    return action
}

export function getMovedownAction(itemListRef, listItemRef){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)


    let action = {
        "@type": "MovedownAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#movedownaction",
        "name": "Movedown ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "actionStatus": "PotentialActionStatus"
    }


    return action
}



export function getPrependAction(itemListRef, listItemRef){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)


    let action = {
        "@type": "PrependAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#prependaction",
        "name": "Prepend ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "actionStatus": "PotentialActionStatus"
    }

    return action
}


export function getAppendAction(itemListRef, listItemRef){


    itemListRef = h.ref(itemListRef)
    listItemRef = h.ref(listItemRef)


    let action = {
        "@type": "AppendAction",
        "@id": h.record_id(listItemRef).split('#')[0] + "#appendaction",
        "name": "Append ListItem",
        "targetCollection": itemListRef,
        "object": listItemRef,
        "actionStatus": "PotentialActionStatus"
    }

    return action
}
