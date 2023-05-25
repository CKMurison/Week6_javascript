const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const returnCandiesBelowPrice = (priceBelow) => {
  candies
    .filter(({ price }) => price <= priceBelow)
    .map(({ name }) => name);
};

const returnBasedOnString = (userString) => { 
  return candies
    .filter(({ name }) => name.startsWith(userString))
    .map(({ name }) => name);
};

const searchCandies = (userString, priceBelow) => {
  return candies
    .filter(({ price }) => price <= priceBelow)
    .filter(({ name }) => name.startsWith(userString))
    .map(({ name }) => name);
};


console.log(searchCandies('Ma', 2))
console.log(searchCandies('Ri', 6))
console.log(searchCandies('Gu', 5))

module.exports = searchCandies;
