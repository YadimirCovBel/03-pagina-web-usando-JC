'use strict'

//DOM Document Objet Model

/* lo interesante en JavaScriop es que se puede modificar modificar el html de una pagina  pordemos seleccionar los diferentes elementos de la pagina
y manipularlos. de forma que si tenemos en la pagina algo se pueden manipular sus propiedades con Document

*/
function CambiaColor(color){
    caja.style.background = color;
}
// conseguir elementos con id espesifico


// var caja = document.getElementById("MiCaja"); esta es la forma inicial que utilizamos para seleccionar un elemento
var caja  = document.querySelector("#MiCaja")
// con document.querySelector("#MiCaja")  podemos seleccionar por medio del id un elemento de la pagina web esta es la forma recomendada 
// con la # seleccionamos por medio de id si quisieramos seleccionar por medio del elemento tendriamos que colocar un . en su lugar
caja.innerHTML = "TEXO EN LA CAJA DESDE JS";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";
console.log(caja)

/*
document.getElementById() 

con este document puedo buscar en el html los elementos con el id definido en  este caso seria "MiCaja" lo cual podemos 
meter dentro de una variable para verlo en la consola  en este caso solo arrojara null, ya que nuestro index tiene primero la ejecision de
28-DOM.js antes del body de la pagina lo cual lleva a que no encuentre MiCaja ya que se interpreta despues de hacer la busqueda. en este caso modificaremos
el Index y bajaremos el scrip despues de la interpretacion del body.

para que funcionara tubimos que mover  el script y colocar esto al final del body con lo cual ya nos arrojaria el resultado buscado donde detectara la caja
		<!--scripts-->
		<script type="text/javascript" src="js/28-DOM.js"><$</script>


despues si queremos capturar el codigo html con .innerHTML nos arrojara el texto dentro de la caja

var caja = document.getElementById("MiCaja").innerHTML;

tambien se puede cambiar el contenido dentro de una caja en este caso e texto con  

caja.innerHTML = "" 

de esta forma se cambia lo que esta dentro de la caja en este caso  

var caja = document.getElementById("MiCaja");
caja.innerHTML = "TEXO EN LA CAJA DESDE JS"

se uso la variable caja que encuentra en el body de la web MiCaja y con caja.innerHTML se remplaza el texto que habia antes.

de hecho tambien podemos cambiar el color con el que esta remarcado el texto usando caja.style.background = 

caja.style.background = "red";
en este caso usaremos red y realiza un remarcado rojo para el texto que modificamos.

tambien podemos usar 
caja.style.padding = "20px";

donde usando el padding logramos que sea mas ancho el remarcado en esta ocasion con 20px 

otra modificasion aplicable es cambiar el color de la letra 

caja.style.color = "white";

con esto logramos que la letra sea blanca.

ahora lo que haremos es generar una variable para que el usuario sea el que cambia el color del background debemso agregar al codigo la funcion 
arriba de las modificasiones 

function CambiaColor(color){
    caja.style.background = color;
}

lo cual permitira que se realizen cambios de color desde la terminal de forma libre .

con caja.className = "hola"; podemos agregar al las clases de lo seleccionado
*/


// como podria econtrar todos los dips en mi HTML

// conseguir elementos por su etiqueta
var TodosLosDivs = document.getElementsByTagName('div');
// con document.getElementsByTagName('div) busca la consola y genera una array de los divs

//si quiero acceder al segundo elemento seugn el indice tenemos que escribir  TodosLosDivs[2] con lso corchetes escogemos el elemento a trabajar
var ContenidoEnTexto = TodosLosDivs[2].textContent;
//usando .textContent podemos sacar del elemento el texto que contiene y mostrarlo con un console.log
TodosLosDivs[2].innerHTML = "otro texto para el segundo elemento";
// con InnerHTML modificamos el texto en la web en este caso cambiamos el soy el primer div por otro texto para el segundo elemento
TodosLosDivs[2].style.background = "green";
// mientras seleccionemos la variable TodosLosDivs y en Corchetes [] coloquemos el numero dos todas las modificasiones se realizaran solo a ese elemento

console.log(TodosLosDivs);
console.log(ContenidoEnTexto)
//TodosLosDivs.array.forEach((valor, indice) => {
    // forEach() ejecuta la función callback una vez por cada elemento del array, este solo sirve para recorrer arrays que creamos con valores, strings, etc
    var seccion = document.querySelector("#MiSeccion") 
    // !!!!!!!!!!!!!tambien agrego   var seccion = document.querySelector("#MiSeccion") fuera de camara!!!!!!!!!!!!!!!1
   var hr = document.createElement("hr");
    var valor;
    for(valor in TodosLosDivs){
        //utilizaremos un forin ya que en este caso es un html
 console.log(TodosLosDivs[valor])
 if(typeof TodosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
    //.createElement("p"); es para crear un eleemento en este caso P que seria parrafo
    var texto = document.createTextNode(TodosLosDivs[valor].textContent);
    /*.createTextNode(valor);  agregar un texto a la pagina web y seleccionando (TodosLosDivs[valor].textContent); se selecciona el array de todos los divs
    ingresamos la Variable Valor la cual tomara el valor que le llege de cada uno de los dips y con textcontent sacamos el texto dentro del array 
    despues lo ponemos en la web
    */

    parrafo.append(texto);
    /*
    El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, 
    crear-y-añadir para construir páginas web a base de programación.
    
    usaremos append en lugar de apendChild ya que nos e ocupa el apend child append significa agregar antes
    */
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11document.querySelector("#MiSeccion").prepend(parrafo); por alguna razon quita esto en el curso y lo sustituye fuera de camara
// prepend es agegar antes 
    seccion.append(parrafo)
    // !!!!!!!!!!!!!!!!!!!!!! se agrego      seccion.append(parrafo) fuera de camara!!!!!!!!!!!!!!!!
 
}
    }
    seccion.append(hr);
    //hr es para poner una linea divisoria
//ctodos los documentos del doc son un array, 
//con un forEach  creare una lista agregando el create element 
// puedo meto el texto dentro del parrafo con parrafo.appendChild(texto)


/*
se agrego una seccion en el indice 

		<section id ="MiSeccion">
			<hr>
		</section>
!!!!!!!!!!!!!!!!!tambien por alguna razon fuera de camara borro el <hr> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
y lo sustituimos por 


		<section id ="MiSeccion">
		
			<h1>Listado de textos de los divs</h1>
		
		</section>
        
*/









// conseguir elementos por su classe

/* se le agrego clases en el index 
		<div class="amarillo">Hola Soy Una Caja!</div>
		<div class="rojo"> Soy el primer div!</div>
		<div class="rojo"> yo soy el segundo div!</div>
para poder buscarla
        */
var divsRojos = document.getElementsByClassName('rojo')
//creamos una variabl y le ingresamos document.getElementsByClassName('rojo') se deberan seleccionar todos los elementos con la clase rojo
var divsAmarillos = document.getElementsByClassName('amarillo')
//creamos una variabl y le ingresamos document.getElementsByClassName('amarillo') se deberan seleccionar todos los elementos con la clase amarillo
console.log(divsAmarillos)
divsAmarillos[0].style.background = "yellow";
// con esto seleccionamos el elemento 0 del array y le cambiamos el background a amarillo
var div;
//definimos la variable div para usarlo en el bucle
for(div in divsRojos){
// vamos a crear un bucle para que cambie el background de los divsRojos
if(divsRojos[div].className == "rojo"){
// agregamos un if para que solo recorra los elementos rojo .className == "rojo") definimos que revise si su class name es rojo para que lo prosese
    divsRojos[div].style.background = "red";
// con esto se cambia el color del background  a rojo
}
}
console.log(divsRojos)

// probando querry selector

/* se agrego al index un id

			<h1 id="encabezado">Listado de textos de los divs</h1>
*/
var id = document.querySelector("#encabezado")
/* creamos la variable id para ingresar .querySelector con el cual podemos seleccionar en base al id de los elementos  aqui creamos la variable id
para poder ver que lo detecta con el console log tambien resaltamos que se deve poner # junto a el id que se ingreso para seleccionar

queryselector es recomendable para buscar 1 solo elemento espesifico

*/
console.log(id)

var ClassRojo = document.querySelectorAll(".rojo")
/*ahora lo usaremos para seleccionar un array en esta ocasion rojo para ello se usa . ya que es un class y no un id, es evidente que no 
funciona para seleccionar arrays, para eso se deve usar .querySelectorAll(".rojo") lo cual nos muestra lo que buscamos un Array
*/
console.log(ClassRojo)