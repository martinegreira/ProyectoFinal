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

let numero = prompt("Cuantos años tienes??");
let type = "";
let yearsProgramming = 0;

if (numero <= 28 && numero >= 18) {
  type = "Junior";
  yearsProgramming = prompt("Cuantos años llevas programando");
} else if (numero > 28) {
  type = "Senior";
  yearsProgramming = prompt("Cuantos años llevas programando");
} else {
  alert("Fatal error");
}

alert(`Eres ${type} por llevar ${yearsProgramming}`);









// if (Jun == "Junior" || Se == "Senior" ) ; {
//  let programa = prompt ("Cuantos años llevas programando")

// }