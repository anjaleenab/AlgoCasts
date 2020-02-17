// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   var chunks=[];
//   var miniChunk = [];
//   for (var i=0; i<array.length;i++) {
//     miniChunk.push(array[i]);
//     if(miniChunk.length === size || i === array.length-1) {
//       chunks.push(miniChunk);
//       miniChunk = [];
//     }
//   }
//   return chunks;
// }

//using slice method

function chunk(array, size) {
  var index=0;
  var chunks=[];
  while(index < array.length) {
  chunks.push(array.slice(index, index+size));
  index+=size;
  }
  return chunks;
}

module.exports = chunk;
