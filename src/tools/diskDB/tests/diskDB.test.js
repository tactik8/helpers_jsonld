import { DiskDB } from '../diskDB.js';

describe('diskDB', () => {
    describe('CRUD', () => {
        let d = './testdata/diskDB';
        let record = {
            '@type': 'Thing',
            '@id': 'https://www.test.com/thing1#thing',
            name: 'Thing1',
        };
        let record_id = record?.['@id'];
        let db = new DiskDB(d);

        it('Purge directory', async () => {
            let db = new DiskDB(d);
            await db.purge();
        });

        it('Check if record exists', async () => {
            let r = await db.exists(record_id);
            expect(r?.result).toEqual(undefined);
        });

        it('Check if record exists', async () => {
            let r = await db.get(record_id);
            expect(r?.result).toEqual(undefined);
        });

        it('Post', async () => {
            let a = await db.set(record);
            let r = await db.get(record_id);
            expect(r.actionStatus).toEqual('CompletedActionStatus');
        });

        it('Check if record exists', async () => {
            let r = await db.get(record_id);
            expect(r?.result).toEqual(record);
        });

        it('Delete record', async () => {
            let r = await db.delete(record_id);
            expect(r?.result).toEqual(undefined);
            expect(r?.actionStatus).toEqual('CompletedActionStatus');
        });

        it('Check if record exists', async () => {
            let r = await db.get(record_id);
            expect(r?.result).toEqual(undefined);
        });
    });

    describe('CRUD non indent', () => {
        let d = './testdata/diskDB';
        let record = {
            '@type': 'Thing',
            '@id': 'https://www.test.com/thing1#thing',
            name: 'Thing1',
        };
        let record_id = record?.['@id'];
        let db = new DiskDB(d);

        it('Purge directory', async () => {
            let db = new DiskDB(d, false);
            await db.purge();
        });

        it('Check if record exists', async () => {
            let r = await db.exists(record_id);
            expect(r?.result).toEqual(undefined);
        });

        it('Check if record exists', async () => {
            let r = await db.get(record_id);
            expect(r?.result).toEqual(undefined);
        });

        it('Post', async () => {
            let a = await db.set(record);
            let r = await db.get(record_id);
            expect(r.actionStatus).toEqual('CompletedActionStatus');
        });

        it('Check if record exists', async () => {
            let r = await db.get(record_id);
            expect(r?.result).toEqual(record);
        });

        it('Delete record', async () => {
            let r = await db.delete(record_id);
            expect(r?.result).toEqual(undefined);
            expect(r?.actionStatus).toEqual('CompletedActionStatus');
        });

        it('Check if record exists', async () => {
            let r = await db.get(record_id);
            expect(r?.result).toEqual();
        });
    });
});
