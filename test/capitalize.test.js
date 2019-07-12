const capitalize = require('../src/capitalize');

test('capitalize', () => {
  expect(capitalize('batmobile')).toMatch('Batmobile');
});

test('capitalize', () => {
  expect(capitalize('cowabunga')).toMatch('Cowabunga');
});

test('capitalize', () => {
  expect(capitalize('rehearse')).toMatch('Rehearse');
});
