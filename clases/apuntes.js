//Repaso

// //let obj {
// this = apunta al obj
// }

//Las primeras letras de las constructoras tienen que ser en mayuscula

//Nuevo dia

//Crear un objeto personaje que tenga un contador de vidas y que tenga dos metodos -> increaselife que incremente la vida en 50points
//y descreaserlife que la baja en 50
//tiene que tener otra funcion que muestre la vida total
// let vidaLimite = 70;

// let pocion = {
//     restauraVida:50
// }

// let enemigo = {
//     name: "Skirt",
//     vida: 20,
//     vidaQueQuita: 50
// }

// let personaje = {
//     name:"Link",
//     vida: 100,
//     increaselife: function () {
//         this.vida += 50;
//         return this;

//     },
//     decreaserlife: function () {
//         this.vida -= 50;
//         return this;

//     },
//     Showlife: function () {
//         console.log(this.vida);
//         return this;

//     },
// }

// personaje
//     .increaselife()
//     .increaselife()
//     .decreaserlife()
//     .Showlife()

// console.log(personaje.vida)

// if(enemigo.vidaQueQuita != personaje.vida){
// personaje.vida - enemigo.vidaQueQuita;
// }
// if(personaje.vida < vidaLimite){
//     pocion.restauraVida + personaje.vida
// }
// console.log(personaje.vida)

//crea una funcion constructora
//constructora acumulador con un valor inicial
//ese objeto debe tener un metodo de "introduce"
//que te salte un prompt y se lo suma en el
//acumulador

// function Acumulador(valorIn) {
//   this.valorIn = valorIn;
//   this.introduce = function() {
//       let x  = +prompt("Añade un numero al acumulador");
//       valorIn += x
//       console.log(valorIn);
//     };

// }
// let ac = new Acumulador(10);
// ac.introduce()
// console.log(ac.valorIn);

//Class
//las palabras moradas son de javascript

// function Acumulador(valorIn) {
//   this.valorIn = valorIn;
//   this.introduce = function() {
//       let x  = +prompt("Añade un numero al acumulador");
//       valorIn += x
//       console.log(valorIn);
//     };

// }
// let ac = new Acumulador(10);
// ac.introduce()
// console.log(ac.valorIn);

// class Acumulador2 {
//     constructor(valorIn){
//         this.valorIn = valorIn

//     }
//     metodo1(){
//         this.introduce = function() {
//             let x  = +prompt("Añade un numero al acumulador");
//             valorIn += x
//             console.log(valorIn);
//           };
//     }
//     sayHi(){
//         console.log("Hello")
//     }
// }
// let obj2 = new Acumulador2 (30,"pepe");
// let obj3 = new Acumulador2 (3213);

///---///

//Crear una clase delfin, el delfin que tenga un nombre,un peso...,longitud,color y los metodos saltar que imprime por consola saltando
//y un metodo general de reproduccion que al pasarle dos delfines con el mismo color
//nos da un true (bebe delfin)

class Delfin /*herencia: extends (nombre de donde hereda)*/ {
  constructor(nombre, logitud, peso, color) {
   this.nombre = nombre
    this.logitud = logitud
    this.peso= peso
    this.color= color
  }
 static saltar() {
    console.log("a saltado");
  }
  static reproduccion(Delfin1,Delfin2) {
    if(Delfin1.color = Delfin2.color){
        console.log("reproduccion completada");
    }
  }
}
Delfin1 = new Delfin("Paco", "3 m", "5 kg", "violeta");
Delfin2 = new Delfin("Pepa", "6 m", "7 kg", "violeta");
Delfin.saltar()
Delfin.reproduccion(Delfin1,Delfin2)
