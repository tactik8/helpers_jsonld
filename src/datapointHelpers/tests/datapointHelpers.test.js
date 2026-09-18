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




describe('Datapoint helpers', () => {




    describe('Base', () => {

        it('Base', () => {

            let o1 = { "@id": "Testrecord1" }
            let p1 = "name"
            let v11 = "test11"


            let dp1 = dp.get(o1, p1, v11, { confidence: 0.5 })

            let r

            r = dp.c(dp1)
            expect(r).toBe(0.5);




        });
    })

    describe('Comparison', () => {

        describe('Comparison - c', () => {

            let o1 = { "@id": "Testrecord1" }
            let o2 = { "@id": "Testrecord2" }
            let p1 = "name"
            let v11 = "test11"
            let v12 = "test12"

            let refDP = dp.get(o1, p1, v12, { confidence: 0.6, observationDate: "2025-01-01" })
            let sameDP = dp.get(o1, p1, v12, { confidence: 0.6, observationDate: "2025-01-01" })
            let smallerDP = dp.get(o1, p1, v11, { confidence: 0.5, observationDate: "2025-01-01" })
            let biggerDP = dp.get(o1, p1, v12, { confidence: 0.7, observationDate: "2025-01-01" })
            let diffDP = dp.get(o2, p1, v12, { confidence: 0.6, observationDate: "2025-01-01" })


            it('Comparison - same', () => {


                let r

                r = dp.isSameObject(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, biggerDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - eq', () => {



                let r

                r = dp.eq(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.eq(refDP, smallerDP)
                expect(r).toBe(false);

                r = dp.eq(refDP, biggerDP)
                expect(r).toBe(false);

                r = dp.eq(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - lt', () => {



                let r

                r = dp.lt(refDP, sameDP)
                expect(r).toBe(false);

                r = dp.lt(refDP, smallerDP)
                expect(r).toBe(false);

                r = dp.lt(refDP, biggerDP)
                expect(r).toBe(true);

                r = dp.lt(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - gt', () => {



                let r

                r = dp.gt(refDP, sameDP)
                expect(r).toBe(false);

                r = dp.gt(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.gt(refDP, biggerDP)
                expect(r).toBe(false);

                r = dp.gt(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - le', () => {


                let r

                r = dp.le(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.le(refDP, smallerDP)
                expect(r).toBe(false);

                r = dp.le(refDP, biggerDP)
                expect(r).toBe(true);

                r = dp.le(refDP, diffDP)
                expect(r).toBe(false);

            })


            it('Comparison - ge', () => {



                let r

                r = dp.ge(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.ge(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.ge(refDP, biggerDP)
                expect(r).toBe(false);

                r = dp.ge(refDP, diffDP)
                expect(r).toBe(false);

            })
        })


        describe('Comparison - d', () => {

            let o1 = { "@id": "Testrecord1" }
            let o2 = { "@id": "Testrecord2" }
            let p1 = "name"
            let v11 = "test11"
            let v12 = "test12"

            let refDP = dp.get(o1, p1, v12, { observationDate: new Date('2025-01-01') })
            let sameDP = dp.get(o1, p1, v12, { observationDate: new Date('2025-01-01') })
            let smallerDP = dp.get(o1, p1, v11, { observationDate: new Date('2023-01-01') })
            let biggerDP = dp.get(o1, p1, v12, { observationDate: new Date('2026-01-01') })
            let diffDP = dp.get(o2, p1, v12, { observationDate: new Date('2025-01-01') })


            it('Comparison - same', () => {


                let r

                r = dp.isSameObject(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, biggerDP)
                expect(r).toBe(true);

                r = dp.isSameObject(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - eq', () => {



                let r

                r = dp.eq(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.eq(refDP, smallerDP)
                expect(r).toBe(false);

                r = dp.eq(refDP, biggerDP)
                expect(r).toBe(false);

                r = dp.eq(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - lt', () => {



                let r

                r = dp.lt(refDP, sameDP)
                expect(r).toBe(false);

                r = dp.lt(refDP, smallerDP)
                expect(r).toBe(false);

                r = dp.lt(refDP, biggerDP)
                expect(r).toBe(true);

                r = dp.lt(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - gt', () => {



                let r

                r = dp.gt(refDP, sameDP)
                expect(r).toBe(false);

                r = dp.gt(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.gt(refDP, biggerDP)
                expect(r).toBe(false);

                r = dp.gt(refDP, diffDP)
                expect(r).toBe(false);

            })

            it('Comparison - le', () => {


                let r

                r = dp.le(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.le(refDP, smallerDP)
                expect(r).toBe(false);

                r = dp.le(refDP, biggerDP)
                expect(r).toBe(true);

                r = dp.le(refDP, diffDP)
                expect(r).toBe(false);

            })


            it('Comparison - ge', () => {



                let r

                r = dp.ge(refDP, sameDP)
                expect(r).toBe(true);

                r = dp.ge(refDP, smallerDP)
                expect(r).toBe(true);

                r = dp.ge(refDP, biggerDP)
                expect(r).toBe(false);

                r = dp.ge(refDP, diffDP)
                expect(r).toBe(false);

            })
        })
    })



})

