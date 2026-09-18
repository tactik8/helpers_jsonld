import { _h } from '../../index.js'
import { jest, describe, it, expect } from '@jest/globals'

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




describe('Thing callbacks', () => {
    describe('Callbacks', () => {
        it('Call back tests', () => {

            const mockCallback = jest.fn();

            let t = new _h.things.Thing(record0)

            t.addListener(mockCallback)

            t.record = record0_change

            expect(mockCallback).toHaveBeenCalledTimes(1);

        });


        it('Call back change on nested value tests', () => {

            const mockCallbackSimple = jest.fn();
            const mockCallbackNested = jest.fn();


            let t = new _h.things.Thing(record1)


            t.addListener(mockCallbackSimple)

            t.addListenerNested(mockCallbackNested)

            t.record = record1_nested_change

            expect(mockCallbackSimple).toHaveBeenCalledTimes(0);
            expect(mockCallbackNested).toHaveBeenCalledTimes(1);


        });

        it('Call back change on property change', () => {

            const mockCallback = jest.fn();

            let t = new _h.things.Thing(record1)

            t.addListener(mockCallback)

            t.name = "new_name"

            expect(mockCallback).toHaveBeenCalledTimes(1);


        });

        it('Call back change on chiuldren property change', () => {

            const mockCallbackSimple = jest.fn();
            const mockCallbackNested = jest.fn();

            let t = new _h.things.Thing(record1)

            t.addListener(mockCallbackSimple)

            t.addListenerNested(mockCallbackNested)

            t.setValue('other.name', 'test_value')

            expect(mockCallbackSimple).toHaveBeenCalledTimes(0);
            expect(mockCallbackNested).toHaveBeenCalledTimes(1);


        });


    });
});


