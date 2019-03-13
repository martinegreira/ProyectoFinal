/*
 * 1, 2, 3 Go!
 */

"use strict"; //uso stricto del programa, recomendable poner siempre

// console.log("Bienvenido");
// alert("Alerta de seguridad");
// alert("Desactivese Adblock"); //alerta

//Comentario de una linea
/**
 * Para hacer
 * mas
 * lineas
 * comentadas
 *
 *
 */

// confirm("eres admin?");
// prompt("Cuantos años tienes?");

//Un programa que te pida tu nombre por Chorme y lacen una alerta si el nombre es Admin, diga Hello

// let usur = prompt("Cual es tu nombre?");
// if (usur == "admin") {
//   alert("Hello Master");
// }
// else if (usur == "user") {
//     alert("Hello User")
// }
// else {
//     alert("I don`t know you")
// }

//ternario

// let user = {
//     role : ""
// }
// user.role = prompt("Cual es tu nombres?")
// user.role == "admin" ? alert("admin") : user.role == "User" ? alert("es user") : alert("no eres nada de los dos")

//Ternario2

// let user = {
//   role: ""
// };
// user.role = prompt("Cual es tu nombre");
// if (user.role === "admin" || user.role === "user") {
//   alert(`Hello ${user.role}`);
// } else {
//   alert(`No tienes acceso`);
// }

// user.role === "admin" || user.role === "user"
//   ? alert(`helo ${user.role}`)
//   : alert("i dont lnow you");

//If2

// let numero = prompt("Cuantos años tienes??");
// let type = "";
// let yearsProgramming = 0;

// if (numero <= 28 && numero >= 18) {
//   type = "Junior";
//   yearsProgramming = prompt("Cuantos años llevas programando");
// } else if (numero > 28) {
//   type = "Senior";
//   yearsProgramming = prompt("Cuantos años llevas programando");
// } else {
//   alert("Fatal error");
// }

// alert(`Eres ${type} por llevar ${yearsProgramming}`);

// if (Jun == "Junior" || Se == "Senior" ) ; {
//  let programa = prompt ("Cuantos años llevas programando")
// }

//Calculo

// let numero1 = +prompt("Elige el primer numero para calcular");
// let numero2 = +prompt("Elige el segundo numero para calcular");
// let operador = prompt("Elige un operador");

// let nume1 = isFinite(numero1);
// let nume2 = isFinite(numero2);
// if (nume1 && nume2) {
//   if (operador == "suma") {
//     console.log(numero1 + numero2);
//   } else if (operador == "restar") {
//     console.log(numero1 - numero2);
//   } else if (operador == "multiplicar") {
//     console.log(numero1 * numero2);
//   } else if (operador == "restar") {
//     console.log(numero1 / numero2);
//   }
// }

//Operadores logicos

// Or || Este te devuelve true si se cumple solo cualquier condicion

//And &&
// Si hay un false ya no se cumple

// && tiene mas valor que ||

// ! 1 sirve para cambiarlo a su contraparte 2 para volver

//cuando flag sea true el bucle while se dentendra, esto debe estar sujeto a algunas condiciones

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// let array = [
//     {name:"Manolo", isAdmin:true},
//     {name:"Pepe", isAdmin:false},
// ]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i].isAdmin;
//     if (element == false) {
//         array[i].name = "default"
//     }

//     console.log(array[i].name)

// }

// Array = [
//     {name=barco1},
//     {name=barco2},
//     {name=barco3},
//     {name=barco4},
//     {name=barco5},
//     {name=barco6},

// ];

primero: for (let i = 0; i < 3; i++) {
  for (let x = 0; x < 3; x++) {
    let input = prompt(`las coordenadas son ${i},${x}`);
    if (input === "" ) {
        break primero;
    }  
  }
}
