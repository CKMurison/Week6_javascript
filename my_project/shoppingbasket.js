class ShoppingBasket {
  constructor() {
    this.basket = [];
  }
  
  addItem(candy) {
    this.basket.push(candy)
    return this.basket
  }

  getTotalPrice() {
    let price = 0;
    this.basket.forEach(object => {
      price += object.getPrice();
    });
    return price 
  }

}

module.exports = ShoppingBasket;