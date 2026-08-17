

import { _h, helpers } from './index.js'

import * as t from './jsonldBase/jsonldBase.js'
function test() {

    
    let record = _h.records.thing()

    record = _h.setAdditionalProperty(record, 'para1', 'value1')

    console.log('r', record)



}

test()