'use strict'

/*
hacer un programa
1.-que pida 6 numeros por patanlla y los meta en un array
2.- tiene que mostrar el array entero, todos los elementosen el body de la pagina y la consola
3.- tenemos que sacar el array o vectro ordenado y mostrarlo
4.- invertir el orden del array y mostrarlo
5.- mostrar cuantos elementos tiene el array
6.- hacer una busqueda de 1 valor introducido por el usuario y que nos diga si esta en el array y nos diga su posision en el indice
*/




/*
var numeros = new Array (6);
//creamos un nuevo array e indicamos entre los () cuantas posiciones tendra dentro

for(var i = 0; i <= 5; i++){
//creamos un for el cual esta compuesto de el contador, la condicion y la accion. para pedir los numeros al usuario en este caso ponemos que i <= 5 
//ya que el indice cuenta del 0 al 5 por lo tanto  si son menos de 5 pedira ingresar mas
numeros[i] = parseInt(prompt("intriduce un numero", 0))
}
console.log(numeros)
// un console.log para ver los datos ingresados
*/



//crearemos una funcion apra que se muestre ordenado en el body de la pagina que seria el  punto 3.- del ejercisio
function mostrarArray(elementos, textoCustom = ""){
    //se sustitulle todo lo que se uso con numeros por la variable elementos
    // se coloca TextoCustom con valor vacio para pasarle un dato si es de interes agregarle algo
    //textoCustom sirve para poder ingresar mas adelante un texto a la funcion cuando se aplica
    document.write("<h1>Numeros ingresados por el usuario"+textoCustom+"</h1>");
    document.write("<ul>")
    //se crea una lista sin orden
    numeros.forEach((elementos, index) => {
        document.write("<strong>"+elementos+"</strong><br/>");
    
    });
    document.write("</ul>");
}


/* 
otra forma de hacer que el usuario ingrese 6 numeros a un array es esta y prefiero este metodo me parece mas limpio!!!!!!
*/
// 1.- pedir 6 numeros al usuario
var numeros = [];
// en este caso se creo un array vacio 


for(var i = 0; i <= 5; i++){
// se limito el total de datos ingresados en el array con el for 
numeros.push(parseInt(prompt("introduce un numero", 0)));


// con .push se estan ingresado los datos al array, con parseInt se convierte lo ingresado a numero, con prompt se genera una ventana para que el 
//usuario ingrese el numero
}
// 2.- mostrar el array por la consola
console.log(numeros)
// 2.- mostrar el array en el body de la pagina web mi solucuion
/*
document.write("<h1>Numeros ingresados por el usuario</h1>")
document.write("<ul>")

for(let numero in numeros){
    /
    document.write("<li>"+numeros[numero]+ "</li>")

};
document.write("</ul>");
*/
//2.- solucion del curso

document.write("<h1>Numeros ingresados por el usuario</h1>");

numeros.forEach((numero, index) => {
    document.write("<strong>"+numero+"</strong><br/>");

});

// 3.- ordenarlo y mostrarlo

numeros.sort(function(a, b){return a-b});
// con .sort() se logra que organice los datos, si queremos que se organice de forma numerica debemos agregar al sort una funcion 
// que seria .sort(function(a, b){return a-b}); si quisieramos hacerlo de forma decendente se invirten a y b (function(a, b){return b-a});

mostrarArray(numeros, ' ordenados');

// con la Funcion que creamos mostrarArray podemos mostrar en el body de la pagina el array y agregar un texto para definir  
console.log(numeros);
// 4.- invertir el orden del array y mostrarlo
numeros.reverse();

mostrarArray(numeros, ' invertido');
console.log(numeros)

//5.- mostrar cuantos elementos tiene el array mi solucion !!!!!!!!

console.log(numeros.length)
document.write("<h2>la cantidad de elementos en el array son: "+numeros.length+"</h2></br>")
//6.- hacer busqueda de 1 valor 

var Busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == Busqueda);

if(posicion && posicion != -1){
    // el -1 indica que no hay coincidencias por eso mientras sea desigual a -1 significa que si hay coincidencias
document.write("<h1>ENCONTRADO</h1>")
document.write("<h1> posicion de "+Busqueda+" es "+posicion+"</h1>")
}else{
    document.write("<h1>NO ENCONTRADO</h1>")

}
