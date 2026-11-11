import { datapointHelpers as dph } from '../datapointHelpers.js';
import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js'
import {  describe,  it, expect } from '@jest/globals'


describe('comparisonHelpers', () => {
  describe('eq', () => {
    it('compares null, undefined, and plain values correctly', () => {
      
        let t = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "https://www.test.com/thing1#thing",
            "name": "thing1",
            "url": "https://www.test.com/thing1",
            "image":  {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "https://www.test.com/imageobject1#imageobject",
                "name": "image_1",
                "contentUrl": "https://placehold.co/600x400"
            }
            }


        let db = new dph.DatapointDB()

        db.add(t)

        let r = db.get('https://www.test.com/thing1#thing')

        expect(r.name).toEqual(t.name)


    });

    
  });

  });