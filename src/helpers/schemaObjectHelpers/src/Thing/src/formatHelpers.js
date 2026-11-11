import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';


export function toString(value) {
    return getTitle1(value);
}

export function getTitle1(value) {
    return `${h.getName(value) || h.record_id(value) || ''}`;
}