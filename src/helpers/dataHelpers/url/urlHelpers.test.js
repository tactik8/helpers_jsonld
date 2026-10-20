import * as h from './urlHelpers.js'

describe('URL Helpers ', () => {




    describe('Clean', () => {

        it('Base url', () => {

            let baseUrl = 'https://www.test.com'

            let expected = 'https://www.test.com/'
            
            let result = h.clean(baseUrl)
            
            expect(result).toEqual(expected);

        });

         it('URL with path', () => {

            let baseUrl = 'https://www.test.com/main'

            let expected = 'https://www.test.com/main'
            
            let result = h.clean(baseUrl)
            
            expect(result).toEqual(expected);

        });

         it('Edge case - no url', () => {

            let baseUrl = 'https://www.test.com/main'

            let expected = 'https://www.test.com/main'
            
            let result = h.clean("")
            
            expect(result).toEqual(undefined);

        });
    })


    describe('getUrl', () => {

        it('Base url', () => {

            let baseUrl = 'https://www.test.com'
            let path = '/path1/path2'

            let expected = 'https://www.test.com/path1/path2'
            
            let result = h.getUrl(baseUrl, path)
            
            expect(result).toEqual(expected);

        });

        it('Base url with existing paths', () => {

            let baseUrl = 'https://www.test.com/path0'
            let path = '/path1/path2'

            let expected = 'https://www.test.com/path0/path1/path2'
            
            let result = h.getUrl(baseUrl, path)
            
            expect(result).toEqual(expected);

        });

         it('Base url with no path params', () => {

            let baseUrl = 'https://www.test.com/path0'
            let path = '/path1/path2'

            let expected = 'https://www.test.com/path0'
            
            let result = h.getUrl(baseUrl, "")
            
            expect(result).toEqual(expected);

        });
        it('Base url with no path params', () => {

            let baseUrl = 'https://www.test.com/path0'
            let path = '/path1/path2'

            let expected = 'https://www.test.com/path0'
            
            let result = h.getUrl(baseUrl, undefined)
            
            expect(result).toEqual(expected);

        });


        it('Base url with 2 path params as array', () => {

            let baseUrl = 'https://www.test.com/path0'
            let path = ['/path1/path2', '/path3/path4']

            let expected = 'https://www.test.com/path0/path1/path2/path3/path4'
            
            let result = h.getUrl(baseUrl, path)
            
            expect(result).toEqual(expected);

        });

       
    })

})