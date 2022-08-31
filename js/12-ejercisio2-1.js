'use strict'
/*
mi intento de hacerlo sin ver el curso
*/

var numero_1 = parseInt(prompt("introduce el primer numero", 0))
var numero_2 = parseInt(prompt("introduce el segundo numero", 0))
var numero_3 = parseInt(prompt("introducir el tercer numero", 0))



while(numero_1 <= 0 || numero_2 <= 0 || numero_3 <= 0 || isNaN(numero_1) || isNaN(numero_2) || isNaN(numero_3)){
    var numero_1 = parseInt(prompt("introduce el primer numero", 0))
    var numero_2 = parseInt(prompt("introduce el segundo numero", 0))
    var numero_3 = parseInt(prompt("introducir el tercer numero", 0))
}

var suma = numero_1 + numero_2 + numero_3;
var media = ((numero_1 + numero_2 + numero_3) / 3)
alert ("el resutado de la suma es" + suma); 
alert ("el resutado de la media es" + media);