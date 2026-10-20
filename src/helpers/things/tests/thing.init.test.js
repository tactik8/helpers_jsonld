

import { things } from "../things.js";





describe('Thing Class', () => {
    describe('Init', () => {


        // Happy path
        it('Init with name', () => {

            let v = 'name'
            let t = new things.Thing(v)

            expect(t.name).toEqual(v);

        });

        it('Init with record', () => {

            let record = { "@type": "Thing", "@id": "https://www.test.com/thign1#thing", "name": "test2" }
            let v = 'name'
            let t = new things.Thing(record)

            expect(t.name).toEqual('test2');
            expect(t.record_id).toEqual("https://www.test.com/thign1#thing");

        });


        // Edge cases

        it('Edge case: Init record wront @type', () => {

            let record = { "@type": "WebSite", "@id": "https://www.test.com/thign1#thing", "name": "test2" }
            let v = 'name'
            let t = new things.Thing(record)

            expect(t.name).toEqual(undefined);
            expect(t.record_type).toEqual("Thing");
        });

    })



})