const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('should start with a temp of 20 degrees', () => {
    const response = new Thermostat
    expect(response.getTemp()).toEqual(20);
  });
});
