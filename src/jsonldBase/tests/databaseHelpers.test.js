
import { jsonldBase } from "../jsonldBase.js"



describe('expansionHelpers', () => {
    describe('expand', () => {


        let record1 = {
            "@type": "Thing",
            "@id": "https://www.test.com/thing1#thing",
            "name": "Thing1",
            "other": {
                "@id": "https://www.test.com/thing11#thing"
            }
        }

        let record11 = {
            "@type": "Thing",
            "@id": "https://www.test.com/thing11#thing",
            "name": "Thing11"
        }

        

        let record_id1 = record1?.['@id']

        let record_id11 = record11?.['@id']

        let dbHelper = new jsonldBase.DatabaseHelper()


        it('Test add parent', () => {

            dbHelper.parent = { "@id": record_id1 }

            expect(dbHelper._toGet).toEqual([record_id1]);

            expect(dbHelper.isActive).toEqual(true);
            expect(dbHelper.isCompleted).toEqual(false);
            expect(dbHelper.next).toEqual(record_id1 );

        });

        it('Add first element', () => {

            dbHelper.add(record1)

            expect(dbHelper._toGet).toEqual([record_id11]);

            expect(dbHelper.isActive).toEqual(true);
            expect(dbHelper.isCompleted).toEqual(false);
            expect(dbHelper.next).toEqual(record_id11 );


        });

        it('Add 2nd element', () => {

            dbHelper.add(record11)

            expect(dbHelper._toGet).toEqual([]);


            expect(dbHelper.isActive).toEqual(false);
            expect(dbHelper.isCompleted).toEqual(true);
            expect(dbHelper.next).toEqual(undefined);

            let r = {...record1}
            r.other = record11
            expect(dbHelper.result).toEqual(r)
        });


    })

})
