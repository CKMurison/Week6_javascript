class User {

  constructor(name) {

    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hey! My name is ${this.name}`
  }
}

module.exports = User;