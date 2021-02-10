/**
 * use a simple for loop (not for...of or for...in)
 * to call the callback over each element in the array passing
 * to the callback as arguments
 * the item it self as first argument, and the index as second
 * @param {number[]} array
 * @param {Function} callback
 */

const ex03 = [
  [2, 6, 11, 4, 13, 5],
  [5, 12, 1, 8, 32, 4],
  [10, 2, 3, 9, 1, 3],
  [6, 6, 1, 3, 13, 9],
];

const arr = [1, 2, 3, 45, 5, 6];

function forEach(array, callback) {
  // Your code

  for (const element of array) {
    for (let i = 0; i < element.length; i++) {
      callback(element[i], i);
    }
  }

  //  for (let i = 0; i < array.length; i++) {
  //     callback(array[i], i);
  //   }
}

const callback = (elemnt, index) => {
  console.log(elemnt, index);
};

forEach(ex03, callback);

export default forEach;
