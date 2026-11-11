import * as p from './propertyHelpers.js';

export function lt(a, b) {
    let positionA = p.getPosition(a);
    let positionB = p.getPosition(b);

    if (positionA === undefined && positionB === undefined) {
        return false;
    }

    if (positionA !== undefined && positionB === undefined) {
        return true;
    }
    if (positionA === undefined && positionB !== undefined) {
        return false;
    }

    return positionA < positionB;
}

export function gt(a, b) {
    let positionA = p.getPosition(a);
    let positionB = p.getPosition(b);

    if (positionA === undefined && positionB === undefined) {
        return false;
    }

    if (positionA !== undefined && positionB === undefined) {
        return false;
    }
    if (positionA === undefined && positionB !== undefined) {
        return true;
    }

    return positionA < positionB;
}
