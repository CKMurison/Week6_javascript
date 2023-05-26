class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaver = false;
  }

  getTemp() {
  return this.temperature;
  }

  up() {
    if (this.powerSaver == true && this.temperature == 25) {
      return 'Sorry. Max temperature reached! Turn off power saving to go even hotter!'
    } else {
    this.temperature = this.temperature + 1;
    }
  }

  down() {
    if (this.temperature == 10) {
      return 'Sorry. I can only go to 10 degrees! No lower!!!'
    } else { 
    this.temperature = this.temperature - 1;
    }
  }

  reset() {
    this.temperature = 20
  }

  setPowerSaving(boolean) {
    if (boolean == true) {
      this.powerSaver = true;
      return 'Power Saver on! The max temp is now 25'
    } else {
      this.powerSaver = false
      return 'Power saver off! Careful you don/t melt!'
    }
  }
}

module.exports = Thermostat;


// if setPowerSaving(false), max temp === 32
