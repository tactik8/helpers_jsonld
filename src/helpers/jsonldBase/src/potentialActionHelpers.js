import { jsonldBase as h } from '../jsonldBase.js';



export function addPotentialActions(record, url) {
    // Handle null
    if (!record) {
        return record;
    }

    // Handle array
    if (h.isArray(record)) {
        return record.map((x) => addPotentialActions(x, url));
    }

    // Handle non object
    if (h.isObject(record) == false) {
        return record;
    }

    // Handle object
    let record_type = h.record_type(record);

    // Handle null record_type
    if (!record_type) {
        return record;
    }

    // Action
    if (record_type == 'Action') {
        record = defineActionsForAction(record, url);
    }

    // ItemList
    if (record_type == 'ItemList') {
        record = defineActionsForItemList(record, url);
    }

    //

    // Iterate properties
    for (let k of Object.keys(record)) {
        record[k] = addPotentialActions(record[k], url);
    }

    return record;
}

// --------------------------------------------------------------
// Action records
// --------------------------------------------------------------

function defineActionsForItemList(record, url) {
    // Add for listItems
    let listItems = h.getValues(record, 'itemListElement');
    let numberOfItems = h.getValues(record, 'numberOfItems');

    for (let i = 0; i < listItems.length; i++) {
        let position = h.getValue(listItems[i], 'position');
        if (position > 0) {
            listItems[i] = addMoveUpAction(listItems[i], record, url);
        }

        if (position < numberOfItems - 1) {
            listItems[i] = addMoveDownAction(listItems[i], record, url);
        }

        listItems[i] = addDeleteAction(listItems[i], record, url);

        listItems[i] = addDuplicateAction(listItems[i], record, url);
    }


    let newRecord = {"@type": "Thing", "@id": '_h:' + h.randomUUID(), 'name': 'new record'}
    record = addAppendAction(record, newRecord, url)


    return record;
}

function defineActionsForAction(record, url) {
    let newValue;
    if (!h.getValue(record, 'actionStatus')) {
        newValue = {
            actionStatus: 'PotentialActionStatus',
            startTime: '',
            endTime: '',
        };
        record = addPropertyUpdateAction(
            record,
            url,
            newValue,
            'Set Potential',
        );

        newValue = {
            actionStatus: 'ActiveActionStatus',
            startTime: new Date(),
            endTime: '',
        };
        record = addPropertyUpdateAction(record, url, newValue, 'Set Active');

        newValue = {
            actionStatus: 'CompletedActionStatus',
            startTime: new Date(),
            endTime: new Date(),
        };
        record = addPropertyUpdateAction(
            record,
            url,
            newValue,
            'Set Completed',
        );

        newValue = {
            actionStatus: 'FailedActionStatus',
            startTime: new Date(),
            endTime: new Date(),
        };
        record = addPropertyUpdateAction(record, url, newValue, 'Set Failed');
    }

    if (h.isPotential(record)) {
        newValue = {
            actionStatus: 'ActiveActionStatus',
            startTime: new Date(),
            endTime: '',
        };
        record = addPropertyUpdateAction(record, url, newValue, 'Set Active');

        newValue = {
            actionStatus: 'CompletedActionStatus',
            startTime: new Date(),
            endTime: new Date(),
        };
        record = addPropertyUpdateAction(
            record,
            url,
            newValue,
            'Set Completed',
        );

        newValue = {
            actionStatus: 'FailedActionStatus',
            startTime: new Date(),
            endTime: new Date(),
        };
        record = addPropertyUpdateAction(record, url, newValue, 'Set Failed');
    }

    if (h.isActive(record)) {
        newValue = {
            actionStatus: 'CompletedActionStatus',
            startTime: new Date(),
            endTime: new Date(),
        };
        record = addPropertyUpdateAction(
            record,
            url,
            newValue,
            'Set Completed',
        );

        newValue = {
            actionStatus: 'FailedActionStatus',
            startTime: new Date(),
            endTime: new Date(),
        };
        record = addPropertyUpdateAction(record, url, newValue, 'Set Failed');
    }

    return record;
}

function addPropertyUpdateAction(record, url, newValues, name) {
    name = name || `Set ${propertyID} ${value}`;

    newValues['@id'] = h.record_id(record);

    let actionRecord = {
        '@type': 'UpdateAction',
        name: name,
        object: newValues,
        targetCollection: h.ref(record),
        url: url,
    };

    record = h.addValue(record, 'potentialAction', actionRecord);

    return record;
}

function addMoveUpAction(record, itemList, url, name) {
    name = name || 'Move up';

    let actionRecord = {
        '@type': 'MoveUpAction',
        name: name,
        object: h.ref(record),
        targetCollection: h.ref(itemList),
        url: url,
    };

    record = h.addValue(record, 'potentialAction', actionRecord);

    return record;
}

function addMoveDownAction(record, itemList, url, name) {
    name = name || 'Move down';

    let actionRecord = {
        '@type': 'MoveDownAction',
        name: name,
        object: h.ref(record),
        targetCollection: h.ref(itemList),
        url: url,
    };

    record = h.addValue(record, 'potentialAction', actionRecord);

    return record;
}

function addDeleteAction(record, itemList, url, name) {
    name = name || 'Delete';

    let actionRecord = {
        '@type': 'DeleteAction',
        name: name,
        object: h.ref(record),
        targetCollection: h.ref(itemList),
        url: url,
    };

    record = h.addValue(record, 'potentialAction', actionRecord);

    return record;
}

function addDuplicateAction(record, itemList, url, name) {
    name = name || 'Duplicate';

    let actionRecord = {
        '@type': 'DuplicateAction',
        name: name,
        object: h.ref(record),
        targetCollection: h.ref(itemList),
        url: url,
    };

    record = h.addValue(record, 'potentialAction', actionRecord);

    return record;
}

function addAppendAction(itemList, record, url, name) {
    name = name || 'Duplicate';

    let actionRecord = {
        '@type': 'AppendAction',
        name: name,
        object: record,
        targetCollection: h.ref(itemList),
        url: url,
    };

    itemList = h.addValue(itemList, 'potentialAction', actionRecord);

    return itemList;
}