const sum = require('./exploration101');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
test ('check a string variable', () => {
  expect(showText2_check);  //failed attempt to find the name of the function in brackets
});
*/

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test ('six divided by two is three', () => {
  expect(6 / 2).toBe(4);
});