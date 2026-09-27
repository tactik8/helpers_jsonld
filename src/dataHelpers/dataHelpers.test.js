import {dataHelpers as h} from './dataHelpers.js'


describe('URL Helpers ', () => {




    describe('Get Datatype', () => {

        it('Url', () => {

            let value = 'https://www.test.com'

            let expected = 'url string'
            
            let result = h.getDataType(value)
            
            expect(result).toEqual(expected);

        });

         it('Array of urls', () => {

            let value = ['https://www.test.com', 'https://www.test2.com']

            let expected = 'array of [url string]'
            
            let result = h.getDataType(value)
            
            expect(result).toEqual(expected);

        });

         it('Array of mixed', () => {

            let value = ['https://www.test.com', '2024-01-01']

            let expected = 'array of [url string|date string]'
            
            let result = h.getDataType(value)
            
            expect(result).toEqual(expected);

        });

          it('jsonld', () => {

            let value = { "@type": "Thing", "@id": "https://www.test.com/thing#thing1", "name": "thing1"}

            let expected = 'jsonld Thing'
            
            let result = h.getDataType(value)
            
            expect(result).toEqual(expected);

        });

         it('json string', () => {

            let value = { "@type": "Thing", "@id": "https://www.test.com/thing#thing1", "name": "thing1"}

            let expected = 'json string'
            
            let result = h.getDataType(JSON.stringify(value))
            
            expect(result).toEqual(expected);

        });

       
    })



})