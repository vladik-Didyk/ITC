const output = document.getElementById(`output`);

function getRandomInt(max) {
  //your code
  return Math.floor(Math.random() * Math.floor(max));
}

function moduloEx7(num1, num2) {
  //your code

  let modulo = num1 % num2;

  if (num1 === num2) {
    output.innerHTML = `The number ${num1} is equal to ${num2}`;
  } else if (num1 < num2) {
    output.innerHTML = `The number ${num1} is less than ${num2}`;
  } else if (num1 > num2 && num1 % num2 !== 0) {
    output.innerHTML = `The number ${num} is bigger ${num2} AND
    The modulo of ${num1} % ${num2} is ${modulo}`;
  } else {
    output.innerHTML = `The module to ${num1} % ${num2} is ${0}
     (Zero)`;
  }
}

document.querySelector(`.btn`).onclick = () =>
  moduloEx7(getRandomInt(100), getRandomInt(100));
