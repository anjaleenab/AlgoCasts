// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charCounts ={};
  for(var char of str) {
    if (!charCounts[char]) {
      charCounts[char] =1;
    } else {
      charCounts[char]++;
    }
  }

  var holder =0;
  var mostKey =null;
  for(var key in charCounts) {
    if(charCounts[key] > holder) {
      holder = charCounts[key];
      mostKey = key;
    }
  }
  return mostKey;
}

// more efficient way

// function maxChar(str) {
//   var charCounts = {};
//   for (var char of str) {
//     charCounts[char] = charCounts[char] + 1 || 1;
//   }
//   var holder = 0;
//   var mostKey = null;
//   for (var key in charCounts) {
//     if (charCounts[key] > holder) {
//       holder = charCounts[key];
//       mostKey = key;
//     }
//   }
//   return mostKey;
// }

module.exports = maxChar;
