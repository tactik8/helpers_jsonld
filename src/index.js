import jsonldBase, * as helpers from './jsonldBase/jsonldBase.js';
import * as dot from './dotHelpers/dotHelpers.js';
import * as things from './things/things.js'
import * as apiClient from './apiClient/apiClient.js'
import * as rdf from './rdfHelpers/rdfHelpers.js'
import * as recordIDHelpers from './recordIdHelpers/recordIdHelpers.js'
import { dataHelpers } from './dataHelpers/dataHelpers.js'

import { records  }  from './records/records.js'


export * from './jsonldBase/jsonldBase.js'
export * from './dotHelpers/dotHelpers.js'
export * from './things/things.js'
export * from './apiClient/apiClient.js'
export * from './rdfHelpers/rdfHelpers.js'
export { records } from './records/records.js'





export default { ...helpers, ...things, ...apiClient, ...rdf, ...recordIDHelpers, ...dataHelpers, records };

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


    let record = helpers.flatten(record)

    console.log('r', record)

    let results = helpers.expand()

}

test()