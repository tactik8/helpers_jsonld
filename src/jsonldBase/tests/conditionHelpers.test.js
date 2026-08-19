import { evaluate } from '../src/conditionHelpers.js';

describe('conditionHelpers', () => {
  const record = {
    '@id': 'http://example.com/1',
    age: 30,
    name: 'Alice',
    tags: ['admin', 'user']
  };

  it('evaluates logical $and and $or conditions', () => {
    expect(evaluate(record, { $and: [{ age: '$gt 20' }, { name: 'Alice' }] })).toBe(true);
    expect(evaluate(record, { $or: [{ age: '$lt 18' }, { name: 'Alice' }] })).toBe(true);
    expect(evaluate(record, { $and: [{ age: '$lt 18' }, { name: 'Alice' }] })).toBe(false);
  });

  it('evaluates string expression operators correctly', () => {
    expect(evaluate(record, { age: '$gt 25' })).toBe(true);
    expect(evaluate(record, { age: '$lt 25' })).toBe(false);
    expect(evaluate(record, { age: '$ge 30' })).toBe(true);
    expect(evaluate(record, { age: '$le 30' })).toBe(true);
  });

  it('evaluates object operator definitions', () => {
    expect(evaluate(record, { age: { $gt: 25 } })).toBe(true);
    expect(evaluate(record, { age: { $equal: 30 } })).toBe(true);
  });

  it('returns false gracefully when evaluating missing fields or invalid paths', () => {
    expect(evaluate(record, { nonexistent: '$equal test' })).toBe(false);
    expect(evaluate(null, { name: 'Alice' })).toBe(false);
  });
});