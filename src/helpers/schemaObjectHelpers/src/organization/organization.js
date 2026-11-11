import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js';
import { dataHelpers } from '../../../dataHelpers/dataHelpers.js';

export function toString(value) {
    return getTitle1(value);
}

export function getTitle1(value) {
    return `${h.getName(value) || h.getUrl(value) || h.record_id(value) || ''}`;
}

export function newRecord(url, name) {
    url = dataHelpers.url.getDomain(url);

    let record = {
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        '@id': url + '#organization',
        name,
        url,
    };

    return record;
}

export function propertiesShort() {
    return ['name', 'url'];
}

export function properties() {
    return ['name', 'url'];
}
