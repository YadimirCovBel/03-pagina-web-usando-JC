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

ya teniendo seleccionados los elementos con la class podemos 
realizar modificasiones en todos a la vez por ejemplo
en este caso tenemos seleccionados dos parrafos y a ambos
les aplicaremos un dashesd

     var mi_clase = $('.zebra');
        mi_clase.css("border","5px dashed black")

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
NOTA:
otra forma para seleccionar un elemento de un array es .eq
    console.log(mi_clase.eq(1))
de esta forma se selecciona 1 elemento del array

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
modificamos la var mi clase ya que en index agregamos las 
modificasiones de .css("border","5px dashed black") y ahora
con esto lo que hacemos es que se agrega padding en los 
elementos clase zebra y tambien hacemos que al dar click 
en los elementos de clase sin borde se vuelvan clase 
zebra

    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sin_borde').click(function(){
        console.log("click dado")
        $(this).addClass('zebra');    
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Seleccionar por etiquetas 


    var parrafos = $('p');
        parrafos.click(function(){
            $(this).removeClass("zebra");
        });


con esto seleccionamos a todas las etiquetas y despues de 
darle click se le quitara la clase zebra

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

en el index se agrego la clase .grande para que funcione 

 var parrafos = $('p').css("cursor", "pointer");
        parrafos.click(function(){
            var this1 = $(this);
            if(!this1.hasClass('grande')){
                this1.addClass('grande');
            }else{
                this1.removeClass('grande');
            }
           
        });

con esto hacemos que al dar click se agrege o quite el .grande
de los parrafos, tambien 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

    var parrafos = $('p').css("cursor", "pointer");
con esto hacemos que cuando pases el mouse sobre un parrafo
se vea la mano de pinter en el navegador

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

Selectores por atributo

         $('[title="Google"]').css('background', 'green');
        $('[title="Facebook"]').css('background', 'blue');
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11


Agregar clases a elementos

        $('p, a').addClass('margen-superior');

    con eso agregamos la clase margen-superior a todos los parrafos


        */

$(document).ready(function(){

    //selector de ID se usa 
    $("#rojo").css("background","red")
                    .css("color","white")
                    ;

    $("#amarillo").css("background", "yellow")
                    .css("color","green")
                    ;

    $("#verde").css("background", "green")
                    .css("color","white")
                    ;

    var mi_clase = $('.zebra').css("padding", "5px");
//Selector de clases 
    $('.sin_borde').click(function(){
        console.log("click dado")
        $(this).addClass('zebra');
    })

// se agrego la clase .grande para que funcione 
//eleccionar por etiquetas 
var parrafos = $('p').css("cursor", "pointer");
        parrafos.click(function(){
            var this1 = $(this);
            if(!this1.hasClass('grande')){
                this1.addClass('grande');
            }else{
                this1.removeClass('grande');
            }
           
        });

//selector por atributo 

        $('[title="Google"]').css('background', 'green');
        $('[title="Facebook"]').css('background', 'blue');


// otros 

//$('p, a').addClass('margen-superior');


    console.log("estamos listos!")
    console.log(mi_clase);
});
