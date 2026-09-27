

import { jsonldBase as h } from "../../jsonldBase/jsonldBase.js";
import { things } from "../things.js";



describe('Things', () => {


    describe('Things Init', () => {


        // Happy path
        it('Set things', () => {


            for (let k of Object.keys(things)) {

                if (/^[A-Z]/.test(k)) {

                    let record = {
                        "@type": k,
                        "@id": "https://www.test.com" + '/' + k + "#" + k.toLowerCase(),
                        "name": k
                    }
                    let t = things.toThing(record)
                    console.log('k', k)
                    expect(t.name).toEqual(k);
                    expect(t.record_type).toEqual(k);



                }
            }


        });
    });
});
