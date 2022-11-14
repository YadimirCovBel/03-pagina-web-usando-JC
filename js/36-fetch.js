'use strict';
 

/*
Fetch(sustituto de ajax) y peticiones a servicios / apis rest

es un api res es un servicio o un backend nos devuelve datos en json  puede 
recibir peticiones de metodos http

recibira una informacion y devolvera otra, mediante a ese api o backend se 
estaran guardando datos . 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
fetch('https://jsonplaceholder.typicode.com/users')

esto es una promesa y con ello usaremos el metodo .then()
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
var usuarios = []
fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(data => {
    usuarios = data;
    console.log(usuarios)

el metodo .then lo que hace es recoger datos, en el primero colocamos una 
funcion de callback la cual tomara el parametro data y lo trasnformara en 
un json con lo cual convertimos el objeto de json en uno usable de 
javascrip 

.then(data => data.json())

despues colocamos otro then el cual donde colocamos data nuevamente  colocando 
un callback para que nos arroje un dato espesifico  tomando toda la informacion
y metiendola en la variable usuario

.then(data => {
    usuarios = data;
    console.log(usuarios)


tambien agregamos la variable usuarios para utilizarla en el segundo then 
creando un array

lo que se hace despues es que usuarios es igual a data para que lo que se 
procesa en el then sea agregado a la variable usuarios

de esta forma podemos ver en la consola del navegador los 10 usuarios  
extraidos

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
igual podemos cambiar el url o link y nos muestra otros  datos usando otra
pagina de apis 

var usuarios = []
fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(data => {
    usuarios = data;
    console.log(usuarios)
})

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

podemos tambien agregar  espesificasiones para que solo nos arroje unos datos 
de los recolectados en el json.


var usuarios = []
fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(users => {
    usuarios = users.data;
    console.log(usuarios)
})

en este caso lo que hicimos es que solo nos arroje los datos de usuarios que 
se extrajeron en el json 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

lo que hace el metodo fetch  es acceder a unos datos remotos, hace la peticion
y cuando recibe esos datos lo que hace es convertirlos en json , la promesa
se queda a la espera de otra instruccion en este caso un .then cuando tenga
la informacion configurada para ser utilizable la captura y hace lo que se
le instrulle en este caso mostrar los usuarios en la consola 


usuarios.map((user, i )=>{

        map calls a provided callbackFn function once for each element 
        in an array, in order, and constructs a new array from the results.
        lo que hace es crear un array y lo ordena con i o indice

        basicamente creamos un array de otra forma y se ordena

let nombre = document.createElement('h2');  

        let te permite declarar variables limitando su alcance (scope) al 
        bloque, declaración, o expresión donde se está usando.a diferencia 
        de la palabra clave var la cual define una variable global o local 
        en una función sin importar el ámbito del bloque. La otra diferencia 
        entre var y let es que este último se inicializa a un valor sólo 
        cuando un analizador lo evalúa.

        creamos una variable que solo funciona en el bloque

        con document escribimos en el body y create element extrae la 
        lainformacion y la convierte en un dato que sera usado

nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
    
        con nombre,innerHTML definimos que es lo que se mostrara de texto
        en la pagina en este caso i de indice, espacio, nombre, espacio,
        apellido

div_usuarios.appendChild(nombre)

        con div seleccionamos la area donde sera colocada la informaicon y 
        apendChild  es para colocar la informacion en este caso de nombre
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
agregamos en el div un loading para que se vea mientras la informacion es 
extraida

<span class="loadin">Cargando ...</span>

  esto se borrara despues con  el uso de la variable que crearemos para 
  seleccionar el span 

        var loading =  document.querySelector(".loading")

    despues usando la variable le agregamos .style.display = 'none'; para que
    el html lo borre al terminar.

        loading.style.display = 'none';


        las promesas son utiles para evitar el callback hell que seria 
    un callback dentrode otro callback  lo cual hace al codigo ilegible
    e insostenible, para evitar esto es el metodo fetch que trabaja 
    con promesas.
    
        puede pasar que tengamos varias peticiones ajax  que tenemos que esperar
    tener el  resultado de una para poder ejecutar el resultado de otra
    y asu continuar de forma progresiva.

fetch('https://reqres.in/api/users?page=2') llamada ajax
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        encapsulamos en una funcion el codigo que utilizamos para mostrar la 
    listade usuarios 

function listadoUsuarios(usuario){

    usuarios.map((user, i )=>{
    
        let nombre = document.createElement('h3');  
      
       nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
    
       div_usuarios.appendChild(nombre);
       
       loading.style.display = 'none';

    });
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    despues de encapsular el codigo para llamar la informacion de los usuarios 
en una funcion  podemos solo hacer un callback con la funcion colocando 
    listadoUsuarios(users,data)

    ya con esto podemos incluso retirar del codigo la variable usuarios logrando
minimisar la cantidad de codigo pero igualmente muestra un correcto 
funcionamiento

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    ahora haremos una modificasion apra usar otro api que se utilizara para
ingresar 1 usuario 

function getUsuarios(){
    return fetch('https://reqres.in/api/users/2');


};
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
se borrara este codigo para usar uno nuevo 


fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(users => {
    
    listadoUsuarios(users.data)

});
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

asi se crea una nueva promesa 

return new Promise((resolve, reject) => {
       var profesor_string = JSON.stringify(profesor);    
    if(typeof profesor_string != 'string') return reject('error')
    
    return resolve(profesor_string)

    })

donde se espesifica que es un resolve y un reject

  */
   var div_usuarios = document.querySelector("#Usuarios")
   var div_NewUsuario = document.querySelector("#NewgetUsuario")
   
   //var loading =  document.querySelector(".loading")
   //var loadingNewUser =  document.querySelector(".loading")


getUsuarios()
.then(data => data.json())
.then(users => {
    
    listadoUsuarios(users.data);

    
    return getInfo();
    
})

.then(data => {

    return getNEWUsuario();

    })

.then(data => data.json())
.then(user => {
    MostrarNewUsuario(user.data)
});



function getNEWUsuario(){
    return fetch('https://reqres.in/api/users/2');

};

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')

};

function getInfo(){
    
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) => {
       var profesor_string = "";    

       setTimeout(function(){
       profesor_string = JSON.stringify(profesor);

    }, 3000);

        if(typeof profesor_string != 'string' || 
        profesor_string != '') 
        return reject('error 1')
    
        return resolve(profesor_string);
        


 
    
    
});

}

function listadoUsuarios(usuarios){

    usuarios.map((user, i )=>{
    
        let nombre = document.createElement('h3');  
      
       nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
    
       div_usuarios.appendChild(nombre);
       
      // loading.style.display = 'none';
      document.querySelector(".loading").style.display = 'none';

    });
}

function MostrarNewUsuario(user){

    let nombre = document.createElement('h4');  
    let avatar = document.createElement('img')      
    nombre.innerHTML =" " + user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    div_NewUsuario.appendChild(nombre);
    div_NewUsuario.appendChild(avatar);       
    //loadingNewUser.style.display = 'none';
    document.querySelector("#NewgetUsuario .loading").style.display = 'none';
        };