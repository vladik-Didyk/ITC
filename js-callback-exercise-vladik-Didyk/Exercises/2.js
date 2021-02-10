/**
 * In the function, call the callback function
 * only if callMe is true
 * @param {boolean} callMe
 * @param {Function} callback
 */
function callMeMaybe(callMe, callback) {
  // Your code here
   
  return callMe  &&  callback()
  // return !callMe  &&  callback()

}

const callback = () => {
  console.log(`I called you`)
}

callMeMaybe(true,callback)
// callMeMaybe(false,callback)


 export default callMeMaybe;
