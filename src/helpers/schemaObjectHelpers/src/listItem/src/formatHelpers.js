import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';




export function toString(value) {
    return getTitle1(value);
}

export function getTitle1(value) {
    let item = h.getValue(value, 'item');

    return `${h.getPosition(value)} - ${h.getTitle1(item)}`;
}
