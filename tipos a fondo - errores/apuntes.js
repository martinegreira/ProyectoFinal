//Errores,Fechas,Tipos mas a fondo,asincronia

//Hacer una clase furgoneta que extienda de vehiculo
//hacer una clase de coche que extienda de vehiculo

//vehiculo tiene unas propiedades por defecto:puertas 5,peso 3000Kg,
//furgoneta sustituye el peso a 5000Kg
//Coche sustituye el peso a 3500Kg y añade un campo de radio true/false
//Furgoneta ademas añade extra un color y un tipo que puede ser especial o no(true o false)

// class Vehiculo {
//   constructor(puertas, peso) {
//     this.puertas = 5;
//     this.peso = 3000;
//   }
// }

// class furgoneta extends Vehiculo {
//   constructor(special, color) {
//     super();
//     this.peso = +prompt("Cuantos pesa tu furgoneta");
//     if (this.peso < 740) {
//       return console.log("Error");
//     }
//     this.special = false;
//     this.color = "white";
//     console.log(this.peso);
//   }
// }

// class coche extends Vehiculo {
//   constructor(radio) {
//     super();
//     this.peso = +prompt("Cuanto pesa tu coche");
//     if (this.peso < 740) {
//       return console.log("Error");
//     }
//     this.radio = true;
//     console.log(this.peso);
//   }
// }

// //Errores

// try {
//   //codigo que queremos probar
//   let  = new furgoneta();
//   let z = new coche();
// } catch (e) {
//   //Si hay un error va a entrar automaticamente en el catch
//   //console.error = escribe en rojo
//   console.error("Errore fatal",e)
// }

// error = {
//     name: ReferenceError,
//     message: "is not defined",
//     stack: "error at ...."
// }

//logging se guardan en las elasticsearch,kibana capacidad : full search text

//Control + F12 te enseña los errores

//Funcion que diga hola cuando pasen 3 segundos.

///funcion arrow // timeout va en milisegundos

// setTimeout(() => {
//     console.log("Hola")
//     return

// }, timeout = 3000);

// setInterval(() => {
//     console.log("Hola")
// }, );

//this da un salto hacia atras con funciones normales y con una funcion anidada en arrow 2 saltos

// //NUMEROS
// console.log(Math.floor(3.6));
// console.log(Math.round(1.9));
// console.log(Math.ceil(1.9));
// console.log(Math.trunc(1.9));

// let num = 4355546;

// num = num.toFixed(100)
// console.log(num)

// console.log(Math.random());

//of es para meterse en un array

//Funcion que borre en un array los nombres pares

// let names = ["Pepe","Rafa", "Tito","Maria"];
// function pares (){
//     let numero =
//     for(let i of names){
//         delete names[1]
//         delete names[3]
//     }
//     console.log(names);
//     debugger;
// }
// pares()

//Funcionales
//map se usa para modificar cosas de un array
//filter elimina cosas del array
// let names2 = names.map(name=>{
//     return name + "2"
// });
// console.log(names2)

//

// let people = [
//   {
//     name: "Pepe",
//     location: "Coruña",
//     type: "user",
// },
// {
//     name: "Marcos",
//     location: "Madrid",
//     type: "user",
// },
// {
//     name: "Pedro",
//     location: "Coruña",
//     type: "user",
// },
// {

//     name: "Marcos",
//     location: "Coruña",
//     type: "user"
//   }
// ];
// function makeAdmin(users){
// let newarr = users.map((user,index) => {
// if(index % 2 === 0)
// user.type = "admin"
// return user ;
// })
// return newarr
// }
// let res = makeAdmin(people)
// console.log(res)


// Destructuring

//Todo se puede desestructurar 

// let array = ["Abel","Pepe"]

// let [name1,name2] = array

// console.log(name2);


//JSON, JS T DATE DOMINGO

//let fecha1 = new date()
//let ahora = date.now()

