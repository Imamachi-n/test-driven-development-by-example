const {
  expect
} = require('chai');
const Dollar = require('../Dollar');

describe('money', () => {
  it('should return multiple number', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).to.eq(10);
    product = five.times(3);
    expect(product.amount).to.eq(15);
  });

  it('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).to.be.true;
    expect(new Dollar(5).equals(new Dollar(6))).to.be.false;
  })
});