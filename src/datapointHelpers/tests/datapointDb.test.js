import { _h } from '../../index.js'
import { datapointHelpers as dp } from '../datapointHelpers.js'

let record0 = {
    "@type": "Thing",
    "@id": "https://www.test.com/thing0#thing",
    "name": "Thing0"
}
let record0_change = {
    "@type": "Thing",
    "@id": "https://www.test.com/thing0#thing",
    "name": "Thing0_test"
}





let record1 = {
    "@type": "Thing",
    "@id": "https://www.test.com/thing1#thing",
    "name": "Thing1",
    "other": {
        "@type": "Thing",
        "@id": "https://www.test.com/thing2#thing",
        "name": "Thing2"
    }
}

let record1_nested_change = {
    "@type": "Thing",
    "@id": "https://www.test.com/thing1#thing",
    "name": "Thing1",
    "other": {
        "@type": "Thing",
        "@id": "https://www.test.com/thing2#thing",
        "name": "Thing2_test"
    }
}




describe('Datapoint DB ', () => {




    describe('Base', () => {

        it('Base', () => {

            let db = new dp.DataPointDB()

            let metadata1 = new dp.Metadata(0.5, "2024-01-01")
            let metadata2 = new dp.Metadata(0.4, "2025-01-01")

            


        });
    })
})