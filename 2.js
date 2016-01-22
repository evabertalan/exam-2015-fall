'use strict';

function hasDivisableBy5(array) {
  var dividedBy5 = 0;
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 5 === 0) {
      dividedBy5 += 1;
    }
  } if (dividedBy5 > 0) {
    return true;
  } else {
    return false;
  }
}

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.




console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true
