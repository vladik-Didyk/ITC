`use strict`;

const nameInJSON = document.getElementById(`Name`);
const country = document.getElementById(`Country`);
const age = document.getElementById(`Age`);

let jsonStr = '{"name":"Shany", "country":"Israel", "age":31}';

const newJSON_Str = JSON.parse(jsonStr);

function EX06(obj) {
  for (const key in obj) {
    switch (key) {
      case "name":
        nameInJSON.innerHTML = `Name: ${obj[key]}`;
        break;
      case  "country":
        country.innerHTML = `Country: ${obj[key]}`;
        break;
      case "age":
        age.innerHTML = `Age: ${obj[key]}`;
        break;
    }
  }
}

EX06(newJSON_Str)
