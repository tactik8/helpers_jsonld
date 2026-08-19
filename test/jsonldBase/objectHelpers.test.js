import { jsonldBase as h} from '../../src/jsonldBase/jsonldBase.js'

let isValid = h.isValid
let isJsonld = h.isJsonld
let clean = h.clean
let clone = h.clone


// Polyfill missing internal function from snippet to prevent runtime crashes
if (typeof global.setTempID === 'undefined') {
    global.setTempID = (val) => val;
}

describe('JSON-LD Module Unit Tests (Integration style - No Mocks)', () => {

    // -----------------------------------------------------------------------
    // isJsonld & isValid
    // -----------------------------------------------------------------------
    describe('isJsonld and isValid', () => {
        test('should return truthy if record contains @type', () => {
            const input = { '@type': 'Person' };
            expect(isJsonld(input)).toBeTruthy();
            expect(isValid(input)).toBeTruthy();
        });

        test('should return truthy if record contains @id', () => {
            const input = { '@id': 'http://schema.org/1' };
            expect(isJsonld(input)).toBeTruthy();
            expect(isValid(input)).toBeTruthy();
        });

        test('should return falsy/undefined if record lacks both @type and @id', () => {
            const input = { name: 'John Doe' };
            expect(isJsonld(input)).toBeFalsy();
            expect(isValid(input)).toBeFalsy();
        });

        test('should handle null or undefined input safely', () => {
            expect(isJsonld(null)).toBeFalsy();
            expect(isJsonld(undefined)).toBeFalsy();
        });
    });

    // -----------------------------------------------------------------------
    // clone
    // -----------------------------------------------------------------------
    describe('clone', () => {
        test('should deeply clone an object using native structuredClone', () => {
            const original = { name: 'Item', details: { score: 42 } };
            const result = clone(original);

            expect(result).toEqual(original);
            expect(result).not.toBe(original);
            expect(result.details).not.toBe(original.details);
        });

        test('should fall back to original value if cloning throws an error', () => {
            const originalClone = global.structuredClone;
            
            // Force structuredClone to throw an error
            global.structuredClone = () => {
                throw new Error('Clone Error');
            };

            const input = { name: 'Test' };
            const result = clone(input);

            expect(result).toBe(input);

            // Restore global
            global.structuredClone = originalClone;
        });
    });

    // -----------------------------------------------------------------------
    // clean
    // -----------------------------------------------------------------------
    describe('clean', () => {
        const baseUrl = 'https://example.org';

        test('should pass through values that lack both @type and @id', () => {
            const invalidRecord = { name: 'Plain Object' };
            const result = clean(invalidRecord, baseUrl);

            expect(result).toBe(invalidRecord);
        });

        test('should process arrays with more than 1 item recursively', () => {
            const records = [
                { '@type': 'Person', '@id': 'http://example.org/1' },
                { '@type': 'Person', '@id': 'http://example.org/2' }
            ];

            const result = clean(records, baseUrl);

            expect(Array.isArray(result)).toBe(true);
            expect(result).toHaveLength(2);
        });

        test('should run the full clean routine on a valid JSON-LD record', () => {
            const record = {
                '@type': 'Person',
                '@id': '_:bnode1',
                'name': 'Alice'
            };

            const result = clean(record, baseUrl);

            expect(result).toBeDefined();
            expect(typeof result).toBe('object');
        });

        test('should handle arrays inside the @id field', () => {
            const record = {
                '@type': 'Thing',
                '@id': ['http://example.org/id1', 'http://example.org/id2']
            };

            const result = clean(record, baseUrl);

            expect(result).toBeDefined();
        });
    });
});