'use strict'

//EVENTO LOAD///////////////////////////////////////////////////////////
window.addEventListener('load',() => {

    //load es un evento que impide que las cosas se proesen hasta que
    //todo este cargado en la pagina  en este caso metimos todos los 
    //eventos en el Load para que se prosece despuesde que la ventana 
    //termine de cargar, con esto podemos poner sobre el el scrip en 
    //el head siendo el sitio mas recomendable para cargarlo en vez 
    //del final de la pagina 

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
    //boton.style.border ="10px solid black"
    //modificamos directamente el boton
    this.style.border = "10px solid black"
    //con this podemos elegir el elemento seleccionado o con el que se
    //esta trabajando
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


//////////////////////////////////////////////////////////////////////
/*
se agrego al index un nuevo imput (ventana interactiva)

		<form>
			<input type="texto" name="nombre" id="campo_nombre"/>
		</form>

*/

//FOCUS////////////////////////////////////////////////////////////////
var imput = document.querySelector("#campo_nombre")
imput.addEventListener('focus', function(){
    console.log("[focus]estas dentro del imput");
});
//con focus se agregam eventos cuando se esta entrado o interactuando
//con el elemento en este caso una ventana de texto

///BLUR///////////////////////////////////////////////////////////////
var imput = document.querySelector("#campo_nombre")
imput.addEventListener('blur', function(){
    console.log("[blur]estas fuera del imput");
});
// con Blur el evento tomaaccion cuando sales del campo con el que 
// se interactua en este caso cuadro de texto 

///KEYDOWN/////////////////////////////////////////////////////////////
var imput = document.querySelector("#campo_nombre")
imput.addEventListener('keydown', function(event){
    console.log("[keydown]estas presionando teclas dentro del imput",
    String.fromCharCode(event.keyCode));
});

    //String.fromCharCode(event.keyCode));
// le dimos un parametro a la funcion en este caso (event) para usar
// .fromCharCode(event.keyCode) lo cual nos dara lo que se tecleo en 
//conjunto con el keydown y strign lo convierte en texto asi podemos 
// ver lo que el usuario escribe

//susede cuando presionas las teclas 

//KEYPRESS/////////////////////////////////////////////////////////////

var imput = document.querySelector("#campo_nombre")
imput.addEventListener('keypress', function(event){
    console.log("[keypress] tecla precionada en el imput",
    String.fromCharCode(event.keyCode));
});

    // cuando presiono una tecla 
    // parece funcionar para lo mismo que keydown
///KEYUP//////////////////////////////////////////////////////////////

var imput = document.querySelector("#campo_nombre")
imput.addEventListener('keyup', function(event){
    console.log("[keyup] tecla soltada en el imput",
    String.fromCharCode(event.keyCode));
});
// se activa cuando se suelta una tecla 
//funciona de forma similar a keydown y kehypress

});

//final del load