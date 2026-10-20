import { isJsonld, isValid, clean, clone, patch } from '../src/objectHelpers.js';

describe('objectHelpers', () => {
  describe('isJsonld & isValid', () => {
    it('validates presence of @id or @type', () => {
      expect(isJsonld({ '@id': '1' })).toBeTruthy();
      expect(isJsonld({ '@type': 'Person' })).toBeTruthy();
      expect(isJsonld({ name: 'Alice' })).toBeFalsy();
      expect(isValid({ '@id': '1' })).toBeTruthy();
    });
  });

  describe('clone', () => {
    it('creates a deep copy of the object', () => {
      const original = { a: 1, b: { c: 2 } };
      const cloned = clone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
    });
  });

  describe('clean', () => {
    it('returns primitive values unchanged', () => {
      expect(clean(null)).toBeNull();
      expect(clean('text')).toBe('text');
    });
  });


   describe('patch', () => {
    it('patch', () => {

      let t1 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thign1#thing",
        "name": "thing1"
      }
      let t2 = {
        "@type": "Thing",
        "@id": "https://www.test.com/thign1#thing",
        "name": "thing1new"
      }

      t1 = patch(t1, t2)


      expect(t1.name).toEqual(['thing1new']);
    });
  });



});