// The intent of this file is to reverse
// the string using built in functions.
const reverse = (text) => {
  const response = text.split('').reverse().join(''); //  inbuilt functions to reverse a string
  return response;
};

module.exports = reverse;
