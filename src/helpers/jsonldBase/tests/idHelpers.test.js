import { setTempID, assignId, replaceIds } from '../src/idHelpers.js';

describe('idHelpers', () => {
  it('assigns temporary _: IDs to objects missing @id', () => {
    const input = { '@type': 'Thing', name: 'Item' };
    const result = assignId(input);
    expect(result['@id']).toMatch(/^_:/);
  });

  it('aliases setTempID to assignId behavior', () => {
    const input = { '@type': 'Thing' };
    const result = setTempID(input);
    expect(result['@id']).toBeDefined();
  });

  it('replaces IDs using map or array definitions', () => {
    const record = { '@id': '_:123', name: 'Test', friend: { '@id': '_:123' } };
    const idsMap = [{ replacee: '_:123', replacer: 'http://example.com/123' }];
    const result = replaceIds(record, idsMap);
    expect(result['@id']).toBe('http://example.com/123');
  });
});