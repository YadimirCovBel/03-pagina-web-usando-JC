'use strict'

/*
 generar calculadora
-pida dos numeros por pantalla 
-si se mete mal un numero, solicita nuevamente los numeros
-muestre en el body de la pagina, en una alerta y por consola el resultadode 
*sumar 
*restar 
*multiplicar  
*dividir esas cantidades
 */


var numero_1 = parseInt (prompt("introduce el primer numero", 0))
var numero_2 = parseInt (prompt("introduce el primer numero", 0))


while(numero_1 <= 0 || numero_2 <= 0 || isNaN(numero_1) || isNaN(numero_2)){

var numero_1 = parseInt (prompt("introduce el primer numero", 0))
var numero_2 = parseInt (prompt("introduce el primer numero", 0))
}

var suma = (numero_1 + numero_2);
var resta = (numero_1 - numero_2);
var multiplicasion = (numero_1 * numero_2)
var division = (numero_1 / numero_2)
alert ("el resutado de la suma es " + suma); 
alert ("el resutado de la resta es " + resta);
alert ("el resutado de la multiplicasion es " + multiplicasion);
alert ("el resutado de la division es " + division);

document.write("<h2> el resutado de la suma es:  "+suma+" </h2>");
document.write("<h2> el resutado de la resta es:  "+resta+" </h2>");
document.write("<h2> el resutado de la multiplicasion es:  "+multiplicasion+" </h2>");
document.write("<h2> el resutado de la division es:  "+division+" </h2>");

{
console.log(" el resutado de la suma es:  "+suma);
console.log(" el resutado de la resta es:  "+resta);
console.log("el resutado de la multiplicasion es: " +multiplicasion);
console.log("el resutado de la division es:" +division);
}