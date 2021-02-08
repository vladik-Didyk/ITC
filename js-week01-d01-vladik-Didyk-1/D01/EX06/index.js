let num1 = document.querySelector(`.input-num-1`);
let num2 = document.querySelector(`.input-num-2`);
const output = document.getElementById(`output`)

function moduloEx6(num1, num2) {
  //your code
  let modulo = num1 % num2;

  if (num1 === num2) {
    output.innerHTML = `The number ${num1} is equal to ${num2}`;
  } else if (num1 < num2) {
    output.innerHTML = `The number ${num1} is less than ${num2}`;
  } else if (num1 > num2 && num1 % num2 !== 0) {
    output.innerHTML = `The number ${num1} is bigger ${num2} AND
    The modulo of ${num1} % ${num2} is ${modulo}`;
  } else {
    output.innerHTML = `The module to ${num1} % ${num2} is ${0} (Zero)`;
  }

}

document.querySelector(`.btn`).onclick = () => 
  moduloEx6(num1.value, num2.value);
