// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessage = namesAndDiscounts.map(({ name, discount }) => {
  return `Hi ${name}, ${discount}% off our best candies today!`
});

console.log(generateMessage)