`use strict`;
const ex05 = [2, 6, 11, 4, 13, 5]

function calculateSumRecursion(array) {
  //your code

  
  return (array.length === 0) ? 0 : array[0] + 
  calculateSumRecursion(array.slice(1));

}

calculateSumRecursion(ex05);

// Do not remove or change this line, or the tests won't work
export { calculateSumRecursion };
