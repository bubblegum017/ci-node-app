
const assert = require('assert');
const add = require('./app');

// Test cases
try {
  assert.strictEqual(add(1, 2), 3);
  assert.strictEqual(add(-1, 1), 0);
  assert.strictEqual(add(0, 0), 0);

  console.log('All tests passed!');
} catch (error) {
  console.error('Test failed:', error.message);
}