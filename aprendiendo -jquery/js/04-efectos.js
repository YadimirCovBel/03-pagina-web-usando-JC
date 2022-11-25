
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

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
sesion 104 callback en efectos

ocultar.click(function(){
    $(this).hide();
    caja.slideUp('slow', function(){
        //en la accion de ocultar agregamos un segundo parametro 
        // una funcion de callback la cual mostrara un 
        //console.log avisandonos que ha temrinado de ocultarse
        console.log("cartel ocultado")
    });
    mostrar.show();


*/
$(document).ready(function(){
var caja = $("#caja")
var mostrar = $("#mostrar")
var ocultar = $("#ocultar")
var todoEnUno = $('#todoEnUno')
var animar = $('#animar')
mostrar.hide();

mostrar.click(function(){
    $(this).hide();
    caja.slideDown('fast');
    ocultar.show();
});

ocultar.click(function(){
    $(this).hide();
    caja.slideUp('slow', function(){
         console.log("cartel ocultado")
    });
    mostrar.show();

});


todoEnUno.click(function(){
    caja.slideToggle('fast');
});

animar.click(function(){
    //en este caso agregamos una animacion llamada marginLeft esta
    //lo que hace es mover el elemento seleccionado hacia la 
    //izquierda  el indicamos que se mueva 500 pixeles de forma 
    //lenta
    caja.animate({
                    marginLeft: '500px',
                    // fontSize agranda las letras
                    fontSize: '40px',
                    //hieght incrementa la altura del div
                    height: '110px'
                    }, 'slow')
         .animate({
                    // con borderRadius hacemos que sea mas 
                    //redondo el div seleccionado
                    borderRadius: '900px',
                    //marginTop mueve hacia abajo el elemento
                    //deacuerdo con la cantidad de px agregado
                    marginTop: '100px'    
                 }, 'slow')       
        .animate({
                     marginLeft: '0px',  
                    borderRadius: '0px'
                      
                 }, 'slow')   
                 
        .animate({
                    borderRadius: '100px',
                    marginTop: '0px'    
                 }, 'slow')          
         
        .animate({
                    marginLeft: '500px',
                    fontSize: '40px',
                    height: '110px'
                    }, 'slow')        
                 ;
});


});