'use strict'

/*JSON - JavaScript Object Notation
un bojeto de JS se define con {} al crear la variable dentro de 
las llaves agregamos todas las propiedades de la variable en 
este caso titulo, year y pais para despues asignarle un valor a
cada variable separandolo por comas,,,,,

si se desea acceder a una propiedad espesifica solo se requerier 
escribir la variable  un punto y la propiedad ejemplo 

pelicula.pais

tambien podemos cambiar las propiedades de una variable accesdiendo de
la misma forma en este caso cambiaremos el titulo

pelicula.titulo = "superman beige"

usar objetos json son mas ligeros para enviar y recibir datos 

podemos crea un array de JS y dentro del mismo meter las variables
que utilizamos en la variable pelicual y crear un arrac con JSON
donde agregamos un nuevo elemento con las variables y tambien
pelicula que es el que teniamos ya previamente creado

var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais: "Francia"
    }, pelicula

crearemos un for in para recorrer las peliculas despues de agregar un
div en el html pagina.html, vreamos index para que funcione con el 
for in despues p para generar parrafos donde se escribira de la forma
siguiente donde nos mostrara los titulos de las peliculas

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo);
    caja_peliculas.append(p);

}

tambien se creo la variable vaja para enerar un a caja de texto

se puede tambien agreagar otra variable a lo que se arojjara de forma
bastante simple 

 p.append(peliculas[index].titulo + " - "
    + peliculas[index].year);
simplemente sumando el otro elemento 
*/
window.addEventListener('load', function(){


    var pelicula = {
        titulo: 'batman vs superman',
        year: 2017,
        país: 'Estados Unidos De America'
    };
console.log(pelicula)

var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais: "Francia"
    }, pelicula

];
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - "
    + peliculas[index].year);
    caja_peliculas.append(p);

}

})
//final del load