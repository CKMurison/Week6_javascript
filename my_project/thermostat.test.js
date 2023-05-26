const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('should start with a temp of 20 degrees', () => {
    const response = new Thermostat
    expect(response.getTemp()).toEqual(20);
  });
  it('should raise the temp by 1 degree', () => {
    const response = new Thermostat
    response.up();
    expect(response.getTemp()).toEqual(21);
  });
  it('should decrease the temp by 1', () => {
    const response = new Thermostat
    response.down();
    expect(response.getTemp()).toEqual(19);
  });
  it('should reset the temperature to 20', () => {
    const response = new Thermostat
    response.up();
    response.up();
    response.reset();
    expect(response.getTemp()).toEqual(20)
  });
  it('should turn on power saving mode which sets the max temp to 25', () => {
    const response = new Thermostat
    response.setPowerSaving();
    response.up();
    response.up();
    response.up();
    response.up();
    response.up();
    expect(response.getTemp()).toEqual(25)
  });
  it('should not surpass 25 degrees if power saver is on', () => {
    const response = new Thermostat
    response.setPowerSaving();
    response.up();
    response.up();
    response.up();
    response.up();
    response.up();
    expect(response.up()).toEqual('Sorry. Max temperature reached! Turn off power saving to go even hotter!')
  })
});
