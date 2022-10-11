'use strict'

//DOM Document Objet Model

/* lo interesante en JavaScriop es que se puede modificar modificar el html de una pagina  pordemos seleccionar los diferentes elementos de la pagina
y manipularlos. de forma que si tenemos en la pagina algo se pueden manipular sus propiedades con Document

*/
function CambiaColor(color){
    caja.style.background = color;
}

// var caja = document.getElementById("MiCaja"); esta es la forma inicial que utilizamos para seleccionar un elemento
var caja  = document.querySelector("#MiCaja")
// con document.querySelector("#MiCaja")  podemos seleccionar por medio del id un elemento de la pagina web esta es la forma recomendada 
// con la # seleccionamos por medio de id si quisieramos seleccionar por medio del elemento tendriamos que colocar un . en su lugar
caja.innerHTML = "TEXO EN LA CAJA DESDE JS"
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