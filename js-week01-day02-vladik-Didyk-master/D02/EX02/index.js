const ex02 = [
  [2, 6, 11, 4, 13, 5],
  [5, 12, 1, 8, 32, 4],
  [10, 2, 3, 9, 1, 3],
  [6, 6, 1, 3, 13, 9],
];

function calculateMatrixSum(matrix) {
  //your code

  let sum = 0;

  for (const element of matrix) {
    for (const element_inside of element) {
      sum += element_inside;
    }
  }

  return sum;
}

calculateMatrixSum(ex02);

// Do not remove or change this line, or the tests won't work
export { calculateMatrixSum };
