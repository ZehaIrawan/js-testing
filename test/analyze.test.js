const analyze = require('./analyze');

test('analyze average', () => {
  expect(analyze.average([1, 8, 3, 4, 2, 6])).toBe(4);
});

test('analyze min', () => {
  expect(analyze.min([1, 8, 3, 4, 2, 6])).toBe(1);
});

test('analyze max', () => {
  expect(analyze.max([1, 8, 3, 4, 2, 6])).toBe(8);
});

test('analyze length', () => {
  expect(analyze.length([1, 8, 3, 4, 2, 6])).toBe(6);
});
