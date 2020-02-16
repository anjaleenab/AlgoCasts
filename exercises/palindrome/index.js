// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//first solution

// function palindrome(str) {
//  var validChars =str.split('');
//  validChars.reverse();
//  var strJoined= validChars.join('');
//  if(strJoined === str) {
//    return true;
//  } else {
//    return false;
//  }
// }

//same way but more efficient

function palindrome(str) {
var reversed =str.split('').reverse().join('');
// if(reversed === str) {
//   return true;
// } else {
//   return false;
// }
return reversed === str;
}

module.exports = palindrome;
