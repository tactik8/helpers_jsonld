import { listItem as lh } from '../listItem.js';

import { thing } from '../../Thing/Thing.js';

/**
 *
 * @param {*} name
 * @param {*} nbOfItems
 */
export function getTestRecord(name, nbOfItems) {
    if (nbOfItems && nbOfItems > 1) {
        let results = [];
        for (let i = 0; i < nbOfItems; i++) {
            results.push(getTestRecord(name + '_' + String(i), 0));
        }
        return;
    }

    let item = thing.testdata(name + '_item');
    let r = lh.newRecord(item);
    r['@id'] = name + '_id';

    return r;
}
