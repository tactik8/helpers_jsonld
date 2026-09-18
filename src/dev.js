


import { _h } from '../src/index.js'








async function test() {

    let c = new _h.things.Conversation()

    c.addMessage(undefined, undefined, undefined, "This is a test1")

    //console.log(JSON.stringify(c.record, null, 4))

    c = new _h.things.Conversation(JSON.parse(JSON.stringify(c.record)))

    c.addMessage(undefined, undefined, undefined, "This is a test2", new Date(), new Date())



    console.log(JSON.stringify(c.record, null, 4))


    let l = c.lastMessage

    console.log(JSON.stringify(l, null, 4))


}

test()



