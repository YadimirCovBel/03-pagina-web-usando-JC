'use strict'
/*
Crearemos un formulario para esto agregamos primero en el HTML un <form>

tambien agregamos id a varios elementos en el html

<body>

        <h1>Agrega peliculas</h1>
        <form action="" id="formpeliculas">
            <input type="text" id="addpelicula" />
            <button type="submit">Guardar</button>
        </form>

        <h2>peliculas</h2>
        <div id="peliculas">

        </div>


addEventListener() Registra un evento a un objeto en específico. El Objeto 
especifico (en-US) puede ser un simple elemento en un archivo, el mismo 
documento , una ventana o un XMLHttpRequest.

con el addEvenLisener seleccionamos el evento con el que se realizara la 
funcion


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
agregamos una variable que contega un  documente querryselector con #addpelicula
 para que  al usar ese input luego sea agregado al local storage y para eso lo 
 guardamos como valor 

  var titulo = document.querySelector("#addpelicula").value;

 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 despues para irlo almacenando usamos el local storage con un set item y
 ponemos la variable titulo que sera la agregada y nuevamente ponemos 
 la var titulo ya que iremos agregando elementos

 localStorage.setItem(titulo, titulo)

 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 con if(titulo.length >= 1){ evitamos que se agregen campos vacios
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
con :
for(var i in localStorage){
    console.log(localStorage[i]);
} 
podemos ver todo el contenido del local storage

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

con: 
for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == String){

        var li = document.createElement("li");
        li.append(localStorage[i]);
    
    }}

    conseguimos que se agrege a la pagina web lo agregado en el array i 
    el cual recorre el local stroage pero solamente se agregan si i
    es un texto o string
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!
ya despues con 
var ul = document.querySelector('#peliculas-list')
y
agregando 
ul append(li);
al if permitimos que el texto del local storage sea transcrito a la web

ya con esto todo lo que sea agregado en el input se escribira en la pagina 
si es texto.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

ahora agegaremos un formulario para borrar peliculas 

 <h1>Borrar peliculas</h1>
        <form action="" id="formBorrarPeliculas">
            <input type="text" id="borrarPelicula" />
            <button type="submit">Borrar</button>
        </form>

 var formulariob = document.querySelector("#formBorrarPeliculas");
formulariob.addEventListener('submit', function(){
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){

        localStorage.removeItem(titulo)
    
    }
    
reutilizando codigo que usamos para el de agregar solo cambiamos un par 
de elementos conectando las funciones 


*/


var formulario = document.querySelector("#formpeliculas");
formulario.addEventListener('submit', function(){
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){

        localStorage.setItem(titulo, titulo)
    
    }
});
 
var ul = document.querySelector('#peliculas-list')

for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){

        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }}

    var formulariob = document.querySelector("#formBorrarPeliculas");
formulariob.addEventListener('submit', function(){
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){

        localStorage.removeItem(titulo)
    
    }
});
 