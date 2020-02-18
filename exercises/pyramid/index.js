// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
var midpoint = Math.floor((2 * n - 1) / 2);
for(var index=0;index<n;index++) {
  let pyramidRow ='';
  for(var col=0; col<2 * n -1;col++) {
    if(midpoint -index <= col && midpoint + index >=col) {
      pyramidRow+= '#';
    } else {
      pyramidRow +=' ';
    }
  }
  console.log(pyramidRow)
  }
}

//recursive solution
// function pyramid(n, index=0, pyramidRow='') {
//   if(index===n) {
//     return;
//   }
//   if(pyramidRow.length === 2*n-1) {
//     console.log(pyramidRow)
//     return pyramid(n, index+1);
//   }
//   var midpoint = Math.floor((2*n-1)/2);
//   var add;
//   if(midpoint -index <= pyramidRow.length && midpoint + index >= pyramidRow.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, index, pyramidRow + add);
// }

module.exports = pyramid;
