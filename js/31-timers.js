'use strict'

window.addEventListener('load', function(){
//evento de load es para que se espere a que cargue la ventana para 
//ejecutar el fichero JS 

//TIMERS///////////////////////////////////////////////////////////////

//set interval //////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var tiempo = setInterval(function(){
    console.log("set Interval ejecutado")

    var encabesado = document.querySelector("h1")
    //creamos una variable que selecciona el encabvezado
    if(encabesado.style.fontSize == "50px"){
        encabesado.style.fontSize = "30px"
    }else{

        encabesado.style.fontSize = "50px"
    }
}, 1000)


//encabesado.style.fontSize == "50px"
    //con esto seleccionamos el primer encavesado de la pagina para que
    //cuando pasen 3 segundos cambie el la medida  del envacesado 
    //seleccionado
///}, 3000) 
    // con set interval se ejecutqaria cada tanto tiempo y como segundo
    // parametro colocamos el tiempo que esperara para ejecutarse
    // colocamos 3000 lo cual serian 3000 mili segundos lo que implica
    //se ejecutara cada 3 segundos
    //para que cambia mas rapido lo cambiaremos a 500 milisegundos
    //lo dejaremos en 5000 para que tarde 5 segundos

//set Time Out
/*
var tiempo = setTimeout(function(){
    console.log("set Interval ejecutado")

    var encabesado = document.querySelector("h1")
    //creamos una variable que selecciona el encabvezado
    if(encabesado.style.fontSize == "50px"){
        encabesado.style.fontSize = "30px"
    }else{

        encabesado.style.fontSize = "50px"
    }
}, 5000)
*/

    // var tiempo = setTimeout(function() lo que hace es que solo se 
    //ejecuta una vez la accion indicada con el timer

/* agregaremos al index un boton el cual usaremos para detener 
que este cambiando el encabezado

<button id="stop">stop</button>

*/

var stop = document.querySelector("#stop")
stop.addEventListener("click", function(){
    alert("has detenido el intervalo del encavesado")
    clearInterval(tiempo);
})

})
// final del evento load