const executeAfterDelay = (callbackFunction, delay) => {
  setTimeout(callbackFunction, delay);
}

const sayHello = () => {
  console.log('Hello!');
}

executeAfterDelay(sayHello, 3000)