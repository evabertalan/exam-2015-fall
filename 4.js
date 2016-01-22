'use strict';

function countLetters(string) {
  var number = 0;
  var countOfLetters = {letter: number};
  for(var i = 0; i < string.length; i++) {
    varletter = string[i]
    console.log(string[i]);
    for(var j = 0; j < countOfLetters.length; j++) {
      if(countOfLetters[j] === string[i]) {
        number += 1;
      } else {
        countOfLetters.push(string[i]);
      }
    }
    console.log(countOfLetters);

  }
}


// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.


console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
