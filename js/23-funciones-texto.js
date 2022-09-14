'use strict'

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