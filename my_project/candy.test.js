const Candy = require('./candy');

describe('Candy', () => {
  it('returns the name of a candy', () => {
    const candy = new Candy('Mars', 4.99);
    const expected = candy.getName();
    expect(expected).toEqual('Mars');
  });
  it('returns the price of a candy', () => {
    const candy = new Candy('Mars', 4.99);
    const expected = candy.getPrice();
    expect(expected).toEqual(4.99);
  });
});