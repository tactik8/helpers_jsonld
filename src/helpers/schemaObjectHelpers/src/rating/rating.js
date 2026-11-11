import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js';

export function toString(value) {
    return getTitle1(value);
}

export function getTitle1(value) {
    let ratingAspect = h.getValue(value, 'ratingAspect');
    let ratingValue = h.getValue(value, 'ratingValue');
    let bestRating = h.getValue(value, 'bestRating');

    if (ratingAspect && ratingValue && bestRating) {
        return `${ratingAspect}: ${ratingValue}/${bestRating}`;
    }

    if (ratingAspect && ratingValue) {
        return `${ratingAspect}: ${ratingValue}`;
    }

    if (ratingValue && bestRating) {
        return `${ratingValue}/${bestRating}`;
    }

    if (ratingValue) {
        return `${ratingValue}`;
    }

    return '(na)';
}

export function getDescription(value) {
    return h.getValue(value, 'ratingExplanation') || '';
}

export function newRecord(
    reviewAspect,
    ratingValue,
    ratingExplanation,
    author,
) {
    let bestRating = 5;
    let worstRating = 1;

    let record = {
        '@context': 'https://schema.org/',
        '@type': 'Rating',
        '@id': h.randomUUID() + '#rating',
        author,
        bestRating,
        reviewAspect,
        ratingValue,
        ratingExplanation,
        worstRating,
    };

    return record;
}

export function propertiesShort() {
    return ['reviewAspect', 'ratingValue', 'ratingExplanation', 'author'];
}

export function properties() {
    return ['reviewAspect', 'ratingValue', 'ratingExplanation', 'author'];
}
