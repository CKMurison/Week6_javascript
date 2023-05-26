class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = false;
  }

  getTemp() {
  return this.temperature;
  }

  up() {
    if (this.powerSaving == true && this.temperature == 25) {
      return 'Sorry. Max temperature reached! Turn off power saving to go even hotter!'
    } else {
    this.temperature = this.temperature + 1;
    }
  }

  down() {
    this.temperature = this.temperature - 1;
  }

  reset() {
    this.temperature = 20
  }

  setPowerSaving(boolean) {
    if (boolean == true) {
      this.powerSaving == true;
      return 'Power Saver on! The max temp is now 25'
    } else {
      this.powerSaving == false
      return 'Power saver off! Careful you don/t melt!'
    }
  }
}

module.exports = Thermostat;


// min possible temp === 10

// setPowerSaving mode which takes a boolean as argument 
// and set temp max to 25 

// if setPowerSaving(false), max temp === 32
