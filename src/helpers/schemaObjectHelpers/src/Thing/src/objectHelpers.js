import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';




export function newRecord(name, url) {
    let record = {
        '@context': 'https://schema.org/',
        '@type': 'Thing',
        '@id': h.randomUUID() + '#thing',
        name,
        url,
    };

    return record;
}
