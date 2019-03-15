// let obj = {
// naranjas: 23,
// manzanas: 43
// }
// //Los objetos tienen que tener propiedad y valor, las propiedades pueden ser string o symbol // el valor puede ser lo que se quiera
// //Se debe asignar un valor para crear una propiedad nueva (sujeto a pruebas)
// //Node es singlered
// //Un objeto si llama a algo que no exite la crea dentro de el
// // en las funciones se pueden retornar objetos (cualquier cosa sep uede retornar)
// //Si el valor y la prodiedad se llaman igual se puede escribir solo 1 vez

// //objetos dinamicos
// let opcion = prompt("narajas o manzanas")
// obj[opcion] 

//puertas in obj = si existe te da true si no false
//for(let key in casa) // esto nos enseñaria los objetos de dentro
// console.log(obj[key]) //nos enseña las propiedades y valores
//copia por referencia: let obj = obj2, estoi haria que los dos cambiaran si una es cambiada
//garbage collector: busca las diferencias y te hace una lista de las referencias, elimina los null y undefined 

//Borrar una propiedad de funcion//

// let obj = {
//     name : "Martin",
//     type: "admin",
//     text: "texto",
//     test: "borrar"

// }
// function borrar (obj){
//     delete obj.test;
//     for(let i in obj){
//         console.log(i);
//     }
// }
// borrar (obj)

//escribir una funcion que me de el total de manzanas
// let obj = {
// manzanas: 43
// }
// function mazas (obj) {
//    console.log(Object.values(obj)); 

// }
// mazas(obj)


//crear una funcion que multiplique x 3
//todas las propiedades numericas del objeto

// let human ={
//     kg:80,
//     size:180,
//     name: "juan",
// }
// let kgf = 0
// let sizef = 0
// function multi(kg,size){
//     for(let x in human){
//        for(let multiplo = 0; multiplo = 3 ; multiplo++){
//            kgf = kg + 80
//            sizef = size + 180
//        }
//        return kgf && size

//     }
    
// }

// multi(human.kg,human.size)
// console.log(human)


//llamar a una funcion sin llamarla por su nombre 
// (function name(params) {
    
// })()


//Funciones contructos 

//Van con mayusuculas
//dentro los parametros que quieres crear
//palabra clave New nombre de objeto(Nombre de parametros)
// y dentro de las funciones tiene que ir this.(nombre del primer parametro) = (nombre del parametro)