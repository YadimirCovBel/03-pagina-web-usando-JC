'use strict'

// Array, Arreglos, Matrices
/* coleccion de tipos de datos de valores que puede tener una varialble, con una variable se puede tener un solo valor pero con un Array 
puedo tener muchos valores dentro de una variable y esos valores estan almacenados  almacenados dentro de una matris dentro de un conjunto
de valores.

var nombre = "Yadimir Covarrubias"
//  un Array se puede definir con [] los corchetes, un Array es una coleccion de varios datos teniendo una variable con valores
var nombres = ["Yadimir Covarrubias", "Yumaira Rios", "Carlos Quintero", "Paul Covarrubias", 52, true];
/* se pueden incluso meter Arrays dentro de Arrays que seria una Array multi funcional
se pueden meter todo tipo de datos dentro de una Array texto, numericos, buleanos 


sepueden definir el Array con los corchetes o definirlos en forma de objetos
cada uno de estos valores estan guardados dentro de un indice  en la programacion los indices inician en 0 por lo tanto PHP seria el 0, JS 1, Go 2, Java 3

var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres)
console.log(lenguajes)


// para poder acceder a alguna variable del Array en espesifico se requiere introducir su numero dentro del indice en este caso seleccionaremos el 2
console.log(nombres[2]);
// para seleccionar una variable espesifica debe de introducirse entre [] corchetes el numero de variable que se utilizaria.

/* 
array avanzados


var nombre = "Yadimir Covarrubias"
var nombres = ["Yadimir Covarrubias", "Yumaira Rios", "Carlos Quintero", "Paul Covarrubias", 52, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

*/

//console.log(nombres.length);
// ccuando usamos .length aplicado a un Array lo que hace es mostrar la cantidad de elementos en el mismo en vez de la cantidad de caracteres. 
/*

var elemento = parseInt(prompt("Que elemento del Array quieres?", 0));
//para poder sacar un elemento espesifico del indice del array se usa un prompt con el cual se escoge el numero que se ocupa segun el numero del indice  

alert(nombres[elemento]);
// colocamos un alert que trabaje con la variable elemento y esta es a la que se le introduciera el numero y arojara una opccion del indice

//para impedir que el que un usuario introdusca un numero fuera de las elecciones en el indice podemos usar un if 

if(elemento >= nombres.length){

    colocando nombres.length lo que hacemos es que el programa vea cuantas variables hay en el array en este caso 6  y toma ese numero para que elemento 
no sea mayor o igual a ese

alert("Introdusca un numero correcto entre las variables debe ser menor a: " + nombres.length); 
// colocamos un alert que muestre un popup si es un numero fuera de las opcciones


var elemento = parseInt(prompt("Que elemento del Array quieres?", 0));
// plus agrege  para que pida nuevamente el numero

alert("El usuario seleccionado es: " + nombres[elemento]);
// plus para que arroje el resultado ingresado en la ventana despues del aviso de que debe ser un numero menor a nombres.length 

}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);

}

*/


/*
para que nos arroje todos los elementos de un Array  por pantalla
*/
/*
document.write("<h1>lenguaes de programacion del 2018</h1>")
document.write("<ul>")
 <ul> es para generar una lista sin orden
for (var i = 0; i < lenguajes.length; i++){
    document.write("<li>" +lenguajes[i] + "</li>")
 la etiqueta <li> es para decalarar cada elemento que se ingresara a la lista generada </li> es para cerrar la declaracion

}
*/

/*
Recorrer arrays: for, forEach


var nombre = "Yadimir Covarrubias"
var nombres = ["Yadimir Covarrubias", "Yumaira Rios", "Carlos Quintero", "Paul Covarrubias", 52, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

document.write("<h1>lenguaes de programacion del 2018</h1>")
document.write("<ul>")
*/
/*
lenguajes.forEach((elemento, index, data)=>{
 debo primero poner el array que se planea usar y despues agregar .forEach  con el cual tendremos una funcion de callback la cual se  indica con 
 => paradefinirla con la flecha, esta funcion recibira varios parametros un valor o elemento, el indice o index y un valor que se llamara data

 tambien se podria generar de forma abrebiada 
 lenguajes.forEach((elemento)=>{} 
 con eso bastaria para que funcionara el forEach, 

 lenguajes.forEach((elemento, indice)=>{

si yo ocupo sacar los datos del indice es decir de que indice estoy tomando los elementos entonces ocupamos agregar el segundo parametro, de esta 
es visible que numero de dato.

tambien se tiene el tercer parametro que es el arreglo. que se agrega como arr, eso se ocuapria si requirieramos el array limpio dentro del bucle, 
el for each nos itera todo el array y lo muestra 

lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+ "-" +elemento+ "</li>")

});

document.write("</ul>");
*/

// recorrer un array con for in

var nombre = "Yadimir Covarrubias"
var nombres = ["Yadimir Covarrubias", "Yumaira Rios", "Carlos Quintero", "Paul Covarrubias", 52, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

document.write("<h1>lenguaes de programacion del 2018</h1>")
document.write("<ul>")


for(let lenguaje in lenguajes){
    //se crea una variable dentro del for en este caso lenguaje
    //let 
    //in
    document.write("<li>"+lenguajes[lenguaje]+ "</li>")
// se realiza un document.write que utilize lenguajes y agregamos lenguaje entre corchetes de esta forma tomamos el indice de 
// lenguajes y se utulizara en lenguaje

};

document.write("</ul>");




// Busqueda


/*
var busqueda = lenguajes.find(function(lenguaje){
// se crea una variable para realizar la busqueda en este caso busqueda
// usamos una fincion de callback
    return lenguaje == "PHP";
//realizara un return si encuentra el lenguaje 
});

console.log(busqueda)
*/

//una forma mas limpia de escribirlo es 

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP")
    
    console.log(busqueda)

// de esta forma nos indicara en la consola si econtro el lenguaje indicado de no encontrarlo dira undefined

//tambien existe el findeIndex que permite econtrar el lugar en el indice que se encuentra el elemento a buscar
var busqueda_index = lenguajes.findIndex(lenguaje => lenguaje == "PHP")
    
    console.log(busqueda_index)
// nos arrojara en que numero del indice en el array se encuentra

// otro metodo para econtrar si hay valores de algun tipo 
var precios = [10, 20, 30, 40, 50, 60]
var busqueda_cantidad = precios.some(precio => precio >= 40)
// con .some podemos hacer una busqueda en cuanto a las cantidades indicadas en las espesificasiones en este caso pedimos que buscara si encuentra 
// cantidades superiores a 40 en el array precios
    console.log(busqueda_cantidad)
