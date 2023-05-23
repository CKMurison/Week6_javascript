const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];


const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (phoneNumber) => {
  return phoneNumber.filter(checkLength);
}




console.log(filterLongNumbers(numbers))