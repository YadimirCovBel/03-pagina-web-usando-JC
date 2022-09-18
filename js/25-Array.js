'use strict'

// Array, Arreglos, Matrices
/* coleccion de tipos de datos de valores que puede tener una varialble, con una variable se puede tener un solo valor pero con un Array 
puedo tener muchos valores dentro de una variable y esos valores estan almacenados  almacenados dentro de una matris dentro de un conjunto
de valores.

*/
var nombre = "Yadimir Covarrubias"
//  un Array se puede definir con [] los corchetes, un Array es una coleccion de varios datos teniendo una variable con valores
var nombres = ["Yadimir Covarrubias", "Yumaira Rios", "Carlos Quintero", "Paul Covarrubias", 52, true];
/* se pueden incluso meter Arrays dentro de Arrays que seria una Array multi funcional
se pueden meter todo tipo de datos dentro de una Array texto, numericos, buleanos 


sepueden definir el Array con los corchetes o definirlos en forma de objetos
cada uno de estos valores estan guardados dentro de un indice  en la programacion los indices inician en 0 por lo tanto PHP seria el 0, JS 1, Go 2, Java 3
*/
var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres)
console.log(lenguajes)


// para poder acceder a alguna variable del Array en espesifico se requiere introducir su numero dentro del indice en este caso seleccionaremos el 2
console.log(nombres[2]);
// para seleccionar una variable espesifica debe de introducirse entre [] corchetes el numero de variable que se utilizaria.