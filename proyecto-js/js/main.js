'use strict'

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
  
    //slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        pager: true,

      });



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
});