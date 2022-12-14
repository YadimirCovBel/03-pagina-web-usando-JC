
/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){    


    // selector de tema
    var theme = $("#theme")
    var actThe = JSON.parse(localStorage.getItem(""));

    //= getElementById("#theme").value;
/*
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });
*/




localStorage.setItem(
    "#theme", actThe);

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






console.log("theme");
console.log("themeAct");





});
