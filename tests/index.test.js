const sum = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

const multi = require('../src/index');

test('multip 2 * 3 equals 6',() => {
  expect(multi.multiply(2, 3)).toBe(6);
});