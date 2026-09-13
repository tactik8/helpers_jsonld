import { diskHelpers as h } from '../diskHelpers.js';

describe('diskHelpers', () => {

    describe('Test setup', () => {



        it('Delete test directory', async () => {
            let d = '/testdata'
            
            let r = h.dir.delete(d)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).not.toEqual(undefined);
        });
    })


    describe('Filepath', () => {


        it('Get 1', async () => {
            let d = '/testdata/test1'
            let f = 'testfile1.json'
            let r = h.getFilePath(d, f)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).toEqual(expected);
        });

        it('Get 2', async () => {
            let d = '/testdata/test1'
            let f = '/testfile1.json'
            let r = h.getFilePath(d, f)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).toEqual(expected);
        });

        it('Get 3', async () => {
            let d = '/testdata/test1/'
            let f = 'testfile1.json'
            let r = h.getFilePath(d, f)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).toEqual(expected);
        });
        it('Get 4', async () => {
            let d = '/testdata/test1/testfile1.json'
            let f = ""
            let r = h.getFilePath(d, f)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).toEqual(expected);
        });
        it('Get 5', async () => {
            let d = '/testdata/test1/testfile1.json'
            let f = undefined
            let r = h.getFilePath(d, f)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).toEqual(expected);
        });

        it('Get 6', async () => {
            let d = undefined
            let f = '/testdata/test1/testfile1.json'
            let r = h.getFilePath(d, f)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).toEqual(expected);
        });

    });


    describe('CRUD', () => {

        let d = './testdata/test1'
        let f = "testfile1.json"
        let f2 = "testfile2.json"
        let r = {
            "@type": "Thing",
            "@id": "https://www.test.com/thing1#thing",
            "name": "Thing1"
        }
        let c = JSON.stringify(r, null, 4)

        it('Delete file if exists', async () => {
            let r = await h.delete(d, f)
            let exists = await h.exists(d, f)
            expect(exists).toBe(false);
        });

        it('Create file', async () => {
            let r = await h.save(d, f, c)
            let exists = await h.exists(d, f)
            expect(exists).toBe(true);
        });

        it('Load file', async () => {
            let content = await h.load(d, f)
            expect(content).toBe(c);
        });

        it('Create file2', async () => {
            let r = await h.save(d, f2, c)
            let exists = await h.exists(d, f2)
            expect(exists).toBe(true);
        });

        it('List files', async () => {
            let r = await h.list(d)

            expect(r.includes(f)).toBe(true);
            expect(r.includes(f2)).toBe(true);
        });





        it('Delete file', async () => {
            let r = await h.delete(d, f)
            let exists = await h.exists(d, f)
            expect(exists).toBe(false);
        });

        it('Delete file2', async () => {
            let r = await h.delete(d, f2)
            let exists = await h.exists(d, f)
            expect(exists).toBe(false);
        });

        it('List files', async () => {
            let r = await h.list(d)

            expect(r.length).toBe(0);
        });


    });


    describe('Test takedown', () => {

        it('Delete test directory', async () => {
            let d = '/testdata'
            
            let r = h.dir.delete(d)
            let expected = "/testdata/test1/testfile1.json"

            expect(r).not.toEqual(undefined);
        });
    })


})
