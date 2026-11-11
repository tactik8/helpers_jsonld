import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';




export function newRecord(item, position) {
    let record = {
        '@context': 'https://schema.org/',
        '@type': 'ListItem',
        '@id': h.randomUUID() + '##listitem',
        item,
        position,
    };

    return record;
}

export function isValid(record) {
    return isListItem(record);
}

export function isListItem(record) {
    return h.record_type(record) == 'ListItem';
}

export function toListItem(record, position) {
    if (isListItem(record)) {
        return record;
    }
    return newRecord(record, position);
}



export function clean(record) {
    if (isListItem(record) == false) {
        return toListItem(record);
    }

    record = cleanPosition(record);

    return record;
}



function cleanPosition(record) {
    if (isListItem(record) == false) {
        return toListItem(record);
    }

    let position = h.getValue(record, 'position');

    if (!isNaN(position)) {
        return record;
    }

    position = Number(position);

    position = isNaN(position) ? undefined : position;

    return h.setValue(record, 'position', position);
}
