'use strict'

/*LocalStorage
html5 web stroage podemos guardar informacion en el navegador web 
y que esta informacion persista durante la navegacion de la pagina

suele usarse en apps

como comrpobar que el navegador es compartible con el locla storage?
con un if que arrojara si es o no compartible el navegador.

if(typeof(Storage) !== 'undefinied'){
    console.log("localStroage disponible")
}else{
   console.log("localStorage incompartible") 
}

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

como guardar datos en el local storage?

localStorage.setItem(
    "titulo", "curso de symfony de Yadimir Covarrubias");

para confirmar en la consola del navegador tienes que ir a 
    aplication
    Local Storage
    File://

donde saldra la key titulo que hemos agregado y el valor que es el 
texto 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11!

como puedo recuperar un elemento del local storage?
utilizando 

localStorage.getItem("titulo")

podemos recuperar la informacion del local storage y con un console.log
podemos verlo

console.log(localStorage.getItem("titulo"))

tambien podemos meterlo al cuerpo de la pagina web(Body) con:

document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

como guardar un objeto JSON en mi local Storage?
Debemos primero crear el JSON y despues agregarlo de la forma siguiente 

localStorage.setItem("usuario",JSON.stringify(usuario)); 

ya que no se puede mandar un JSON en estado puro se deve convertir en string

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

como recuperar un ovjeto que fue convertido a string en el local stroage?

con JSON.parse podemos convertir un string en codigo usable de JS

var userjs = JSON.parse(localStorage.getItem("usuario"));

despues ya podemos usar el codigo para realizar las mismas actividades de 
siempre por ejemplo meterlo al body de la pagina con un document 
usamos el querryselecytor para escoger el div en el HTML y append  
para colocar lo que se mostrara en la pagina web ya despues es usar la variable
y definir que dato se usara

agregamos otro dip con id datos

document.querySelector("#datos").append(userjs.web+" "+userjs.nombre);

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

tambien se pueden eliminar elementos del local storage

podemos borrar un solo elemento del local storage seleccionandolo con removeItem
localStorage.removeItem("usuario");

o tambien borrar todo el local stroage con clear
localStorage.clear



*/
window.addEventListener('load', function(){
if(typeof(Storage) !== 'undefinied'){
    console.log("localStroage disponible")
}else{
   console.log("localStorage incompartible") 
}

localStorage.setItem(
    "titulo", "curso de symfony de Yadimir Covarrubias");

document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");


var usuario = {
    nombre: "Yadimir Covarrubias",
    email: "Yadimir.cova@gmail.com",
    web: "file:///home/yadimir/Desktop/Curso-JS/03-pagina-web-usando-JC/pagina.html"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#datos").append(" "+userjs.web+" "+userjs.nombre);

localStorage.removeItem("usuario");
localStorage.clear();


})
//final del windo load