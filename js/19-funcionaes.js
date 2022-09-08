'use strict'

/* las funciones son un grupo ordenes agrupados con un nombre completo concreto es desir en una funcion tendre 
un conjunto de reglas, funciones o cosas que se van a realizar y yo puedo tomar esa funcion y reutlizarla 
tanto como requiera 

ejemplo acelerar un coche o frenar un coche son un conjunto de ordenes ejecutadas

una funcione es una agrupacion reutilizable de un conjunto de instrucciones.


*/
/*
function calculadora(){

para crear una fincion se usa la palabra recerbada function seguida del nombre de la funcion yo puedo 
crearla funcion que me devuelva un texto, console log.

    return "hola soy la calculadora!";
}
/*
 si quiero que la funcion me devuelva un texto se utuliza return y se añade el texto que se espera devuelva
*/
/* 
console.log(calculadora(), calculadora(), calculadora())
si solicitamos la funcion calculadora veremos tres veces el texto insertado en return
*/
/*
// de esta forma se define la funcion
function calculadora(){
    // se ejecutaran este conjutno de instrucciones
    console.log("hola soy la calculadora")
    console.log("si soy yo")
}
// esto es invocar o llamar la funcion
calculadora()
calculadora()
calculadora()
calculadora()

tambien se pueden meter console log dentro de la funcion para invocarla y que se ejecuten las instrucciones 
del console log en este caso se realizaria 4 veces la funcion lanzado los dos console log señalados
*/

function calculadora(){
    console.log("hola soy la calculadora")
    console.log("si soy yo")
        
    return "hola soy la calculadora!";

}
var resultado = calculadora();
console.log(resultado)
/* podemos meter la funcion calculadora en una variable y ejecutarla para que con un console log se ejecute
el return
*/