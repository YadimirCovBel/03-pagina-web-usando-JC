'use strict'

//Puebas let y var
//prueba con var
var numero = 40;
console.log(numero); //valor 40
if(true){
    var numero = 50;
    console.log(numero); //valor 50 
}
console.log(numero); //valor 50
//Pruea con let
var texto = "curso js Yadimir Covarrubias";
console.log(texto); //valor js

if(true){
    let texto = "curso laravel 5 Yadimir Covarrbias"
    console.log(texto); //valor laravel 5
}

console.log(texto);