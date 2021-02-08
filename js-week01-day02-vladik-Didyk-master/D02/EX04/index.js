`use srict`

const ex04 = [
  [2,6,11,4,13,5],
  [5,12,1,8,32,4],
  [10,2,3,9,1,3],
  [6,6,1,3,13,9]
]


function calculateMatrixDiagonalSum(matrix) {
  //your code
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {

    console.log(matrix[i][i]);
    // console.log(matrix[i][i+1]);
    sum += matrix[i][i+1];

  }
  return sum;

}
calculateMatrixDiagonalSum(ex04)

// Do not remove or change this line, or the tests won't work
export { calculateMatrixDiagonalSum };
