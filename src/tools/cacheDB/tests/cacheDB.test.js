import { CacheDB } from '../cacheDB.js';
import { jsonldBase as h } from '../../../helpers/jsonldBase/jsonldBase.js'
import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals'



describe('CacheDB (Real Implementations, No Mocks)', () => {
    let db

    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    describe('Constructor & Configuration', () => {
        test('initializes with a valid numeric TTL', () => {
            db = new CacheDB(5000)
            expect(db._expiryDuration).toBe(5000)
            expect(db._cache).toEqual({})
            expect(db._searchCache).toEqual({})
        })

        test('parses numeric string TTL', () => {
            db = new CacheDB('3000')
            expect(db._expiryDuration).toBe(3000)
        })

        test('sets expiryDuration to undefined for non-numeric input', () => {
            expect(new CacheDB()._expiryDuration).toBeUndefined()
            expect(new CacheDB('not-a-number')._expiryDuration).toBeUndefined()
            expect(new CacheDB(NaN)._expiryDuration).toBeUndefined()
        })
    })

    describe('set() and post()', () => {
        beforeEach(() => {
            db = new CacheDB(10000)
        })

        test('stores a single record and populates modifiedDate', () => {
            const record = { '@id': 'https://example.com/record/1', name: 'Item 1' }
            db.set(record)

            const stored = db._cache['https://example.com/record/1']
            expect(stored).toBeDefined()
            expect(stored.value).toMatchObject({ '@id': 'https://example.com/record/1' })
            expect(stored.modifiedDate).toBeInstanceOf(Date)
        })

        test('stores multiple records when given an array', () => {
            const records = [
                { '@id': 'https://example.com/record/1', name: 'Item 1' },
                { '@id': 'https://example.com/record/2', name: 'Item 2' }
            ]
            db.set(records)

            expect(db._cache['https://example.com/record/1']).toBeDefined()
            expect(db._cache['https://example.com/record/2']).toBeDefined()
        })

        test('preserves existing entity payload when incoming record is only a reference', () => {
            const fullRecord = { '@id': 'https://example.com/record/1', name: 'Detailed Entity', description: 'Real content' }
            const referenceRecord = { '@id': 'https://example.com/record/1' }

            db.set(fullRecord)
            db.set(referenceRecord)

            const cached = db.get('https://example.com/record/1', false)
            //expect(cachedname).toBe(fullRecord)
            expect(cached.name).toBe('Detailed Entity')
        })

        test('post() acts as an exact alias to set()', () => {
            const record = { '@id': 'https://example.com/record/post-test', title: 'Post Alias' }
            db.post(record)

            expect(db._cache['https://example.com/record/post-test']).toBeDefined()
        })
    })

    describe('get() and getAll()', () => {
        beforeEach(() => {
            db = new CacheDB(10000)
        })

        test('returns undefined for non-existent keys', () => {
            expect(db.get('https://example.com/missing')).toBeUndefined()
        })

        test('retrieves record with raw values when expand=false', () => {
            const record = { '@id': 'https://example.com/record/1', name: 'Raw Record' }
            db.set(record)

            const retrieved = db.get('https://example.com/record/1', false)
            expect(retrieved['@id']).toBe('https://example.com/record/1')
            expect(retrieved.name).toBe('Raw Record')
        })

        test('retrieves and simplifies record with expand=true by default', () => {
            const record = { '@id': 'https://example.com/record/1', name: 'Expanded Record' }
            db.set(record)

            const retrieved = db.get('https://example.com/record/1')
            expect(retrieved).toBeDefined()
            expect(retrieved['@id'] || retrieved.id).toBeDefined()
        })

        test('resolves batch requests when passed an array of IDs', () => {
            const items = [
                { '@id': 'https://example.com/record/1', name: 'One' },
                { '@id': 'https://example.com/record/2', name: 'Two' }
            ]
            db.set(items)

            const results = db.get(['https://example.com/record/1', 'https://example.com/record/2'], false)
            expect(Array.isArray(results)).toBe(true)
            expect(results).toHaveLength(2)
            expect(results[0].name).toBe('One')
            expect(results[1].name).toBe('Two')
        })

        test('getAll() returns all currently stored records', () => {
            db.set([
                { '@id': 'https://example.com/record/1', name: 'One' },
                { '@id': 'https://example.com/record/2', name: 'Two' }
            ])

            const all = db.getAll(false)
            expect(Array.isArray(all)).toBe(true)
            expect(all).toHaveLength(2)
        })
    })

    describe('Search Methods (setSearch & getSearch)', () => {
        beforeEach(() => {
            db = new CacheDB(10000)
        })

        test('stores results across both primary cache and search query cache', () => {
            const results = [{ '@id': 'https://example.com/items/1', title: 'Result 1' }]
            db.setSearch('type:Item', results)

            expect(db._cache['https://example.com/items/1']).toBeDefined()
            expect(db._searchCache['type:Item']).toBeDefined()
            expect(db._searchCache['type:Item'].modifiedDate).toBeInstanceOf(Date)
        })

        test('getSearch() defaults to "all" filter when called with no arguments', () => {
            const results = [{ '@id': 'https://example.com/items/all-1', title: 'Default Item' }]
            db.setSearch('all', results)

            const retrieved = db.getSearch()
            expect(retrieved).toBeDefined()
            expect(Array.isArray(retrieved)).toBe(true)
        })

        test('getSearch() returns empty array for uncached queries', () => {
            expect(db.getSearch('unknown-filter')).toEqual([])
        })
    })

    describe('Edge Cases', () => {
        test('returns undefined when cache entry is missing modifiedDate', () => {
            db = new CacheDB(5000)
            db._cache['corrupt'] = { value: { '@id': 'corrupt' } }

            expect(db.get('corrupt')).toBeUndefined()
        })

        test('returns undefined when search entry is missing modifiedDate', () => {
            db = new CacheDB(5000)
            db._searchCache['corrupt-query'] = { value: [] }

            expect(db.getSearch('corrupt-query')).toBeUndefined()
        })

        test('handles empty array batch inputs', () => {
            db = new CacheDB(5000)
            expect(db.get([])).toEqual([])
        })

        test('handles null and undefined identifiers safely', () => {
            db = new CacheDB(5000)
            expect(db.get(null)).toBeUndefined()
            expect(db.get(undefined)).toBeUndefined()
        })

        test('maintains records across timer ticks when no expiry is configured', () => {
            db = new CacheDB() // undefined expiry
            db.set({ '@id': 'https://example.com/persistent', name: 'Persists' })

            jest.advanceTimersByTime(100000)
            expect(db.get('https://example.com/persistent', false)).toBeDefined()
        })
    })
})