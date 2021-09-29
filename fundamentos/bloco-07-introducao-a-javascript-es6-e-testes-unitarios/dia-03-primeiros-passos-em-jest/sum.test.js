const sum = require('./sum');

test('sums two values', () => {
  expect(sum(4,5)).toBe(9);
});

test('sums two values', () => {
  expect(sum(0,0)).toBe(0);
});

test('sums throw an error if a char parameter', () => {
  expect(_ => sum(4,"5")).toThrow();
});

test('sums throw an \'parameters must be numbers\' error if a char parameter', () => {
  expect(_ => sum(4,"5")).toThrowError(new Error('parameters must be numbers'));
});