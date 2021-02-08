function moduloEx5(num1, num2) {
  //your code
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
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
