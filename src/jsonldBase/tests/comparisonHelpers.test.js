import { eq, isEqual } from '../src/comparisonHelpers.js';

describe('comparisonHelpers', () => {
  describe('eq', () => {
    it('compares null, undefined, and plain values correctly', () => {
      expect(eq(undefined, undefined)).toBe(true);
      expect(eq(null, null)).toBe(true);
      expect(eq(undefined, null)).toBe(false);
      expect(eq('a', undefined)).toBe(false);
    });

    it('compares records after stripping child elements and sorting keys', () => {
      const obj1 = { name: 'Alice', '@id': '1', child: { '@id': '2', name: 'Bob' } };
      const obj2 = { '@id': '1', name: 'Alice', child: { '@id': '2' } };
      expect(eq(obj1, obj2)).toBe(true);
    });
  });

  describe('isEqual', () => {
    it('compares deep objects regardless of property insertion order', () => {
      const a = { z: 1, a: { y: 2, x: 3 } };
      const b = { a: { x: 3, y: 2 }, z: 1 };
      expect(isEqual(a, b)).toBe(true);
    });

    it('returns false when object values differ', () => {
      expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });
  });
});