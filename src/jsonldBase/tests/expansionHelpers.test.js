import { expand, strip, flatten, simplify } from '../src/expansionHelpers.js';

describe('expansionHelpers', () => {
  describe('expand', () => {
    it('expands nested reference links from the store map', () => {
      const store = new Map([
        ['1', { '@id': '1', name: 'Parent', child: { '@id': '2' } }],
        ['2', { '@id': '2', name: 'Child' }]
      ]);
      const record = { '@id': '1' };
      const result = expand(store, record);
      expect(result.child.name).toBe('Child');
    });

    it('handles cyclic dependencies without infinite recursion', () => {
      const store = new Map([
        ['1', { '@id': '1', friend: { '@id': '2' } }],
        ['2', { '@id': '2', friend: { '@id': '1' } }]
      ]);
      const result = expand(store, { '@id': '1' });
      expect(result['@id']).toBe('1');
    });
  });

  describe('strip', () => {
    it('replaces child entities with basic @id references', () => {
      const record = {
        '@id': '1',
        '@type': 'Person',
        child: { '@id': '2', '@type': 'Person', name: 'Bob' }
      };
      const result = strip(record);
      expect(result.child).toEqual({ '@id': '2' });
    });
  });

  describe('flatten', () => {
    it('flattens nested JSON-LD objects into an array of entities', () => {
      const record = {
        '@id': '1',
        '@type': 'Person',
        friend: { '@id': '2', '@type': 'Person', name: 'Bob' }
      };
      const result = flatten(record);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
      expect(result[0]['@id']).toBe('1');
    });
  });

  describe('simplify', () => {
    it('unwraps single-element arrays and deletes undefined keys', () => {
      const input = { name: ['Alice'], empty: undefined, details: { role: ['Admin'] } };
      const output = simplify(input);
      expect(output).toEqual({ name: 'Alice', details: { role: 'Admin' } });
    });

    it('returns undefined for empty arrays', () => {
      expect(simplify([])).toBeUndefined();
    });
  });
});