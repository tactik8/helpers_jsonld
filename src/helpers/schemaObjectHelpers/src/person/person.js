import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js';

import * as organization from '../organization/organization.js';

export function toString(value) {
    return getTitle1(value);
}

export function getTitle1(value) {
    let names = [
        h.getValue(value, 'givenName'),
        h.getValue(value, 'familyName'),
    ].filter((x) => x);

    if (names.length > 0) {
        return names.join(' ');
    }

    return `${h.getName(value) || h.getEmail(value) || h.record_id(value) || ''}`;
}

export function newRecord(email, givenName, familyName, title, worksFor) {
    worksFor = organization.newRecord(worksFor);

    let record = {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        '@id': h.randomUUID() + '#person',
        email,
        givenName,
        familyName,
        title,
        worksFor,
    };

    return record;
}

export function propertiesShort() {
    return ['givenName', 'familyName', 'email', 'title', 'worksFor', 'email'];
}

export function properties() {
    return ['givenName', 'familyName', 'email', 'title', 'worksFor', 'email'];
}
