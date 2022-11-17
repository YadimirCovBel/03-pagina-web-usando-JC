'use strict'

/* 
crear un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/


var numero_1 = parseInt(prompt("introduce el primer numero", 0))
var numero_2 = parseInt(prompt("introduce el segundo numero", 0))

for(var numero_1 = 0; numero_1 <= numero_2; numero_1++){
    console.log( "vamos por el numero:" + numero_1);
}
