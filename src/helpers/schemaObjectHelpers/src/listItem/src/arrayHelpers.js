
import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

import * as c from './comparisonHelpers.js'
import * as p from './propertyHelpers.js'

/**
 * Sort array of listItems
 * @param {ListItem[]} items
 * @returns {ListItem[]}
 */
export function sort(values) {
    values = h.toArray(values);

    function sortFn(a, b) {
        if (c.lt(a, b) == true) {
            return -1;
        }
        if (c.gt(a, b) == true) {
            return 1;
        }
        return 0;
    }

    values.sort(sortFn);

    return values;
}



export function find(items, refItem) {
    items = h.toArray(items);

    let record_id = h.record_id(refItem);
    return items.find(
        (x) =>
            h.record_id(x) == record_id ||
            p.getItemRecordID(x) == record_id,
    );
}

