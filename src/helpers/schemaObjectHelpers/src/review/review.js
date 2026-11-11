import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js';

import * as rating from '../rating/rating.js';
import * as person from '../person/person.js';

export function toString(value) {
    return getTitle1(value);
}

export function getTitle1(value) {
    let author = person.getTitle1(h.getValue(value, 'author'));

    let givenName = h.getValue(author, 'givenName');
    let familyName = h.getValue(author, 'familyName')?.[0] || undefined;

    let authorName = [givenName, familyName]
        .filter((x) => x && x != '')
        .join(' ');
    authorName = authorName ?? 'anonymous';

    let reviewRating = rating.getTitle1(h.getValue(value, 'reviewRating'));

    if (author) {
        return `${reviewRating} (${authorName})`;
    }
}

export function newRecord(
    itemReviewed,
    reviewAspect,
    ratingValue,
    reviewBody,
    author,
    positiveNotes,
    negativeNotes,
) {
    let dateCreated = new Date().toISOString();
    let reviewRating = rating.newRecord(
        reviewAspect,
        ratingValue,
        undefined,
        author,
    );

    let record = {
        '@context': 'https://schema.org/',
        '@type': 'Review',
        '@id': h.randomUUID() + '#review',
        author,
        itemReviewed,
        negativeNotes,
        positiveNotes,
        reviewAspect,
        reviewBody,
        reviewRating,
        dateCreated,
    };

    return record;
}

export function propertiesShort() {
    return [
        'dateCreated',
        'itemReviewed',
        'reviewAspect',
        'ratingValue',
        'reviewBody',
        'author',
        'positiveNotes',
        'negativeNotes',
    ];
}

export function properties() {
    return [
        'dateCreated',
        'itemReviewed',
        'reviewAspect',
        'ratingValue',
        'reviewBody',
        'author',
        'positiveNotes',
        'negativeNotes',
    ];
}
