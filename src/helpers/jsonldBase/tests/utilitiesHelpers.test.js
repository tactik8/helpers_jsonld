import { randomUUID, isArray, toArray, toSingle, _utilGetId } from '../src/utilitiesHelpers.js';

describe('utilitiesHelpers', () => {
  describe('randomUUID', () => {
    it('generates a valid v4 UUID string', () => {
      const uuid = randomUUID();
      expect(typeof uuid).toBe('string');
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
  });

  describe('isArray', () => {
    it('returns true for arrays and false for non-arrays', () => {
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray([])).toBe(true);
      expect(isArray('string')).toBe(false);
      expect(isArray({ key: 'val' })).toBe(false);
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
    });
  });

  describe('toArray', () => {
    it('converts single values to an array and filters undefined', () => {
      expect(toArray('item')).toEqual(['item']);
      expect(toArray(['item'])).toEqual(['item']);
      expect(toArray(undefined)).toEqual([]);
      expect(toArray([1, undefined, 3])).toEqual([1, 3]);
    });
  });

  describe('toSingle', () => {
    it('returns the first element or undefined', () => {
      expect(toSingle(['a', 'b'])).toBe('a');
      expect(toSingle('a')).toBe('a');
      expect(toSingle([])).toBeUndefined();
      expect(toSingle(undefined)).toBeUndefined();
    });
  });

  describe('_utilGetId', () => {
    it('extracts @id from objects, arrays, or primitive values', () => {
      expect(_utilGetId({ '@id': 'http://example.com/1' })).toBe('http://example.com/1');
      expect(_utilGetId([{ '@id': 'http://example.com/2' }])).toBe('http://example.com/2');
      expect(_utilGetId('http://example.com/3')).toBe('http://example.com/3');
      expect(_utilGetId(null)).toBeUndefined();
    });
  });
});