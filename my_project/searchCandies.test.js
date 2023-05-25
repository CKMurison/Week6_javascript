const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns candies starting with string, less than price', () => {
    const actual = searchCandies('Ma', 10);
    const expected = [ 'Mars', 'Maltesers' ];
    expect(actual).toEqual(expected);
  });

  it('returns candies starting with string, less than price', () => {
    const actual = searchCandies('P', 5);
    const expected = [ 'Pastila' ];
    expect(actual).toEqual(expected);
  });

  it('returns candies starting with string, less than price', () => {
    const actual = searchCandies('A', 5);
    const expected = [ 'Aero' ];
    expect(actual).toEqual(expected);
  });

  it('returns candies starting with string, less than price', () => {
    const actual = searchCandies('S', 10);
    const expected = [ 'Skitties', 'Skittles', 'Starburst' ];
    expect(actual).toEqual(expected);
  });
});