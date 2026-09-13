


import { _h } from '../src/index.js'


async function test() {



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


    let record2 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "Thing1",
        "other": {
            "@id": "https://www.test.com/thing2#thing",
        }
    }
    let record_id1 = record1?.['@id']

    let record_id2 = record1.other?.['@id']




    let dbHelper = new _h.DatabaseHelper({ "@id": record1?.['@id'] })

    console.log(dbHelper.isActive)
    console.log(dbHelper.next)

    dbHelper.add(record2)
    console.log(dbHelper.isActive)
    console.log(dbHelper.next)






}

test()



