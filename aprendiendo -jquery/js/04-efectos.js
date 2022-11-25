
/*
agregamos dos botones y un div a la web y le dimos style a el div
haremos que un boton muestre el div y otro lo oculte

        var caja = $("#caja")
        // con esto seleccionamos el boton mostrar y al darle click
        //conseguimos que se muestre la caja 
            $("#mostrar").click(function(){
                    $(this).hide();
                    // agregando el fast en el show hacemos 
                    //que se agrege un efecto en el que aparece
                    //de froma rapida en un degradado
                    caja.show('fast');
                    ocultar.show();
                });
        //con esto seleccionamos el boton ocultar y al darle click 
        //conseguimos que se oculete la caja    
            $("#ocultar").click(function(){
                // con .hide se oculta el boton despues de usarlo
                    $(this).hide();
                    // agregando el slow en el show hacemos 
                    //que se agrege un efecto en el que aparece
                    //de froma lenta en un degradado
                   caja.hide('slow');
                //con este show hacemos que el otro boton aparesca
                    mostrar.show();
                });
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

     otro efecto que podemos agregar son fadeIn y fadeOut
                     caja.fadeIn('fast');
                      caja.fadeOut('slow');
    lo que hace es agregar un efecto de difuminado 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    tambien existe el fadeTo el cual es un efecto similar al 
    fadeIn y el fadeOut solo que en este debemos agregar un 
    segundo parametro el cual 1 seria mostrar y 0 ocultar
                caja.fadeTo('fast', 1);
                caja.fadeTo('slow', 0);
     el fadeTo tiene la peculiaridad de que puedes no ocultar del
     todo algo o mostrar del todo algo ya que el 1 es mostrar pero 
     el .8 seria mostrar casi al completo mientras que .2 igual
     seria casi hacerlo invisible

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
se agrego un boton nuevo que se llama todo en uno con el texto
abrir 
var todoEnUno = $('#todoEnUno')

todoEnUno.click(function(){
    //con toggle se oculta y muestra un elemento al ser 
    //utilizado con jQuery, 
            //caja.toggle('fast');
    //tambien existe el fadeToggle el cual oculta y muestra el 
    //elemento vinculado pero con efecto de difuminado
            //caja.fadeToggle('slow');
    //tambine existe el slideToggle que hace lo mismo pero
    //con un efecto de deslizado
    caja.slideToggle('fast');

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

tambien podemos hacer el efecto slide con 

        mostrar.click(function(){
            $(this).hide();
            caja.slideDown('fast');
            ocultar.show();
        });

        ocultar.click(function(){
            $(this).hide();
            caja.slideUp('slow');
            mostrar.show();
        });
        });


*/
$(document).ready(function(){
var caja = $("#caja")
var mostrar = $("#mostrar")
var ocultar = $("#ocultar")
var todoEnUno = $('#todoEnUno')

mostrar.hide();

mostrar.click(function(){
    $(this).hide();
    caja.slideDown('fast');
    ocultar.show();
});

ocultar.click(function(){
    $(this).hide();
    caja.slideUp('slow');
    mostrar.show();
});


todoEnUno.click(function(){
    caja.slideToggle('fast');
});

});