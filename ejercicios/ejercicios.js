//Hacer que RUBEN pase a minusculas

// let nombre = "RUBEN";
// document.write (nombre.toLowerCase(2))

// function beautifyName(name) {
//   name = name.toLowerCase(); // sancho

//   name = name.charAt(0).toUpperCase() + name.slice(1); // S + ancho

//   return name;
// }

// console.log(beautifyName("SaNcHO"));
// console.log(beautifyName("ALEjAnDrOOOOO"));

// let resultado = beautifyName("PePe")
// if(resultado === "Pepe"){
//     console.log(true)
// } else if (resultado === "Pepa"){
//     console.log(true);
// }else{
//     console.log(false);
// }
// hacer que la ultima letra este en mayus y el resto en minus

function name1 (name) {
name = name.toLowerCase(); //ruben
name = name.slice(4) + name.slice(-1).toUpperCase()//N

return name;

}
console.log(name1("ruBEn"));
