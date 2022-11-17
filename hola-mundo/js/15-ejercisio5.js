'use strict'

/* mostrara todos los numeros divisores de un numero introducido por pantalla
*/
var numero = parseInt(prompt("introdice un numero"));

for(var i = 1; i <= numero; i++){
    if(numero % i == 0)
    console.log("divisores: " +i)
}