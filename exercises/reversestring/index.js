// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var reverseStr='';
  for(var length= str.length-1; length>=0; length--) {
    reverseStr+= str[length];
  }
  return reverseStr;
}

//another way

function reverse(str) {
  let reversed = '';
  for (let char of str) {
    reversed = + char;
  }
  return reversed;
}

//another way

function reverse(str) {
  var splitStr = str.split('');
  var revSplits =splitStr.reverse();
  var revStr = revSplits.join();
  return revStr;
}

//a better way

function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

//or you could do

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = reverse;
