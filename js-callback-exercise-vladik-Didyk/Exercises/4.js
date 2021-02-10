/**
 * In the function, accept and array, 
 * and call the callback on each element of the array
 * the callback will return a value - 
 
 * use this value and store it in a new array
 * for each iteration, 
 * 
 * the value returned from the callback, 
 * should replace the value in the previous array
 * you should return the new array with the new value
 * 
 * example:
 * const numbers = [1,2,3,4,5];
 * const newNumbers = map(numbers, (number) => {
 *  return number + 3;
 * });
 * console.log(newNumbers); // [4,5,6,7,8];
 * @param {number[]} array
 * @param {Function} callback
 */

const arr4 = [1, 2, 3, 45, 5, 6];

function map(array, callback) {
  // Your code
  const newArray = [];
  for (const element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}

const callback = (num) => {
  return +num + 3;
};

map(arr4, callback);

export default map;
