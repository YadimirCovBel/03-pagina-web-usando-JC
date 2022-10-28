'use strict'
/*
los eventos son funciones que se ejecutan cada que susede algo, 
cuando el usuario da click, escrube algo, borra algo, redurecciona 
la ventana.
*/

//  EVENTOS DEL RATON ------------------------------------------------

var boton = document.querySelector("#boton");

function cambiarColor(){
    console.log("me has dado click");
    var bg = boton.style.background; 
    /* creamos una variable para la funcion ya que es mas rapido 
    para prosesar que poner la orden boton.style.background; dentro
    de la funcion 
    */
    if(bg == "green"){
        boton.style.background = "red";
        /*
    creamos un if para que cada que presionen el boton cambie de 
    color de rojo a verde o verde a rojo para que esto funcione
    debe ser agregado al index la funcion
    */

}else{
    boton.style.background = "green";
}
    return true;
}

/*
para que esto funcione debe ser agregado al index la funcion
    

*/


/* CUANDO DAS CLICK---------------------------------------------------
<p>
		<button id="boton" onclick="alert('hola me has presionado')">Presioname</button>
		</p>
		
se puede agregar en el index la accion onclick que en este caso arrojara
un alert y un mensaje esta es la forma clasica 
*/
// CUANDO PASAS POR ENCIMA DE ALGO------------------------------------

// CUANDO SALGAS DE UN ELEMENTO ---------------------------------------