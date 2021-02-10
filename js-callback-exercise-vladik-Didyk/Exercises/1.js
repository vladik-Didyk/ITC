/**
 * Create a function that accepts two numbers,
 * and calls the callback with the sum of those numbers
 * @param {number} x
 * @param {number} y
 * @param {Function} callback
 */
function sumAsync(x, y, callback) {
  // Your code here
 return   callback(x,y)
}

function callback(x, y) {

  return  x + y
  
}
//  sumAsync(5,8,callback)

 sumAsync(1.5,-2,callback);

 export default sumAsync;
