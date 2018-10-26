const sumTwoNumbers = require('./sumTwoNumbers');

test('adds 3 and 1 to equal 4', () => {
  expect(sumTwoNumbers(3, 1).toBe(4));
});
