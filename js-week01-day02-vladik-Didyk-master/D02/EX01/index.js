const array = [2,6,11,4,13,5,5,12,1,8,32,4,10,2,3,9,1,36,6,1,3,13,9]



function sumNumbersWhileLoop(array) {
  //your code
  let  i = 0
  let e = 0
  while(i < array.length) {
    e = e + array[i]; 
    i++;
}

return e
}

sumNumbersWhileLoop(array)


function sumNumbersForLoop(array) {
  //your code

  let sum = 0

  for (let i = 0; i < array.length; i++ ){

    sum += array[i]
  }
  return sum
}

sumNumbersForLoop(array)

// Do not remove or change this line, or the tests won't work
export { sumNumbersWhileLoop, sumNumbersForLoop };
