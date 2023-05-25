const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('reurns FizzBuzz when given a multiple of 3 & 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('reurns Buzz when given a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('reurns Fizz when given a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('reurns a number when no condtions met', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
});