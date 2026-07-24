import { jest } from '@jest/globals';

// Mock dependencies if required by your environment setup
jest.mock('../dotHelpers/dotHelpers.js', () => ({
  default: {
    get: (obj, path) => path.split('.').reduce((acc, part) => acc?.[part], obj),
    set: (obj, path, val) => {
      const parts = path.split('.');
      const last = parts.pop();
      const target = parts.reduce((acc, part) => (acc[part] = acc[part] || {}), obj);
      target[last] = val;
      return obj;
    }
  }
}));

jest.mock('../recordIdHelpers/recordIdHelpers.js', () => ({
  validate: () => true,
  getStandardID: (record) => record['@id'],
  getGenericRecordID: () => 'http://example.org/generic'
}));

import {
  DB,
  isValid,
  isJsonld,
  record_id,
  record_type,
  ref,
  eq,
  isEqual,
  simplify
} from './your-db-file.js'; // Adjust path to target file

describe('DB Class Tests', () => {
  let db;

  beforeEach(() => {
    db = new DB();
  });

  describe('CRUD Operations', () => {
    test('should set and get a single JSON-LD record', () => {
      const record = {
        '@id': 'http://example.org/1',
        '@type': 'Person',
        name: 'Alice'
      };

      db.set(record);

      expect(db.length()).toBe(1);
      const retrieved = db.get('http://example.org/1');
      expect(retrieved['@id']).toBe('http://example.org/1');
      expect(retrieved.name).toBe('Alice');
    });

    test('should accept arrays when using set()', () => {
      const records = [
        { '@id': 'http://example.org/1', '@type': 'Item', name: 'One' },
        { '@id': 'http://example.org/2', '@type': 'Item', name: 'Two' }
      ];

      db.set(records);

      expect(db.length()).toBe(2);
      expect(db.get('http://example.org/1').name).toBe('One');
      expect(db.get('http://example.org/2').name).toBe('Two');
    });

    test('post() should act as an alias for set()', () => {
      const record = { '@id': 'http://example.org/3', name: 'Bob' };
      db.post(record);

      expect(db.get('http://example.org/3').name).toBe('Bob');
    });

    test('delete() should remove records by ID', () => {
      const record = { '@id': 'http://example.org/1', name: 'Alice' };
      db.set(record);
      expect(db.length()).toBe(1);

      db.delete('http://example.org/1');
      expect(db.length()).toBe(0);
      expect(db.get('http://example.org/1')).toBeUndefined();
    });

    test('records getter should return all stored records', () => {
      db.set({ '@id': 'http://example.org/1', name: 'Alice' });
      db.set({ '@id': 'http://example.org/2', name: 'Bob' });

      const records = db.records;
      expect(records).toHaveLength(2);
      expect(records.map(r => r['@id'])).toEqual([
        'http://example.org/1',
        'http://example.org/2'
      ]);
    });
  });

  describe('Property Helpers', () => {
    test('getValue and setValue should interact with record attributes', () => {
      const record = { '@id': 'http://example.org/1', name: 'Charlie' };
      db.set(record);

      const val = db.getValue('http://example.org/1', 'name');
      expect(val).toBe('Charlie');

      db.setValue('http://example.org/1', 'age', 30);
      expect(db.getValue('http://example.org/1', 'age')).toBe(30);
    });

    test('getValue should return default value when property is missing', () => {
      const record = { '@id': 'http://example.org/1' };
      db.set(record);

      const val = db.getValue('http://example.org/1', 'missingProp', 0, 'Default');
      expect(val).toBe('Default');
    });
  });

  describe('Subscriptions and Broadcasts', () => {
    test('should trigger specific record callbacks on change', () => {
      const mockCallback = jest.fn();
      const id = 'http://example.org/1';

      db.subscribe(id, mockCallback);

      // Mutate to trigger broadcast
      db.set({ '@id': id, name: 'Initial' });
      db.set({ '@id': id, name: 'Updated' });

      expect(mockCallback).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'Updated' })
      );
    });

    test('should trigger wildcard/all callbacks on any record update', () => {
      const mockCallback = jest.fn();
      db.subscribe('all', mockCallback);

      db.set({ '@id': 'http://example.org/1', name: 'Alice' });

      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    test('unsubscribe should stop triggering callbacks', () => {
      const mockCallback = jest.fn();
      const id = 'http://example.org/1';

      db.subscribe(id, mockCallback);
      db.unsubscribe(id, mockCallback);

      db.set({ '@id': id, name: 'Alice' });

      expect(mockCallback).not.toHaveBeenCalled();
    });
  });

  describe('Iterators and Serialization', () => {
    test('Symbol.iterator should iterate over stored values', () => {
      db.set({ '@id': 'http://example.org/1', name: 'A' });
      db.set({ '@id': 'http://example.org/2', name: 'B' });

      const items = [...db];
      expect(items).toHaveLength(2);
      expect(items[0].name).toBe('A');
    });

    test('toString() and toJSON() output formatting', () => {
      db.set({ '@id': 'http://example.org/1', name: 'A' });

      expect(db.toString()).toContain('JSONLD Array items: 1');
      expect(JSON.parse(db.toJSON())).toHaveLength(1);
    });
  });
});

describe('JSON-LD Exported Helper Functions', () => {
  test('isJsonld and isValid identify valid records', () => {
    expect(isJsonld({ '@id': 'http://example.org/1' })).toBeTruthy();
    expect(isJsonld({ '@type': 'Thing' })).toBeTruthy();
    expect(isJsonld({ name: 'Invalid' })).toBeFalsy();
    expect(isValid({ '@id': '1' })).toBe(isJsonld({ '@id': '1' }));
  });

  test('record_id and record_type extraction', () => {
    const item = { '@id': 'http://example.org/1', '@type': 'Article' };
    expect(record_id(item)).toBe('http://example.org/1');
    expect(record_type(item)).toBe('Article');
  });

  test('ref should construct an id reference wrapper', () => {
    const record = { '@id': 'http://example.org/ref1' };
    expect(ref(record)).toEqual({ '@id': 'http://example.org/ref1' });
    expect(ref('http://example.org/ref1')).toEqual({ '@id': 'http://example.org/ref1' });
    expect(ref(null)).toBeUndefined();
  });

  test('isEqual deep structural comparison', () => {
    const objA = { b: 2, a: 1 };
    const objB = { a: 1, b: 2 };
    const objC = { a: 1, b: 3 };

    expect(isEqual(objA, objB)).toBe(true);
    expect(isEqual(objA, objC)).toBe(false);
  });

  test('simplify should strip empty properties or clean arrays', () => {
    const dirty = {
      '@id': '1',
      emptyArr: [],
      valid: 'value'
    };

    const cleaned = simplify(dirty);
    expect(cleaned.emptyArr).toBeUndefined();
    expect(cleaned.valid).toBe('value');
  });
});