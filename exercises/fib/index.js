// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//iterative solution
// function fib(n) {
//   var fibo=[];
//   for(var index=0;index<=n;index++) {
//     if(index<=1) {
//       fibo.push(index);
//     } else {
//       fibo.push((fibo[index-2] + fibo[index-1]));
//     }
//   }
//   return fibo[fibo.length-1];
// }

//recursive solution
function slowFib(n) {
  if(n<2) {
    return n;
  }
  return fib(n-1) +fib(n-2);
}

//recursive solution using memoization
function memoize(fn) {
var cache = {};
return function(...args) {
  if(cache[args]) {
    return cache[args];
  }
  var result = fn.apply(this, args);
  cache[args]=result;
  return result;
};
}

var fib = memoize(slowFib);
module.exports = fib;
