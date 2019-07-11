const caesar = require('./caesar');

test('caesar', () => {
  expect(caesar('abc', 1)).toMatch('bcd');
});

test('caesar', () => {
  expect(caesar('defendtheeastwallofthecastle', 1)).toMatch(
    'efgfoeuiffbtuxbmmpguifdbtumf'
  );
});

test('caesar', () => {
  expect(caesar('sendouttheknights', 25)).toMatch('rdmcntssgdjmhfgsr');
});
