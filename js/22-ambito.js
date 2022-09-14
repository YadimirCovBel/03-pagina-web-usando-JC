'use strict'


function holaMundo (texto){
    var hola_mundo = "texto dentro de funcion";
console.log(texto);
console.log(typeof numero.toString());
// como comvertir un numero o cualquier cosa a string, para esto se usa la funcion .toString 
// con typeof puedes ver que tipo de dato es: numerico, string, funcion etc

console.log(hola_mundo);
}
var numero = 12;
var texto = "hola mundo soy una variable global";
holaMundo(texto);

// console.log(hola_mundo);

/* 
si intentas llamar hola_mundo desde fuera de la funcion marcara error ya que no es una variable global  ya que esta se encuentra dentro de una funcion 
unicamente, es algo siempre a considerar ya que las variables pertenecientes a una funcion no pueden ser llamadas fuera de la misma.

una variable global puede ser accedida fuera de las funciones y tambien dentro de las mismas
*/