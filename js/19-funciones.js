'use strict'

/* las funciones son un grupo ordenes agrupados con un nombre completo concreto es desir en una funcion tendre 
un conjunto de reglas, funciones o cosas que se van a realizar y yo puedo tomar esa funcion y reutlizarla 
tanto como requiera 

ejemplo acelerar un coche o frenar un coche son un conjunto de ordenes ejecutadas

una funcione es una agrupacion reutilizable de un conjunto de instrucciones.


*/
/*
function calculadora(){

para crear una funcion se usa la palabra recerbada function seguida del nombre de la funcion yo puedo 
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
/*
function calculadora(){
    console.log("hola soy la calculadora")
    console.log("si soy yo")
        
    return "hola soy la calculadora!";

}
var resultado = calculadora();
console.log(resultado)
 
podemos meter la funcion calculadora en una variable y ejecutarla para que con un console log se ejecute
el return
*/

/*

PAAMETROS

una funcion aparte de ejecutar instrucciones puede recibir parametros que son variables que alteran la 
logica o el resultado que nos devolvera la funcion, de esta manera es mas reutilizable una funsion 

*/
/*

function calculadora(numero_1, numero_2){
    //se agregaron parametros 1 y 2 para que las cantidades sean ingresadas y cambien resultados
    console.log("suma: "+ (numero_1+numero_2));
    console.log("resta: "+ (numero_1-numero_2));
    console.log("multiplicasion: "+ (numero_1*numero_2));
    console.log("division: "+ (numero_1/numero_2));
        console.log("*solo soy una separacion ********************************************************")
    /*
    return "hola soy la calculadora!";
    por el momento no usaremos el return
    */
/*
}
//en la invocasion se deben poner las cantidades para numero_1 y numero_2
calculadora(12, 8);
calculadora(98, 2);
 de esta forma ya da resultados diferentes incluso se pueden ingresar numeros en la terminal del navegador
 y entregara resultados pasados por la funcion de la calculadora
*/

/*

nuevo ejemplo codigo


se puede ingresar la funcion dentro de un bucle en este caso un for
*/
/*
function calculadora(numero_1, numero_2){

    console.log("suma: "+ (numero_1+numero_2));
    console.log("resta: "+ (numero_1-numero_2));
    console.log("multiplicasion: "+ (numero_1*numero_2));
    console.log("division: "+ (numero_1/numero_2));
        console.log("*solo soy una separacion ********************************************************")

    }

for(var i = 1; i <= 10; i++){
console.log(i)
    calculadora(i, 8)
}

/*
 haremos que mientras que la i sea menor a 10 se repetira la funcion, introducimos la funcion dentro del
bucle donde 1 sera el numero_1 y 8 el numero_2
*/

/* 
pareamentros opcionales
son parametros que no es obligatorio meterle resultado si no que ya vienen algo por defecto
en este caso mostrar = false
*/
/*
function calculadora(numero_1, numero_2, mostrar = false){

    if(mostrar == false){
    console.log("suma: "+ (numero_1+numero_2));
    console.log("resta: "+ (numero_1-numero_2));
    console.log("multiplicasion: "+ (numero_1*numero_2));
    console.log("division: "+ (numero_1/numero_2));
        console.log("*solo soy una separacion ********************************************************")
    }else{
        document.write("suma: "+ (numero_1+numero_2) +"<br/>");
        document.write("resta: "+ (numero_1-numero_2) +"<br/>");
        document.write("multiplicasion: "+ (numero_1*numero_2) +"<br/>");
        document.write("division: "+ (numero_1/numero_2) +"<br/>");
        document.write("*solo soy una separacion ********************************************************")
            
    }
    }

    calculadora(10, 8)
    calculadora(5, 2, true)
    //se agrego un true para que se aplique el else mostrandoen la pagina
*/

/* 
funciones dentro de funciones
*/

function PorConsola(numero_1, numero_2){
    console.log("suma: "+ (numero_1+numero_2));
    console.log("resta: "+ (numero_1-numero_2));
    console.log("multiplicasion: "+ (numero_1*numero_2));
    console.log("division: "+ (numero_1/numero_2));
        console.log("*solo soy una separacion ********************************************************")
   
}
function PorPantalla(numero_1, numero_2){

        document.write("suma: "+ (numero_1+numero_2) +"<br/>");
        document.write("resta: "+ (numero_1-numero_2) +"<br/>");
        document.write("multiplicasion: "+ (numero_1*numero_2) +"<br/>");
        document.write("division: "+ (numero_1/numero_2) +"<br/>");
        document.write("*solo soy una separacion ********************************************************")
            
    }
    function calculadora(numero_1, numero_2, mostrar = false){
        if(mostrar == false){
            PorConsola(numero_1, numero_2)

    }else{
            PorPantalla(numero_1, numero_2)
    }
        return true;
    }
    calculadora(10, 8)
    calculadora(5, 2, true)
    calculadora(20,1)
    calculadora(3, 2, true)