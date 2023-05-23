const addToBatch = (array, num) => {
  if (array.length >= 5) {
    return array;
  } else {
    return array.concat(num);
  }
};

console.log(addToBatch([1, 2, 3, 4], 5));

console.log(addToBatch([1], 3)); 
[ 1, 3 ]

