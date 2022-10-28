'use strict'

//  BOM Browser Objet Model
/*
function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
}
getBom();

con (window.innerHeight); puedo ver que medida de altura que tiene
 la ventan en este momento 

con (window.innerWidth); puedo saber la medida de anchira desiganda en
la ventana

podemos reducir esto y meterlo dentro de una funcion en este caso getBom
 y nos sacara los datos  en conjunto, los datos de altura y anchura 
 se ven modificados cada vez que la anchamos o redusimos.
*/
//////////////////////////////////////////////////////////////////////

function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);     
}

function redirect(url){
    window.location.href = url
}

function abrirVentana(url){
    window.open(url,"",with=400,height=300);
}
getBom();
/*
adquieres la medida de la pantalla del usuario no de la ventana
con console.log(screen.width) 
y   console.log(screen.height)


consigo la url actualmente cargada.
con  console.log(window.location.href)
con location podemos adquirir muchos otros datos diversos 


con la funcion url podemos cambiar desde la consola la paguina web
function redirect(url){
    window.location.href = url
}


con window.open podemos ingresar una url para que la abra en una 
nueva ventana  tambien podemos agregar caracteristicas como 
with que seria ancho y height que seria algura de la ventana
function abrirVentana(url){
        window.open(url,"",with=400,height=300);
}


*/

////////////////////////////////////////////////////////////////////////////////////////