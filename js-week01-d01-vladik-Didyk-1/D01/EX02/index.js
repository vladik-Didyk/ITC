function isBiggerThan(num) {
  //your code
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
}

// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
