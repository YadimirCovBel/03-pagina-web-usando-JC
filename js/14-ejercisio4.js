'use strict'

/* 
consiste en mostrar todos los numeros inpares introducidos que hay entre dos numeros introducidos por el usuario
*/


var numero_1 = parseInt (prompt("introduce el primer numero", 0))
var numero_2 = parseInt (prompt("introduce el primer numero", 0))

document.write("<h1>De "+numero_1+" a "+numero_2+" estan estos numeros:</h1>")
while (numero_1 < numero_2){
    numero_1++;

    if(numero1%2 ! = 0){
        console.log("el"+numero_1+ "es impar")
    }

}

