`use srict`;

const ex03 = [
  [2, 6, 11, 4, 13, 5],
  [5, 12, 1, 8, 32, 4],
  [10, 2, 3, 9, 1, 3],
  [6, 6, 1, 3, 13, 9],
];

function calculateMatrixColumnSum(matrix, columnIndex) {
  //your code

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][columnIndex];
  }
  return sum;
}

calculateMatrixColumnSum(ex03, 2);

// Do not remove or change this line, or the tests won't work
export { calculateMatrixColumnSum };
