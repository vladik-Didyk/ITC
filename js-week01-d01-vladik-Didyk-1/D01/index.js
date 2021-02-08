`use strict`;

// Exercises instructions
// 1.
// In the JS file, fill in the function provided with one line of code
// that logs to the console “Hello World”.
// To test this exercise run: npm run testex1
// console.log(`Hello World`);
const testex1 = () => `Hello World`;
testex1();
// 2.
// That function, should accept one parameter
// (do not call it x, y.. Give it a real name).
// The code should print to the console:

// “The number Y is bigger than 4” when the number is bigger than 4,
// or “the number Y is equal to 4” when the number is equal to 4,
// or “the number Y is less than 4” when the number is less than 4

// (where Y is the value of your variable).
// Change the value to your variable,
// and check if you get the right output every time
// (do not forget to refresh the page after you change your code).
// To test this exercise run: npm run testex2

const testex2 = (num) => {
  switch (num) {
    case num > 4:
      console.log(`The number ${num} is bigger than 4`);
      break;
    case num === 4:
      console.log(`The number ${num} is equal 4`);
      break;
    case num < 4:
      console.log(`The number ${num} is less than 4`);
      break;
  }

  // if(num === 4){
  //     `The number ${num} is equal 4`
  // } else if (num < 4) {
  //     `The number ${num} is less than 4`
  // } else if (num > 4){
  //     `The number ${num} is bigger than 4`
  // }
};

testex2(0);

// 3.
// In the JS file, edit the function provided.
// Use as template your previous function.
// This function should accept two parameters instead of one,
// where the first one is the number to be compared and
// the second one the one to compare with.
// You need to compare the numbers, and according to the right situation print in the console:
// 'The number X is bigger than Y'
// or 'The number X is less than Y'
// or 'The number X is equal to Y'.
// To test this exercise run: npm run testex3

const testex3 = (num1, num2) => {
  if (num1 === num2) {
    console.log(`The number ${num1} is equal to ${num2}`);
  } else if (num1 < num2) {
    console.log(`The number ${num1} is less than ${num2}`);
  } else if (num1 > num2) {
    console.log(`The number ${num} is bigger than ${num2}`);
  }
};

testex3(0, 2);

// 4.
// In the JS file, edit the function provided.
// Use as template your previous function.

// Extend your code, to print
// “The modulo of X % Y modulo of”, only if X is bigger than Y,
// and if the module to X % Y isn’t zero.

// It still should print the previous lines in case X is less than Y or X equals Y.
// To test this exercise run: npm run testex4

const testex4 = (num1, num2) => {
  let modulo = num1 % num2;

  if (num1 === num2) {
    console.log(`The number ${num1} is equal to ${num2}`);
  } else if (num1 < num2) {
    console.log(`The number ${num1} is less than ${num2}`);
  } else if (num1 > num2 && num1 % num2 !== 0) {
    console.log(`The modulo of ${num1} % ${num2} is ${modulo}`);
  } else {
    console.log(`The module to ${num1} % ${num2} is ${0} (Zero)`);
  }
};

testex4(0, 2);

// 5. - ?

// In D01/EX05, in the JS file, edit the function provided.
// Use as template your previous function.

// Change your code to have only one console.log

// after all of the if-else statements

//(hint: use a string variable, and change it accordingly to the logic of your code).
// To test this exercise run: npm run testex5

const testex5 = (num1, num2) => {
  let modulo = num1 % num2;

  if (num1 === num2) {
    result = `The number ${num1} is equal to ${num2}`;
  } else if (num1 < num2) {
    result = `The number ${num1} is less than ${num2}`;
  } else if (num1 > num2 && num1 % num2 !== 0) {
    result = `The modulo of ${num1.toString} % ${num2} is ${modulo}`;
  } else {
    result = `The module to ${num1} % ${num2} is ${0} (Zero)`;
  }

  return result;
};

console.log(testex5(0, 2));
////////////////////////////////////////////////////////////////////////

// 6.
// In D01/EX06, create a website that runs the JS attached file.
// In that file, edit the function provided.

// Use as template your previous function.

// Instead of logging a string to the console,
// create a h3 tag with an id of ‘output’,

// and change the text of the tag according to the logic you implemented.

// This exercise does not have an automated test.
// Run it in your browser, and check the results.

////////////////////////////////////////////////////////////////////////

// 7.
// In D01/EX07, create a website that runs the JS attached file.
// In that file, edit the function provided.

// Use as template your previous function.

// Add a new function that randomize the values of your two variables,
// using Math.random(), with the range of 1 - 100.

// Call to that function inside the other one instead of providing two parameters.

// This exercise does not have an automated test.
// Run it in your browser, and check the results.

// 888888 88b 88  88888  dP"Yb  Yb  dP      dP""b8  dP"Yb  8888b.  88 88b 88  dP""b8
// 88__   88Yb88     88 dP   Yb  YbdP      dP   `" dP   Yb  8I  Yb 88 88Yb88 dP   `"
// 88""   88 Y88 o.  88 Yb   dP   8P       Yb      Yb   dP  8I  dY 88 88 Y88 Yb  "88
// 888888 88  Y8 "bodP'  YbodP   dP         YboodP  YbodP  8888Y"  88 88  Y8  YboodP
