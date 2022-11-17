'use strict'

/* 
crear un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero_1 = parseInt (prompt("introduce el primer numero", 0))
var numero_2 = parseInt (prompt("introduce el primer numero", 0))

document.write("<h1>De "+numero_1+" a "+numero_2+" estan estos numeros:</h1>")
for (var numero_1 = numero_1; numero_1 <= numero_2; numero_1++ ){
    document.write(numero_1+"<br/>");


}