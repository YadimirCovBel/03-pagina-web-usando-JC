'use strict'
/*

veremos los eventos mouse over y mouse out
        HTML
            agregamos en el html eventos al codigo dentrodel style esto para que al pasar el mouse 
        sobre la caja cambiara de color  

           #caja:hover{
            background-color: red;
        }

    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        HTML
        #caja:hover{
            transition: 300ms all;
            background-color: red;
            cursor:pointer
            }

             agregando transition le damos tiempo para que el evento se efectue en este caso
          el cambio de color.

                tambien ala gregar cursor:pointer estamos haciendoq ue cuando el mouse se este
            sobre la caja este cambia a pointer (la mano)
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    pero todo eso fue en el html ahora lo haremos en el JS
            JS


                var caja = $("#caja");

                     caja.mouseover(function(){
                        $(this).css("background","red");
                 })

        creamos la variable caja la cual es el selector del elemento en el html y jQ
    para despues aplicar los efectos mouse over y el cambio de color sobre el elemento 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Clase 97 HOVER

                  //hover
    
                var caja = $("#caja");
            //mouseover
                function cambiaRojo(){
                    $(this).css("background","red");
                }

            //mouseout
                function cambiaVerde(){
                    $(this).css("background","green");
                }
                    //hover
                caja.hover(cambiaRojo, cambiaVerde);
        
        tomamos la variable caja para aplicarla con .hover y tambien las funciones de cambio
    de color dandoles nombre para agregarlos en el hover  dando el mismo resultado que en 
    la sesion anterior con menos codigo. 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
                sesion 98 click y doble click




*/
$(document).ready(function(){

//veremos los eventos mouse over y mouse out
    /*
    var caja = $("#caja");
//mouseover
    caja.mouseover(function(){
        $(this).css("background","red");
    })

//mouseout
    caja.mouseout(function(){
        $(this).css("background","green");
    })

    */
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //hover
    
    var caja = $("#caja");
//mouseover
    function cambiaRojo(){
        $(this).css("background","red");
    }

//mouseout
    function cambiaVerde(){
        $(this).css("background","green");
    }
        //hover
    caja.hover(cambiaRojo, cambiaVerde);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

        //click 

        caja.click(function(){
            $(this).css("background", "blue")
                    .css("color", "white")
                    ;
        })
        // doble click

        caja.dblclick(function(){
            $(this).css("background", "pink")
                    .css("color", "yellow")
                    ;
        })


    alert("eventos cargado")
});