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

          //click 

        caja.click(function(){
            $(this).css("background", "blue")
                    .css("color", "white")
                    ;
        })

        con caja.click(function()) agregamos el evento a realizar despues de dar click en el 
    elemento seleccionado ene ste caso es la caja y cambiara de color el fonod y la letra

        // doble click

        caja.dblclick(function(){
            $(this).css("background", "pink")
                    .css("color", "yellow")
                    ;
        })
        con  caja.dblclick(function(){ agregamos el evento a realizar despues de dar doble
    click sobre el elemento seleccionado en este caso cambiara el color del fondo y letra


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            
            sesion 99 eventos focus y blur

    agregamos un form y un input al index para trabajar esta sesion dentro del html
    
            input{
            padding: 10px;
            width: 300px;
            font-size: 20px;
        }

        <form>
        <input type="text" id="nombre"/>
    </form>

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            html
 margin-top: 10px; 

        es para agregar margen en este caso a un div creado con #datos

 display: none;

 es para ocultar algo en la pagina web y podemos hacer que se muestre despues de 
 ejecutar algo.

 $("#datos").show(); hace que se muestre el div escondido 

   nombre.blur(function(){
            $(this).css("border", "1px solid #ccc");
            $("#datos").show();
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

ahora lo que haremos es que despues de salir del imput se muestre el div escondido
exibiendo los datos que se inserten en el imput 

nombre.blur(function(){
            $(this).css("border", "1px solid #ccc");
            $("#datos").text($(this).val()).show();
        })
usando .text($(this).val()).show()

logramos que el texto insertado se meustre en el div usando text($(this).val())

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

 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
 sesion 100 mouse down y mose up   

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
    //eventos click y doble ckick
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
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //eventos focus y blurr
        var nombre = $("#nombre");
        nombre.focus(function(){
            $(this).css("border", "5px solid green");
        })
        nombre.blur(function(){
            $(this).css("border", "1px solid #ccc");
            $("#datos").text($(this).val()).show();
        })

    alert("eventos cargado")
});