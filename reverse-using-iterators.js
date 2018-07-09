// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (text) => {
  let revarray = '';
  for (let i = text.length - 1; i >= 0; i -= 1) {
    revarray += text[i];
  }
  return revarray;
};

module.exports = reverse;
