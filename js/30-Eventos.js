'use strict'
/*
los eventos son funciones que se ejecutan cada que susede algo, 
cuando el usuario da click, escrube algo, borra algo, redurecciona 
la ventana.
*/

//  EVENTOS DEL RATON ------------------------------------------------

/*
 CUANDO DAS CLICK---------------------------------------------------

 ESTAMOS HACIENDO COSAS CON MODIFICASIONES EN EL INDEX
<p>
		<button id="boton" onclick="alert('hola me has presionado')">Presioname</button>
		</p>
		
se puede agregar en el index la accion onclick que en este caso arrojara
un alert y un mensaje esta es la forma clasica 
------------------------------------------------------------------------

var boton = document.querySelector("#boton");

function cambiarColor(){
    console.log("me has dado click");
    var bg = boton.style.background; 
------------------------------------------------------------------------
    creamos una variable para la funcion ya que es mas rapido 
    para prosesar que poner la orden boton.style.background; dentro
    de la funcion 
------------------------------------------------------------------------
    if(bg == "green"){
        boton.style.background = "red";
-----------------------------------------------------------------------
        creamos un if para que cada que presionen el boton cambie de 
    color de rojo a verde o verde a rojo para que esto funcione
    debe ser agregado al index la funcion
-------------------------------------------------------------------------
}else{
    boton.style.background = "green";
}

boton.style.padding = "10px";
boton.style.border ="1px solid #ccc"

return true;
}

------------------------------------------------------------------------
para que esto funcione debe ser agregado al index la funcion
    <button id="boton" onclick="cambiarColor();">Presioname</button>

tambien podriamos hacer que funcionara con DOBLE CLICK al cambiar el 
onclick del index por ondblclick    

AHORA LIMPIAREMOS EL INDEX YA QUE ESA NO ES LA FORMA OPTIMA DE AGREGAR
ESTAS FUNCIONES

onclick="cambiarColor();" QUITAREMOS ESTO DEL INDEX

--------------------------------------------------------------------
*/

function cambiarColor(){
    console.log("me has dado click");
    var bg = boton.style.background; 
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    
    boton.style.padding = "10px";
    boton.style.border ="1px solid #ccc"
    
    return true;
    }
    
    var boton = document.querySelector("#boton");
boton.addEventListener('click', function(){ 
    cambiarColor();
});

/*
boton.addEventListener de esta manera puedo agregar cualquier evento
como en este caso 'click', function(){ cambiarColor() 
});
para usar la funcion que tenemos ya creada  sin meter nada al codigo
de la pagina web y modificar el boton

/*//////////////////////////////////////////////////////////////////////
// CUANDO PASAS POR ENCIMA DE ALGO MOUSE OVER------------------------------------
boton.addEventListener('mouseover', function(){
    boton.style.background = "yellow";
})
//si al addEventListener agregamos un 'mouseover' lo que pasara ahora 
//es que la funcion que agregemos se ejecutara cuando le pasen el mouse
//por encima al

//Mouseout//////////////////////////////////////////////////////////////

boton.addEventListener('mouseout', function(){
    boton.style.background = "#ccc";
})
// cuando quitas el mouse de encima se efectua el evento mouseout
//#ccc es el color gris claro
//////////////////////////////////////////////////////////////////////




// CUANDO SALGAS DE UN ELEMENTO ---------------------------------------