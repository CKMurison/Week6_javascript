let counter = 0;

const increment = () => {
  console.log(counter++);
}

setInterval(increment, 1000)



// Declare a function called increment that:
// increments the value of counter by 1
// and prints it using console.log

// Using setInterval, call this function every second so 
// the counter is incremented and printed every second.