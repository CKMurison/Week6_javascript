const ShoppingBasket = require('./shoppingbasket');

describe('ShoppingBasket', () => {
  it('should return the total price after adding one item', () => {
    const mockCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(mockCandy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });
  it('should return the price of two candies once added', () => {
    const mockCandy = {
      getName: () => 'Whippy',
      getPrice: () => 5
    }
    const mockCandy2 = {
      getName: () => 'Shibbler',
      getPrice: () => 5
    }
    
    const basket = new ShoppingBasket();
    basket.addItem(mockCandy)
    basket.addItem(mockCandy2)
    expect(basket.getTotalPrice()).toEqual(10);
  });
});