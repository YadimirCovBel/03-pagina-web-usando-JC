
/*
en el index pondremos un contenedor global 

        <section id="global">
                    
                </section>
seria la caja blanca que contiene toda la web

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
<header></header>

para el emcabezado

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

CSS 
    le da unsombreado 
        box-shadow: 2px 2px 2px gray; 

    #logo{
     font-family: "Verdana", "Arial";
     // da la tipografia
     font-size: 30px;
     //da el tama;o de la letra
     letter-spacing:  4px;
     //espacio entre letas
     background: #235e3d;
     //fondo
     color: white;
     //color de la letra
     text-align: center;
     //alineado al centro
     width: 385px;
     height: 80px; 
}

para aplicar style a todo lo de la pagina web se usa el *{}



agregamso todos los styles de la pagina  

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

<nav> es para crear la barra de navegacion

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
    display: inline-block; hace que los elementos de la lista
    se vean alineados uno al lado del otro

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

#menu ul li:hover{
    background: #235e3d;
}

con esto en el ccs logramos hacer que cambie el color del fondo
cuando colocamos el mouse sobre el elemento.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

creamos un boton desde css despues de crear el <a href> 
en el html dandole el class button-more

.button-more{
    font-size: 14px;
    text-align: center;
    display: block;
    padding: 15px;
    background: #235e3d;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    width: 70px;
    
}

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

para generar un side bar se utiliza 

aside id="sidebar"></aside>

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Agregamos formulario 




*/

$(document).ready(function(){
  /////////////////////////////////////////////////////////////////////////////////
  //agregamos un if para que carge segun las paginas que 
  //que requieran el slider
  if(window.location.href.indexOf('index') > -1){  
  //slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        pager: true,

      });
    };
////////////////////////////////////////////////////////////////////////////////////
 //agregamos un id para que carge segun las paginas que 
  //que requieran los posts
  if(window.location.href.indexOf('index') > -1){ 

    //posts
    var posts = [
        {
            title: 'prueba de titulo 1',
            date: 'pubicado el dia ' + moment().date() + " del mes " + moment().format("MMM") + "en el año " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, urna eu aliquam faucibus, tortor ipsum pellentesque arcu, eu vestibulum ante dui vel neque. Proin sit amet enim quam. Praesent tincidunt imperdiet iaculis. Fusce consectetur quam non ante tempor, a commodo diam viverra. Sed blandit sit amet purus vitae tristique. Quisque pellentesque volutpat semper. Nam pulvinar sem ac magna tristique feugiat. In non ornare felis. Aliquam in turpis nec augue blandit pulvinar in vel odio.'
        },
        {
            title: 'prueba de titulo 2',
            date: 'pubicado el dia ' + moment().date() + " del mes " + moment().format("MMM") + "en el año " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, urna eu aliquam faucibus, tortor ipsum pellentesque arcu, eu vestibulum ante dui vel neque. Proin sit amet enim quam. Praesent tincidunt imperdiet iaculis. Fusce consectetur quam non ante tempor, a commodo diam viverra. Sed blandit sit amet purus vitae tristique. Quisque pellentesque volutpat semper. Nam pulvinar sem ac magna tristique feugiat. In non ornare felis. Aliquam in turpis nec augue blandit pulvinar in vel odio.'
        },
        {
            title: 'prueba de titulo 3',
            date: 'pubicado el dia ' + moment().date() + " del mes " + moment().format("MMM") + "en el año " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, urna eu aliquam faucibus, tortor ipsum pellentesque arcu, eu vestibulum ante dui vel neque. Proin sit amet enim quam. Praesent tincidunt imperdiet iaculis. Fusce consectetur quam non ante tempor, a commodo diam viverra. Sed blandit sit amet purus vitae tristique. Quisque pellentesque volutpat semper. Nam pulvinar sem ac magna tristique feugiat. In non ornare felis. Aliquam in turpis nec augue blandit pulvinar in vel odio.'
        },
        {
            title: 'prueba de titulo 4',
            date: 'pubicado el dia ' + moment().date() + " del mes " + moment().format("MMM") + "en el año " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, urna eu aliquam faucibus, tortor ipsum pellentesque arcu, eu vestibulum ante dui vel neque. Proin sit amet enim quam. Praesent tincidunt imperdiet iaculis. Fusce consectetur quam non ante tempor, a commodo diam viverra. Sed blandit sit amet purus vitae tristique. Quisque pellentesque volutpat semper. Nam pulvinar sem ac magna tristique feugiat. In non ornare felis. Aliquam in turpis nec augue blandit pulvinar in vel odio.'
        },
        {
            title: 'prueba de titulo 5',
            date: 'pubicado el dia ' + moment().date() + " del mes " + moment().format("MMM") + "en el año " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, urna eu aliquam faucibus, tortor ipsum pellentesque arcu, eu vestibulum ante dui vel neque. Proin sit amet enim quam. Praesent tincidunt imperdiet iaculis. Fusce consectetur quam non ante tempor, a commodo diam viverra. Sed blandit sit amet purus vitae tristique. Quisque pellentesque volutpat semper. Nam pulvinar sem ac magna tristique feugiat. In non ornare felis. Aliquam in turpis nec augue blandit pulvinar in vel odio.'
        },
        {
            title: 'prueba de titulo 6',
            date: 'pubicado el dia ' + moment().date() + " del mes " + moment().format("MMM") + "en el año " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, urna eu aliquam faucibus, tortor ipsum pellentesque arcu, eu vestibulum ante dui vel neque. Proin sit amet enim quam. Praesent tincidunt imperdiet iaculis. Fusce consectetur quam non ante tempor, a commodo diam viverra. Sed blandit sit amet purus vitae tristique. Quisque pellentesque volutpat semper. Nam pulvinar sem ac magna tristique feugiat. In non ornare felis. Aliquam in turpis nec augue blandit pulvinar in vel odio.'
        },
    ];
   posts.forEach((item, index)=>{

        var post = `
                
                <article class="post">
                <h2>${item.title}</h2>
                <span class="date"> ${item.date}</span>
                <p>
                ${item.content}    
                </p>
                <a href="#" class="button-more">
                    Leer mas
                </a>
            </article>
        
            `;

        $("#posts").append(post);

        });
    };
   ///////////////////////////////////////////////////////////////////////////////

    // selector de tema
    var theme = $("#theme")
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });

    /////////////////////////////////////////////////////////////////////////

    // boton para scroll hacia arriba web

    $('.subir').click(function(e){
            //e.preventDefault es para evitar que el link nos 
            //lleve a otro sitio 
            //esto funcionara con la e en la funncion de click
        e.preventDefault();
            //usamos animate sobre el html y body
        $('html, body').animate({
                //se animara scroll top 
            scrollTop: 0
                //la animaccion durara 500 milisegundos
        }, 500);
            return false;
    });

////////////////////////////////////////////////////////////////////////////////

    // formulario de login falso que permita guardar en 
    //local storage la sesion


$("#login form").submit(function(){

    // con esto tomaremos el valor de nombre
    // creamos una variable donde se guardara
    var form_name = $("#form_name").val();
    //usamos local storage set item para que lo guarde en 
    //local storage 
    localStorage.setItem("form_name",form_name);

});
    //con local storage get item sacamos la informacion 
    // seleccionamos for name  ya que esta asi guardado
    // dentro del local storage
var form_name = localStorage.getItem("form_name");
    //con este if comprobamos si for_name tiene contenido
    //de ser asi nos mostrara el mensake de lo contrario
    // tomara la segunda accion 
if(form_name != null && form_name != "undefined"){

        //creamos la variable para reutilizar esa direccion id
var about_p = $("#about p");
        //con esto tomaremos un div para colocar alli el dato
        //for_name para que se muestre en la web despues de ser
        //extraido
        //tomamos el div about y p de parrafo para despues agregar
        //html para agregar enla web un mensaje
    about_p.html("<br><strong>Bienvenido, "+form_name+"</strong>");

        //agregamos el seleccitro de about para  agregar un link para 
        //cerrar la sesion con el apned se agrego directamente al html
    about_p.append("<br><a href='#' id='logout'>Cerrar Sesion</a>");

        //con esto seleccionamos el div donde estan los inputs
        // del formulario y lo ocultamos
    $("#login").hide();

        //con esto seleccionamos el boton para cerrar sesion que agregamos
        // al ser seleccionado se borrara el locla storage con .clear
    $("#logout").click(function(){
        localStorage.clear();
        //con location.reload(); logramos que la pagina se vuelva a cargar 
        //cuando presionen cerrar sesion
        location.reload();
    });


}
///////////////////////////////////////////////////////////////////////////////
// Acordeon
//con location href indexOf revisa si el html contiene la palabra indicada 
if(window.location.href.indexOf('about') > -1){ 
$("#acordeon").accordion();

};
////////////////////////////////////////////////////////////////////////////
//Reloj
//con location href indexOf revisa si el html contiene la palabra indicada 
if(window.location.href.indexOf('reloj') > -1){ 
    //setInterval hace que cada tanto tiempo se repitan
    //unas instrucciones
    setInterval(function(){
        var reloj = moment().format('h:mm:ss');

        $("#reloj").html(reloj);
    



    }, 1000);

}
// validacion de datos
if(window.location.href.indexOf('contact') > -1){ 
$("form input[name='date']").datepicker({
    dateFormat: 'dd/mm/yy'
});
$.validate({
    lang: 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true
  });
}









    
/*    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//extra local storage tema seleccionado color


$("#to-red").submit(function(){

    
    var tRed = $("#to-red").val();

    localStorage.setItem("tRed",tRed);

});
 
var tRed = localStorage.getItem("tRed");


////////////////////////////////////////////////////////////////
//Extra separar todas las funciones en ficheros individuales

//////////////////////////////////////////////////////////////////
*/
});