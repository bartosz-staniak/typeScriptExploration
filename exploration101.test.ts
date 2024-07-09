const sum = require('./exploration101');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
test ('check a string variable', () => {
  expect(showText2_check);  //failed attempt to find the name of the function in brackets
});
*/

test ('six multiplied by two is 12', () => { // Duplicated the check to observe behavior of the multiplied check when put in a non-consecutive position
  expect(6 * 2).toBe(12);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test ('six divided by two is three', () => {
  expect(6 / 2).toBe(3);
});

test ('six multiplied by two is 12', () => {
  expect(6 * 2).toBe(12);
});

test ('six multiplied by two is 12', () => { // Duplicated the check to observe behavior of the doubled check
  expect(6 * 2).toBe(12);
});

test('two plus two is not four', () => { // fails by design (reason for failing: expected boolean when received number)
  expect(2 + 2).toBe(!4);
});

test('one plus one is not four', () => { // fails against design WIP (reason for failing: expected boolean when received number)
  expect(1 + 1).toBe(!4);
});

test('two plus two is not four', () => { // fails by design
  expect(2 + 2).not.toBe(4);
});


test('one plus two is not four', () => {
  expect(1 + 2).not.toBe(4);
});

test('one plus two is not four', () => {
  expect(1 + 2).not.toBe(4);
});