'use strict'

//plantillas de texto

var nombre = prompt("mete un nombre");
var apellido = prompt("mete tus apellidos")
/*
var texto = "mi nombre es " +nombre+ " y mis apellidos son " +apellido;

document.write(texto);

// esto da el resultado buscado otorgando el mensaje con nombres y aellidos
*/
/* 
puedo generar una plantilla con las comillas invertidas `` con esto puedo meter aqui de manera multi lina un texto enomre creando una plantilla


*/
var texto =` 
    <h1> Hola que tal <h1>
    <h3> Mi nombre es: ${nombre}<h3>
    <h3> Mis Apellidos son: ${apellido}<h3>
    

`;
// con el signo ${}  puedo interpolar el valor de una variable dentro de una plantilla.
// con esto se creo una plantilla que aparecera en la web con los textos ingresados.


document.write(texto);
