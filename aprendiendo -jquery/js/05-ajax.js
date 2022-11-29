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
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
sesion 107 post AJAX

    //post
      
//creamos un formulario en el index para que se agrege informacion por medio 
//de los inputs
    formulario.submit(function(e){
        //agregamos e a la funcion y tambien un .prevent default
        // para que no nos mande a otra pagina al realizar la funcion
        e.preventDefault();
              //creamos un Json para agregar a el post
            var usuario = {
                name: $('input[name="name"]').val(),
                    //asi seleccionamos el imput en la web al cual sele ingresa
                    //informacion y esta sera tomada por val para agregarlo
                web: $('input[name="web"]').val()
                };
                
            $.post($(this).attr("action"), usuario, function(response){
                console.log(response);
                }).done(function(){
                    //.done es para agregar una funcion al terminar en 
                    //este caso agregamos un alert para saber cuando
                    //termino el proceso 
                    alert("ususario agregado correctamente ");
                }); 
                //se agrego un return false para que no se pase a otra
                //pagina al usar la funcion
                return false;
    });

    alert("todo listo");
});

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Sesion 108 metodo $AJAX

// otro metodo para realizar peticiones es el $.ajax este metodo permite 
//manipular de forma ams amplia las cosas con este metodo podemos definir
//muchos aspectos de la peticion como el type, dataType y contentType.


                $.ajax({
                     type: 'POST',
                     dataType: 'json',
                     contentType: 'application/json',
                });
//en este caso pediremos la url

//en este caso pediremos la url, tambien definiremos el tipo de dato que 
//sera usuario 
                $.ajax({
                     type: 'POST',
                    url: $(this).attr("action"),
                    data: usuario,
//hay varios metodos en este caos before send, hara que antes de ser enviado
//realice una funcion. en este caso hicimos que nos envie a la terminar 
//un aviso de que se esta realizando el proceso.
                    beforeSend: function(){
                        console.log("enviado usuario...")
                    },
//success es una funcion que en caso de que todo se realice de forma
//adecuada enviara procesara la funcion o de no ser asi realizara lade
//error
                    success: function(response){
                        console.log(response)
                    },
                    error: function(response){
                        console.log("ha susedido un error")
                    },
                    //es para poner un tiempo para procesar 
                    timeout: 2000
                });
               
                return false;
    });


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
      

    formulario.submit(function(e){

        e.preventDefault();

            var usuario = {
                name: $('input[name="name"]').val(),
                    
                web: $('input[name="web"]').val()
                };
               /* 
            $.post($(this).attr("action"), usuario, function(response){
                console.log(response);
                }).done(function(){
                   
                    alert("ususario agregado correctamente ");
                }); 
                */

                $.ajax({
                     type: 'POST',
                    url: $(this).attr("action"),
                    data: usuario,

                    beforeSend: function(){
                        console.log("enviado usuario...")
                    },

                    success: function(response){
                        console.log(response)
                    },
                    error: function(response){
                        console.log("ha susedido un error")
                    },
                    timeout: 2000
                });
               
                return false;
    });


});