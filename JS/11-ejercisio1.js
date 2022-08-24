'use strict'

/*
programa que pida dos numeros y que nos diga cual es mayor 
y cual es el menor o si son iguales
PLUS si los numeros no son un numero o son menores o iguales a 0 vuelve a pedir que los introduscamos
*/

var numero_1 = parseInt(prompt("introduce el primer numero", 0))
var numero_2 = parseInt(prompt("introduce el segundo numero", 0))

while(numero_1 <= 0 || numero_2 < 0 || isNaN(numero_1) || isNaN(numero_2)){
    var numero_1 = parseInt(prompt("introduce el primer numero", 0))
    var numero_2 = parseInt(prompt("introduce el segundo numero", 0))
}
 if(numero_1 == numero_2){
    alert("los numeros son iguales");
}else if(numero_1 > numero_2) {
    alert("el numero mayor es:" + numero_1)
    alert("el numero menor es:" + numero_2)
}else if(numero_1 < numero_2){
    alert("el numero mayor es:" + numero_2)
    alert("el numero menor es:" + numero_1)
}else{
    alert("introduce numeros correctos");
}