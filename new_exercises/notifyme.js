const notifyByEmail = (email) => {
  return 'Email sent to: ' + email;
}

const notifyByPhone = (number) => {
  return 'Text sent to: ' + number;
}

const notify = (string, fun) => {
  return fun(string);
}

console.log(notify("toilet", notifyByPhone))