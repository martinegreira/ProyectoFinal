// Las funciones expresiva no puede llevar un nombre porque ya lo lleva let,const
// Llamar un funcion nombre de funcion()
// Typoff te dice que tipo de palabra,numero o objeto
// Tyoff de NaN da Number

// function numer(num){
//     debugger
//     if(num % 2 == 0){
//         return true;

//     }
//     return false;
//     function test(resultado){
//     return test(num)
//     console.log(resultado);
//      numer(4);
// }
// }

//arrow fuction = Es otra funcion expresiva
//Esta quita la palabra funcion y ponemos un arrow delante =>
//Si es de una linea esta funcion retorna automatica si es en una sola linea
//el this te dice donde estas mediante un console.log, los arrow funtion hacen que sean globales

//debugger

//Te dice los errores en el codigo, debemos usar la extension debug, y poner debugger hace que se pare ahi

function numer(num) {
  debugger;
  if (num % 2 == 0) {
    return true;
  }
  return false;
  function test(resultado) {
    return test(num);
    console.log(resultado);
  }
}

numer(4);
