// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((number) => { 
//   console.log(number)
// });

// const iteratorFunction = (numbers)=> {
//   console.log(numbers)
// };

// numbers.forEach(iteratorFunction);

// let sum = 0; 

// numbers.forEach((number) => {
//   number += sum
// });

const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(add, 0);
function add(accumulator, a) {
  return accumulator + a
} 

console.log(sum)