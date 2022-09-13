'use strict'

/*Funciones anonimas
es una funcione sin nombre y ese conjunto de instrucciones no tendra nombre pero lo puedo guardar en una variable 

var pelicula = function(nombre){
    return "la pelicula es: " + nombre;
}
*/

// de esta forma se tiene una variable con una funcion anonima


/*
callback
es una funcion que se ejecuta dentro de otra


function sumame(numero_1, numero_2){
    var sumar = numero_1 + numero_2;

    return sumar; 
}
console.log(sumame(3, 5));

//una funcion de callback es una funcion anonima que se le pasa como parametro a otra funcion 

*/


function sumame(numero_1, numero_2, sumaYmuestra, sumaPorDos){
    //sumaYmuestra y sumaPorDos seran funciones de callback
    var sumar = numero_1 + numero_2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar; 
}

sumame(5, 7, function(dato){
    console.log("La suma es: ", dato)
},
function(dato){
    console.log("la suma por dos es: ", (dato*2));

});