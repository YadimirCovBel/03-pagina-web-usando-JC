'use strict'

/*
lo primero que debemos hacer al trabajar con jQuery es 
comprobar si el documento esta listo
utilizando el selector document  
    $(document)
esto se refiere a toda la pagina web 
y despues la funcion ready

    $(document).ready(function(){
        console.log("estamos listos!")
    });
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

el signo $ siempre se refiere a jQuery aunque tambien se 
puede utulizar jQuery para que funcione pero es mejor $

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$ es jquery
(document) es el selector
.ready es el metodo  con una funcion de callback

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

selector de ID se usa 
    $("#rojo")
ene ste caos lo metimos a una variable 

    var rojo = $("#rojo");

de esta forma ya podemos hacer cualquier modificasion en el 
parrafo rojo, tambien despues de haber seleccionado el 
parrafo no hace falta volver a hacerlo para realizar mas 
modificasiones solo se agregan dentro de la misma seleecion
        
        $("#rojo").css("background","red")
                    .css("color","white");    
en este caso se realizaron dos cambios al parrafo 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Selector de clases : se usan cuando ocupas seleccionar a 
muchos elementos o darles una caracteristica a todos ellos
mientras que los id es para dar caracteristicas espesificas 
a un solo elemento .

      $('.zebra')
*/

$(document).ready(function(){

    $("#rojo").css("background","red")
                    .css("color","white")
                    ;

    $("#amarillo").css("background", "yellow")
                    .css("color","green")
                    ;

    $("#verde").css("background", "green")
                    .css("color","white")
                    ;

    $('.zebra')


    console.log("estamos listos!")
    console.log(rojo);
});

