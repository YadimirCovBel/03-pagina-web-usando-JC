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

            overflow:scroll; 
    al agregar overflow:scroll; a el div donde usamos el load logramos que se vea 
    el contenido de la pagina con una barra de scroll


Load es un metodo GET

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

        sesion 106 metodos get y post

    //Get
//con get podemos poner una pagina y comos egundo parametro dar espesificasiones
//en este caos seleccionaremos una pagina escogiendo page: 3 y generamos una
//function a la cual llamamos response 

        $.get("https://reqres.in/api/users?page=2", {page:3} , function(response){
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        $.get("https://reqres.in/api/users?page=2", function(response){
                    response.data.forEach((element, index) => {
                        datos.append("<p>"+element.first_name+" "+element.last_name +"</p>");
                    });
            });
con 

*/

$(document).ready(function(){
var datos = $("#datos");
var formulario = $("#formulario");
    //Load 
 //   datos.load("https://reqres.in/");


    //Get

    $.get("https://reqres.in/api/users?page=2", function(response){
            response.data.forEach((element, index) => {
                datos.append("<p>"+element.first_name+" "+element.last_name +"</p>");
            });
    });
    //post
      
//creamos un formulario en el index para que se agrege informacion por medio 
//de los inputs
    formulario.submit(function(){
              //creamos un Json para agregar a el post
            var usuario = {
                name: $('input[name="name"]').val(),
                    //asi seleccionamos el imput en la web al cual sele ingresa
                    //informacion y esta sera tomada por val para agregarlo
                web: $('input[name="WEB"]').val()
                };
                console.log(usuario);
            $.post($(this).attr("action"), usuario, function(response){
                console.log(response);
                }); 

    });

    alert("todo listo");
});