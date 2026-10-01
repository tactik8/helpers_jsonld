


import { _h, helpers } from '../src/index.js'








async function test() {



    let t = new _h.things.Thing()
    t.name = 'bb'

    let t1 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "Thing1"
    }
    let t2 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "Thing12"
    }

    let t3 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "Thing13"
    }

    let db = new _h.datapointHelpers.DataPointDB()

    let m1 = new _h.datapointHelpers.Metadata(0.5, "2025-01-02", "https://www.test.com/execution1#action", "https://www.test.com/datafeed1#datafeed", "https://www.test.com/datafeeditem1#datafeeditem")
    let m2 = new _h.datapointHelpers.Metadata(0.5, "2024-01-02", "https://www.test.com/execution2#action", "https://www.test.com/datafeed2#datafeed", "https://www.test.com/datafeeditem1#datafeeditem")
    let m3 = new _h.datapointHelpers.Metadata(0.6, "2025-01-02", "https://www.test.com/execution3#action", "https://www.test.com/datafeed3#datafeed", "https://www.test.com/datafeeditem1#datafeeditem")


    db.set(t1, m1)
    console.log('m1', db.dataPoints.length)

    db.set(t2, m2)
    console.log('m2', db.dataPoints.length)

    db.set(t3, m3)
    console.log('m3', db.dataPoints.length)

    console.log(db.toString())



    let analysis = _h.datapointHelpers.analysis.analyzeDataPoints(db.dataPoints)
    console.log(_h.datapointHelpers.analysis.toString(analysis))

}


async function test2() {



    let baseUrl = 'https://www.test.com'
    let path = '/path1/path2'

    let expected = 'https://www.test.com/path1/path2'

    let result = _h.dataHelpers.url.getUrl(baseUrl, path)




    // let baseUrl = "https://krknapi.com/api"

    //  let c = new _h.ApiClient(baseUrl)


}


async function test3() {

    let value = { "@type": "Thing", "@id": "https://www.test.com/thing#thing1", "name": "thing1" }

    let item = { "id": "someid", "name": "bob", "other": "other1" }

    let systemID = "https://www.test.com#WebAPI"
    let tableID = "product"
    let recordID = item.id


    let df = new _h.things.DataFeed(systemID, tableID)

    let di = df.add(item, recordID)


    console.log('di;', di.record)


    //let expected = 'json string'

    //let result = _h.dataHelpers.getDataType(JSON.stringify(value))
    //console.log('r', result)

}


function test4() {


   let record = _h.records.itemList(10, 1)

   let l = new _h.things.ItemList(record)

   let elements = l.itemListElement.map(x => x.record)

   let e = elements[0]

   let item = e.item

   console.log('e', e)
   let name = _h.getValues(e, 'item.name')

   console.log('e1', name)

}


test4()



