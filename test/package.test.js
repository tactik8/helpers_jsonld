




// test/integration.js
import helpers from '../src/index.js'

test('the library exports the expected functions', () => {
  expect(typeof helpers.getValue).toBe('function');
  expect(typeof helpers.records).toBe('object');
});

