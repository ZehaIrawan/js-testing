const caesar = require('../src/caesar');

test('caesar cypher lowercase', () => {
  expect(caesar('awesomeness', 4)).toMatch(
    'eaiwsqiriww',
  );
});

test('caesar cypher mixed', () => {
  expect(caesar('CamelCase', 11)).toMatch('NlxpwNldp');
});

test('caesar cypher punctuation', () => {
  expect(caesar('attack at dawn!!!', 8)).toMatch(
    'ibbiks ib liev!!!',
  );
});
