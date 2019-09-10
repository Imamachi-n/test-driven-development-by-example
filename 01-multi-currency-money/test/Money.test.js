const {
  expect
} = require('chai');
const Dollar = require('../Dollar');

describe('money', () => {
  it('should return multiple number', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).to.eq(10);
  });
});