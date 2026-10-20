import { isJsonld, isValid, clean, clone } from '../src/objectHelpers.js';

import { jsonldBase as h } from '../jsonldBase.js'

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




  describe('Get set values', () => {
    it('Basic', () => {

      let t = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "thing1",
        "other": {
          "@type": "Thing",
          "@id": "https://www.test.com/thing11#thing",
          "name": "thing11"
        },
        "other2": [
          {
            "@type": "Thing",
            "@id": "https://www.test.com/thing21#thing",
            "name": "thing21"
          }, {
            "@type": "Thing",
            "@id": "https://www.test.com/thing22#thing",
            "name": "thing22"
          },
        ]

      }

      expect(h.getValue(t, 'name')).toEqual('thing1')
      expect(h.getValue(t, 'other.name')).toEqual('thing11')
      expect(h.getValue(t, 'other2[1].name')).toEqual('thing22')

      expect(h.getValues(t, 'name')).toEqual(['thing1'])
      expect(h.getValues(t, 'other.name')).toEqual(['thing11'])
      expect(h.getValues(t, 'other2[1].name')).toEqual(['thing22'])

    });

    it('Basic', () => {

      let t = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "thing1",
        "other": {
          "@type": "Thing",
          "@id": "https://www.test.com/thing11#thing",
          "name": "thing11"
        },
        "other2": [
          {
            "@type": "Thing",
            "@id": "https://www.test.com/thing21#thing",
            "name": "thing21"
          }, {
            "@type": "Thing",
            "@id": "https://www.test.com/thing22#thing",
            "name": "thing22"
          },
        ]

      }

      t = h.setValue(t, 'name', 'thing1prime')
      t = h.setValue(t, 'other.name', 'thing11prime')
      t = h.setValue(t, 'other2[1].name', 'thing22prime')
      expect(h.getValue(t, 'name')).toEqual('thing1prime')
      expect(h.getValue(t, 'other.name')).toEqual('thing11prime')
      expect(h.getValue(t, 'other2[1].name')).toEqual('thing22prime')

      expect(h.getValues(t, 'name')).toEqual(['thing1prime'])
      expect(h.getValues(t, 'other.name')).toEqual(['thing11prime'])
      expect(h.getValues(t, 'other2[1].name')).toEqual(['thing22prime'])

    });

    it('Basic', () => {

      let t = {
        "@type": "Thing",
        "@id": "https://www.test.com/thing1#thing",
        "name": "thing1",
        "other": {
          "@type": "Thing",
          "@id": "https://www.test.com/thing11#thing",
          "name": "thing11"
        },
        "other2": [
          {
            "@type": "Thing",
            "@id": "https://www.test.com/thing21#thing",
            "name": "thing21"
          }, {
            "@type": "Thing",
            "@id": "https://www.test.com/thing22#thing",
            "name": "thing22"
          },
        ]

      }

      t = h.addValue(t, 'name', 'thing1prime')
      t = h.addValue(t, 'other.name', 'thing11prime')
      t = h.addValue(t, 'other2[1].name', 'thing22prime')

      expect(h.getValue(t, 'name')).toEqual('thing1')
      expect(h.getValue(t, 'other.name')).toEqual('thing11')
      expect(h.getValue(t, 'other2[1].name')).toEqual('thing22')

      expect(h.getValues(t, 'name')).toEqual(['thing1', 'thing1prime'])
      expect(h.getValues(t, 'other.name')).toEqual(['thing11', 'thing11prime'])
      expect(h.getValues(t, 'other2[1].name')).toEqual(['thing22', 'thing22prime'])

    });



  });



});