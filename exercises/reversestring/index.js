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

module.exports = reverse;
