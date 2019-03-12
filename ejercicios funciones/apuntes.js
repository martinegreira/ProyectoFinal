//Una funcion que me retorne true si soy mayor de edad o
//retorne una alerta de confimacion de si mis padres me dieron permiso

// function mayorEdad(edad) {
// edad = prompt("Cual es tu edad?")
// if (edad<18) {
//     alert("Tienes permiso de tus padres?")
// }

// return true

// }

// function age (userAge,accesAge) {
//     userAge = prompt ("Dime tu edad")
//     accesAge = 18
//     return accesAge > userAge ? true:confirm ("Tienes permiso de tus padres")

// }

//crear una funcion que acepte dos parametros  X y N que devuelva el resultado de x elevado a N

// function Cal(numX, numN) {
//   let res = numN;
//   for (let operador = 1; operador < numN; operador++) {
//     res *= numX;
//   }
//   return res;
// }
// let result = Cal(3, 4);
// console.log(result);

// function formatName(name) {
//   // formateo

//   name = name.trim().toLowerCase();
//   return name = name.charAt().toUpperCase() + name.slice(1);
//
// }
// let names2 = "rUBEn";
// (names2.split("").length);
// Array(names2)
// for (let nombrec =""; name == "Ruben";) {
//     array.names2 ="R"

// }
// let res = formatName("RuBeN");
// console.log(res);

//Funciones declarativas
// function name(params) {

// }

// //funciones expresivas
// let sum = function name(params) {

// }

//Estas funciones solo pueden tener la modificacion de los parametros abajo suya

//.slice = cortar la palabra y ponerlo en minuscula

//callbacks
//Unos parametros de una funcion que se van a llamar si algo a salido bien o a salido mal

function checkAge(Age, correct, decline) {
  if (age < 18) {
    correct();
  } else {
    decline();
  }
}
function correct(params) {
  console.log("correct");
}
function decline(params) {
  console.log("error 404");
}
checkAge(12, accept, decline);
