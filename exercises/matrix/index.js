// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var results =[];
  for(let i=0; i<n; i++) {
    results.push([]);
  }
  var counter =1;
  var startColumn =0;
  var endColumn = n-1;
  var startRow=0;
  var endRow=n-1;
  while(startColumn <= endColumn && startRow <= endRow) {
    //top row
    for(var i=startColumn; i<=endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    //right column

    for(var z=startRow;z<=endRow;z++) {
      results[z][endColumn] = counter;
      counter++;
    }
    endColumn--;
    //bottom row
    for(var t=endColumn; t>=startColumn;t--) {
      results[endRow][t] = counter;
      counter++;
    }
    endRow--;
    //start column
    for(let q=endRow;q>=startRow;q--) {
      results[q][startColumn] =counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;
