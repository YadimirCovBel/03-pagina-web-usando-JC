'use strict'
/*
// propiedades o metodos que nos permiten trasnformar textos, transformacion de textos
var numero = 444
var texto1 = "biembenido al curso de javascrip"
var texto2 = "es muy buen curso"

var dato = numero.toString();
//con .toString(); esta propiedad combierte en string la variable.

    dato = texto1.toUpperCase();
// toUpperCase es para convertir todo en matusculas

    dato = texto2.toLowerCase();
// toLowerCase es para convertir el texto en minusculas
console.log(typeof dato +"  "+ dato)
//typeof es para que se muestre el tipo de dato que es

// calcular longitud de texto

var nombre = "Yadimir Covarrubias Beltran";
// en este caso se uso para contar las caracteres ingresadas en la variable nombre dando un total de 27 contado los espacios
 //   nombre = ["hoa", "hola"];
// en este caso se uso para contar la cantidad de elementos dentro de la rai
console.log(nombre.length);
//con esto puedo contar cuantas letras tiene un string, en general sirve para contar elementos en una variable

//concatenar - unir textos

// var TextoTotal = texto1+ " " +texto2;
var TextoTotal = texto1.concat(" "+texto2)
// es util para cuando ocupas unir textos concatenados.
console.log(TextoTotal)
*/

/* 
como realizar busquedas en el texto
*/

/*
var numero = 444
var texto1 = "bienvenido al curso de javascrip curso"
var texto2 = "es muy buen curso"
var busqueda = texto1.indexOf("curso");
// .indexof() es para realizar busquedas de una palabra en un string y nos arrojara la primera coincidencia
// en este caso se uso para buscar la palabra curso a lo que arroja que se encuentra en el caracter 14 

var busqueda = texto1.lastIndexOf("curso");
//con lastindexof.(); vusca la ultima coinsidencia de la palabra dentro de un string
// en este caso nos arroja que el caracter 33 
console.log(busqueda)

var busqueda = texto1.search("curso");
// la palabra .search(); tambien funciona para encontrarpalabras en un string
// en este caso igual arroja que en el caracter 14
console.log(busqueda)
*/

//si buscara una palabra que no se encuentra en el string nos arrojara -1 indicando que no existe

/*
  tambine existe el metodo match lo que hara es devilver una array con las palabras, una rai es una coleccion 
de elementos que van con su indeice desde el 0 ena delante. 
var busqueda = texto1.match("curso");
// con match(""); nos arroja una Array con ls informacion de la primera coincidencia econtrada
var busqueda = texto1.match(/curso/gi);
// con match(//gi); nos muestra todas las coincidencias
*/
/*
var busqueda = texto1.substr(14,5);
// .substr(14,5) lo que hace es extraer texto de un string el 14 indica desde donde comenzara a extraer y el 5 cuantas letras tomara
*/
/*
var busqueda = texto1.charAt(14);
// este metodo sirve para sacar una letra en concreto charat(44) indica que sacara la letra numero 14 en un string lo cual sacara la letra c
*/
/*
var busqueda = texto1.startsWith("bienvenido");
// starswith arroja true o false si el string inicia con lo indicado en este caso bienvenido por lo que dara true
var busqueda = texto1.endsWith("bienvenido");
// endswith(); arroja true o false si la palabra se encuentra al final del string en este casod ara false
console.log(busqueda)


var numero = 444
var texto1 = "bienvenido al curso de javascrip curso"
var texto2 = "es muy buen curso"

var busqueda = texto1.includes("curso");
// includes( ) me arroja si la palabra existe en el string

console.log(busqueda)
*/


// Transformacion de texto
//reemplazar, separar y cortar texto

var numero = 444
var texto1 = "bienvenido al curso de javascrip curso"
var texto2 = "es muy buen curso"

var busqueda = texto1.replace("al curso", "la clase");
// utilizando replace(,) se introduce el texto que se busca remplazar y despues de la coma lo que se colocaria

console.log(busqueda)