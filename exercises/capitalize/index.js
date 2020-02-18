// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var words= [];
  for(var word of str.split(' ')) {
   words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

//a second solution

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for(let letter=0; letter<str.length;letter++) {
//     if(str[letter-1] === ' ') {
//       result+=str[i].toUpperCase();
//     } else {
//       result+=str[i];
//     }
//   }
//   return result;
// }
module.exports = capitalize;
