const calculator = require('./calculator');

test('add', () => {
  expect(calculator.add(5, 2)).toEqual(7);
});

test('add', () => {
  expect(calculator.add(10, 3)).toEqual(13);
});

test('subtract', () => {
  expect(calculator.subtract(5, 2)).toEqual(3);
});

test('subtract', () => {
  expect(calculator.subtract(10, 3)).toEqual(7);
});

test('multiply', () => {
  expect(calculator.multiply(5, 2)).toEqual(10);
});

test('multiply', () => {
  expect(calculator.multiply(10, 3)).toEqual(30);
});

test('divide', () => {
  expect(calculator.divide(6, 2)).toEqual(3);
});

test('divide', () => {
  expect(calculator.divide(12, 3)).toEqual(4);
});
