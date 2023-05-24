const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (message, transformMe) => {
  console.log(transformMe(message));
}

transform('WHY ARE YOU SHOUTING?', lowercaseMessage)