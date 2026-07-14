import jsonldBase, * as baseHelpers from './jsonldBase/jsonldBase.js';
import * as dot from './dotHelpers/dotHelpers.js';
import * as things from './things/things.js'
import * as apiClient from './apiClient/apiClient.js'
import * as rdf from './rdfHelpers/rdfHelpers.js'
import * as recordIDHelpers from './recordIdHelpers/recordIdHelpers.js'
import * as transformHelpers from './transformHelpers/transformHelpers.js'
import { dataHelpers } from './dataHelpers/dataHelpers.js'

import { records  }  from './records/records.js'


export * from './jsonldBase/jsonldBase.js'
export * from './dotHelpers/dotHelpers.js'
export * from './things/things.js'
export * from './apiClient/apiClient.js'
export * from './rdfHelpers/rdfHelpers.js'
export * from './transformHelpers/transformHelpers.js'


export { records } from './records/records.js'
export { transformHelpers} from './transformHelpers/transformHelpers.js'


export const _h = { ...baseHelpers, ...things, ...apiClient, ...rdf, ...recordIDHelpers, ...dataHelpers, ...transformHelpers, records };

export const helpers = _h

export default _h

function test(){


    let record = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1",
        "name": "thing1",
        "other": {
            "@type": "Thing",
            "@id": "https://www.test.com/thing2",
            "name": "thing2"
        }
    }


    let records = helpers.flatten(record)

    console.log('r', record)

    let results = helpers.expand(records, record)

}

//test()