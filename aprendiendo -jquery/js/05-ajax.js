'use strict'

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    sesion 105 Ajax en jQuery

Ajax permite hacer peticiones asincronas en un servidor sin 
nesesidad de que la pagina actualize, simplemente se actuaqliza
una parte de la pagina cargando una informacion 

     //Load permite hacer una peticion ajax por get e incrustqar el 
    //resultado en cualquier elemento en la pagina


el tema de las peticiones es que se puede usar de varias formas 
incrustar en la pagina un troso de html o tambien recoger json 
de la forma que nos interesa

en una aplicasion monolitica es comun incrustar html
         

        datos.load("https://reqres.in/");
    con este load hacemos que en el div datos se muestre el contenido en ese html
*/

$(document).ready(function(){
var datos = $("#datos");
    //Load 
    datos.load("https://reqres.in/");








    alert("todo listo");
});