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


test('string contains the word computer', () => {
  expect('This will be read by the computer').toContain('computer');
});


test('string contains the word computer', () => {
  expect('This will be read by thecomputer').toContain('computer');
});


test('string contains the word computer', () => {
  expect('This will be read by thecomputer!').toContain('computer');
});


test('string contains the word computer', () => {
  expect('This will be read by the computer!').toContain('computer');
});


test('string contains the word computer', () => { // fails by design
  expect('This will be read by the computer!').not.toContain('computer');
});


test('string contains the word computer', () => {
  expect('This will be read by the computer!').not.toContain('keyboard');
});


test('5 is close to 6', () => { // fails as expected difference is > 0.005
  expect(5).toBeCloseTo(6);
});


test('5 is not close to 6', () => {
  expect(5).not.toBeCloseTo(6);
});


test('5 is close to 5.006', () => { // fails as expected difference is > 0.005
  expect(5).toBeCloseTo(5.006); // Received difference:   0.006000000000000227
});


test('4 is close to 4.006', () => { // fails as expected difference is > 0.005
  expect(4).toBeCloseTo(4.006); // Received difference:   0.006000000000000227
});


test('4 is close to 4.016', () => { // fails as expected difference is > 0.005
  expect(4).toBeCloseTo(4.016); // Received difference:   0.016000000000000014
});


test('4 is close to 4.007', () => { // fails as expected difference is > 0.005
  expect(4).toBeCloseTo(4.007); // Received difference:   0.006999999999999673
});


test('2 times 2 is close to 4.007', () => { // fails as expected difference is > 0.005
  expect(2*2).toBeCloseTo(4.007); // Received difference:   0.006999999999999673
});


test('2 divided by 2 is close to 4.007', () => { // fails as expected difference is > 0.005
  expect(2/2).toBeCloseTo(4.007); // Received difference:   3.0069999999999997
});


/////////////

test('0 is close to 0.0049', () => {
  expect(0).toBeCloseTo(0.0049);
});


test('0 is close to 0.00499', () => {
  expect(0).toBeCloseTo(0.00499);
});


test('0 is close to 0.004999', () => {
  expect(0).toBeCloseTo(0.004999);
});


test('0 is close to 0.0049999', () => {
  expect(0).toBeCloseTo(0.0049999);
});


test('0 is close to 0.00499999', () => {
  expect(0).toBeCloseTo(0.00499999);
});

test('0 is close to 0.004999999', () => {
  expect(0).toBeCloseTo(0.004999999);
});


test('0 is close to 0.00499999999999999999999999999999999999999999999999', () => { // fails as expected diffrence is not < 0.005 probably due to precision 2
  expect(0).toBeCloseTo(0.00499999999999999999999999999999999999999999999999); // Received difference:   0.005
});


test('0 is close to 0.005', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005); // Received difference:   0.005
});


test('0 is close to 0.005000000000000000000000000000000000000000000000001', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005000000000000000000000000000000000000000000000001); // Received difference:   0.005
});


test('0 is close to 0.005000000000000000000000000000000000000000000000002', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005000000000000000000000000000000000000000000000002); // Received difference:   0.005
});


test('0 is close to 0.005000000000000000000000100000000000000000000000002', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005000000000000000000000100000000000000000000000002); // Received difference:   0.005
});


test('0 is close to 0.005000000000000000100000100000000000000000000000002', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005000000000000000100000100000000000000000000000002); // Received difference:   0.005
});


test('0 is close to 0.005000000000010000000000100000000000000000000000002', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005000000000010000000000100000000000000000000000002); // Received difference:   0.00500000000001
});


test('0 is close to 0.005000000000100000000000100000000000000000000000002', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.005000000000100000000000100000000000000000000000002); // Received difference:   0.0050000000001
});


test('0 is close to 0.00501', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.00501); // Received difference:   0.00501
});


test('0 is close to 0.0051', () => { // fails as expected difference is not < 0.005
  expect(0).toBeCloseTo(0.0051); // Received difference:   0.0051
});


test('0 is close to 0.006', () => { // fails as expected difference is > 0.005
  expect(0).toBeCloseTo(0.006); // Received difference:   0.006
});


test('0 is close to 0.007', () => { // fails as expected difference is > 0.005
  expect(0).toBeCloseTo(0.007); // Received difference:   0.007
});


test('0.01 is close to 0.016', () => { // fails as expected difference is > 0.005
  expect(0.01).toBeCloseTo(0.016); // Received difference:   0.006
});


test('0.01 is close to 0.017', () => { // fails as expected difference is > 0.005
  expect(0.01).toBeCloseTo(0.017); // Received difference:   0.007000000000000001
});


test('0.1 is close to 0.107', () => { // fails as expected difference is > 0.005
  expect(0.1).toBeCloseTo(0.107); // Received difference:   0.006999999999999992
});


test('1 is close to 1.005', () => { // passes unexpectedly as the difference is not < 0.005
  expect(1).toBeCloseTo(1.005);
});


test('1 is close to 1.00501', () => { // fails as expected difference is > 0.005
  expect(1).toBeCloseTo(1.00501); // Received difference: 0.005009999999999959
});


test('1 is close to 1.0051', () => { // fails as expected difference is > 0.005
  expect(1).toBeCloseTo(1.0051); // Received difference: 0.0051000000000001044
});


test('1 is close to 1.007', () => { // fails as expected difference is > 0.005
  expect(1).toBeCloseTo(1.007); // Received difference:   0.006999999999999895
});


test('2 is close to 2.005', () => { // passes unexpectedly as the difference is not < 0.005
  expect(2).toBeCloseTo(2.005);
});


test('10 is close to 10.0049', () => { // passes as expected
  expect(10).toBeCloseTo(10.0049);
});


test('10 is close to 10.005', () => { // fails as expected but somehow the calculated difference is > 0.005
  expect(10).toBeCloseTo(10.005); // Received difference: 0.005000000000000782
});


test('100 is close to 100.005', () => { // passes unexpectedly as the difference is not < 0.005
  expect(100).toBeCloseTo(100.005);
});


test('100 is close to 100.0051', () => { // fails as expected difference is > 0.005
  expect(100).toBeCloseTo(100.0051); // Received difference: 0.005099999999998772
});


test('1000 is close to 1000.005', () => { // passes unexpectedly as the difference is not < 0.005
  expect(1000).toBeCloseTo(1000.005);
});


test('10,000 is close to 10,000.005', () => { // passes unexpectedly as the difference is not < 0.005
  expect(10000).toBeCloseTo(10000.005);
});


test('100,000 is close to 100,000.005', () => { // passes unexpectedly as the difference is not < 0.005
  expect(10000).toBeCloseTo(10000.005);
});


test('1000,000 is close to 1000,000.005', () => { // fails as expected but somehow the calculated difference is > 0.005
  expect(1000000).toBeCloseTo(1000000.005); // Received difference: 0.005000000004656613
});