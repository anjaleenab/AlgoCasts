// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   var vowelCount=0;
//   var checker='aeiouAEIOU';
//   for(var char of str) {
//     if(checker.includes(char)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }

//another solution
function vowels(str) {
var matches= str.match(/[aeiou]/gi);   //g makes sure that you do not stop when you find a match,
                                        //i means case insensitive
return matches ? matches.length : 0;
}




module.exports = vowels;
