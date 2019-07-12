const reverse = require('../src/reverse');

test('reverse', () => {
  expect(reverse('car')).toMatch('rac');
});

test('reverse', () => {
  expect(reverse('tree')).toMatch('eert');
});

test('reverse', () => {
  expect(reverse('wizard')).toMatch('draziw');
});
