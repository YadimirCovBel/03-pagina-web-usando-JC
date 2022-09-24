'use strict'

// los arrays multidimencionales son los arrays dentro de arrays
var categorias = ['Accion', 'Terror', 'Comedoa', 'Suspenso'];
var peliculas = ['la verdad duele', 'la vida es bella', 'gran torino'];

var cine = [categorias,peliculas]
/* 
dentro de un array podemos meter otros como se muestra en el ejemplo anterior lo cual al usar la terminal nos muestra un array con dos 
elementos y dentro de este los dos arrays con sus elementos respesctivos

console.log(cine)
con este log nos muestra que el array cine tiene dos elementos y podemos desplegar para ver que ese array tiene otros dos arrays 
los cuales tambien podemos abrir y ver los elementos que contienen
*/
console.log(cine[0][1])
/* para acceder a las categorias debo acceder al array de cine y despues a categorias ya que esto e sun array multi dimencional donde 
la primera es cine y la segunda es categorias el elemento [0] seria categorias y despues el elemento [1] seria terror.
*/
console.log(cine[1][2])