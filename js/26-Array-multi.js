'use strict'

// los arrays multidimencionales son los arrays dentro de arrays

/* 
var categorias = ['Accion', 'Terror', 'Comedoa', 'Suspenso'];
var peliculas = ['la verdad duele', 'la vida es bella', 'gran torino'];

var cine = [categorias,peliculas]

dentro de un array podemos meter otros como se muestra en el ejemplo anterior lo cual al usar la terminal nos muestra un array con dos 
elementos y dentro de este los dos arrays con sus elementos respesctivos

console.log(cine)
con este log nos muestra que el array cine tiene dos elementos y podemos desplegar para ver que ese array tiene otros dos arrays 
los cuales tambien podemos abrir y ver los elementos que contienen
*/
//console.log(cine[0][1])
/* para acceder a las categorias debo acceder al array de cine y despues a categorias ya que esto es un array multi dimencional donde 
la primera es cine y la segunda es categorias el elemento [0] seria categorias y despues el elemento [1] seria terror.
*/
//console.log(cine[1][2])
/* para acceder a la pelicula Gran torino se debe de igual forma acceder primero a cine y despues a peliculas, donde [1] seria peliculas
y [2] seria gran torino

*/
/*
peliculas.push("batman");

console.log(peliculas)


es posible agregar un elemento al array de peliculas sin modificar directamente el Array seleccionando el array a modificar peliculas 
agregar el .push()  y listo se agrega lo escrito en el parentesis peliculas.push("batman");
*/
/*

var elemento = ""
do{ 
    var elemento = prompt("Introduce tu pelicula:");
    // se puede hacer un prompt para agregar elementos a un array
    peliculas.push(elemento);
// con este push se deben agregar los elementos introducidos con el prompt

}while(elemento != "ACABAR")
 // se repite la peticion de introducier una pelicula mientras no se ingrese acabar
// agregar un while para que deje de agregar elementos cuando se introdusca la palabra ACABAR

//para eliminar un elemento de un array en este caso ACABAR que se ingresa al array al ser introducido para eleminar el bucle

peliculas.pop();
// se puede seleccionar el array con el que se esta trabajando y utulizar el comando pop(); lo cual elminara el ultimo elemento que en este caso seria 
la palabra con la que se termina el bucle ACABAR, con esto se logra quitar el comando para temrinar el bucle del array

.pop() lo que hace es eliminar el ultimo elemento de un array si se utuliza de forma repetida eliminara los elementos del array dependiendo del numero 
de ocasiones que se ingresa el comando .pop()

console.log(peliculas)
*/

/*
si se quiere elminar un elemento concreto de un array se nesecita hacer un index off para localizar prmiero.
*/
var categorias = ['Accion', 'Terror', 'Comedoa', 'Suspenso'];
var peliculas = ['la verdad duele', 'la vida es bella', 'gran torino'];

var cine = [categorias,peliculas]

var indice = peliculas.indexOf("gran torino")
//indexOf es para buscar un elemento en un indice en este caso nos arrojara el numero 2 en el console log ya que es el tercer elemento.

console.log(indice)

if(indice > -1){
    // con el if indicamos que si indice es mayor a -1 tomara accion el comando siguiente que es el splice, se coloca el -1 ya que eso indicaria que al 
    // encontrar 1 coincidencia tomara accion.
    peliculas.splice(indice, 1)
    // con el comando .splice() podemos borrar tantos pasos como queramos en este caso  quitar un elemento del array en este caso colocamos indice 
    // para que trabaje con esa variable y agregamos un 1 para que elimine el elemento econtrado con el indexOf
}


console.log(peliculas)

var peliculas_string = peliculas.join();
// para convertir un array a texto o string se puede usar join() para esto se debe crear una variable la cual  se usara para este fin y despues ingresar
// el array que se busca convertir en texto seguido por el comando join()
console.log(peliculas_string)