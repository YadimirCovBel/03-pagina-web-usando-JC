
'use strict'
/*
window.addEventListener('load', function(){
    console.log("Dom Cargado!");

var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none"
formulario.addEventListener('submit', function(){
    console.log("evento submit capturado")

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);



    console.log(nombre,apellidos,edad)

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
esta es la forma mas limpia y eficiente a mi parecer de hacer la caja
en la cual se meustran los datos del usuario

var datos_usuario = [nombre, apellidos, edad];
var indice;
//se creo indice para aplicar al for in
    for(indice in datos_usuario){
// se creo el for in para que funcionara con los datos de usuario
//de esta forma apareceran en el box_dashed ordenados 
    var parrafo = document.createElement("p");
    parrafo.append(datos_usuario[indice]);
    box_dashed.append(parrafo);
//apend es para que salga al final
//prepend es para que salga antes
 }
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
 */
//    parrafo.append(nombre);
//  parrafo.append(apellidos);
//    parrafo.append(edad);
//    box_dashed.append(parrafo);
// se uso para el parrafo pero es mas eficiente con un array

//!!!!!!!!!!!!!Otra opccion para la caja de datos

/*
if(nombre.trim() == null || nombre.trim().length == 0){
    alert("el nombre no es valido");
    return false;
}

if(apellidos.trim() == null || apellidos.trim().length == 0){
    alert("los apellidos no son validos");
    return false;
}

if(edad == null || edad <= 0 || edad == isNaN){
    alert("los numeros no son validos");
    return false;
}

box_dashed.style.display = "block"

var p_nombre = document.querySelector("#p_nombre span");
var p_apellidos= document.querySelector("#p_apellidos span");
var p_edad= document.querySelector("#p_aedad span");



//agregamos if para que realice la validacion de datos antes de
//arrojarlos en la pagina 
p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellidos;
p_edad.innerHTML = edad;
//.innerHTML es para que aparesca en el html los datos que seran 
//ingresados en la pagina despues de submit
})
})

<form action="" method="POST" id="formulario">
POST consiste en datos "ocultos" (porque el cliente no los ve) 
enviados por un formulario cuyo método de envío es post. Es adecuado 
para formularios. Los datos

 <form action="" method="POST" id="formulario" onsubmit="return false">
   
onsubmit="return false" para poder ver que la consola arroje el mensaje
 de evento submit capturado


<span>

En HTML, la etiqueta span es un elemento contenedor en línea genérico.
 Las etiquetas span generalmente envuelven secciones de texto con
  fines de estilo o para agregar atributos a una sección de texto 
  sin crear una nueva línea de contenido.
 */

// ejercisio extra validar formulario 

window.addEventListener('load', function(){
    console.log("Dom Cargado!");

var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none"
formulario.addEventListener('submit', function(){
    console.log("evento submit capturado")

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);



    if(nombre.trim() == null || nombre.trim().length == 0){
        alert("el nombre no es valido");
        document.querySelector("#error_nombre").innerHTML = "el nombre no es valido"
        return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none"
    }
    
    if(apellidos.trim() == null || apellidos.trim().length == 0){
        alert("los apellidos no son validos");
        return false;
    }
    if(edad == null || edad <= 0 || isNaN(edad)){
        alert("los numeros no son validos");
        return false;        
    
        }
    
    box_dashed.style.display = "block";
    
    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos= document.querySelector("#p_apellidos span");
    var p_edad= document.querySelector("#p_edad span");
    
    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

})
})
