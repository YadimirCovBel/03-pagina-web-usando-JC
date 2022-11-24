'use strict'
/*
sesion 101

crearemos vinculos para que pormedio de una lista puedas ir a otras paginas web

    primero tomamos todos los elementos que tengan la etiqueta 'a', despues usamos
    la variable that para referirnos a lo tomado con la etiqueta 'a' y despues
    usamos text para tomar los enlaces y mostrarlos en la pagina web  en el body
        $('a').each(function(){
    var enlace = ($(this).attr("href"));
    var that = $(this);
    that.text(enlace);
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// con esto tomamos el boton de la web y cuando sea presionado mostrara lo escrito
// en el input  add_link ya que val toma el contenido 
$('#add_button').click(function(){
    $('#menu'.html('<a href = "'+ $("#add_link").val()+'"><a/>'));
})    ;
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
para poder agregar elementos a la lista utilizamos este cofigo remplazando .html
por append, tambien movimos el codigo que hace visible las direcciones web
a una funcion llamada reloadlink, tambien pudiera usarse prepend la diferencia es 
que append lo pone al final de la lista y el prepend al inicio, tambien existe el
BEFOR Y AFTER  pero esos lo agregan fuera de la lista.


            reloadLinks();
$('#add_button').click(function(){
    $('#menu').append('<li><a href = "'+ $("#add_link").val()+'"><a/></li>');

    reloadLinks();
});

});

function reloadLinks(){
    $('a').each(function(){
        var enlace = ($(this).attr("href"));
        var that = $(this);
        that.text(enlace);
    
    });
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

tambine podemos cambiar los  atributos  de los enlaces 
            //con attr le agregamos atributos en este caso  con target y blanck
            //se abrira una nuevo tap (pesta;a pagina)
        that.attr('target','blanck');

tambien podemos quitar atributos en este caso le agregamos el atributo disabled al 
boton de la web y con 
        $('#add_button')
            .removeAttr('disabled')
le quitamos ese atributo para que el boton vuelva a ser funcional.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */
$(document).ready(function(){
reloadLinks();
$('#add_button')
    .removeAttr('disabled')
    .click(function(){
    $('#menu').prepend('<li><a href = "'+ $("#add_link").val()+'"><a/></li>');

    $("#add_link").val('');

    reloadLinks();
});



alert("estamos listos");
});

function reloadLinks(){
    $('a').each(function(){
        var enlace = ($(this).attr("href"));
        var that = $(this);
        
        that.attr('target','blanck');

        that.text(enlace);
    
    });
}