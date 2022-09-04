'use strict'

/* 
hacer un programa que indique si es par o impar un numero,
1 ventana que pida el numero
2  si un numero no es valido que lo pida nuevamente
3 que muestre si es par o impart
*/


var numero_1 = parseInt(prompt("introduce el primer numero", 0))


while(numero_1 <= 0 || isNaN(numero_1)){
    var numero_1 = parseInt(prompt("introduce el primer numero", 0))
}
 if(numero_1 % 2 != 0){
    alert("el numero " +numero_1+ " es impar");
}else if(numero_1 % 2 == 0) {
    alert("el numero " +numero_1+ " es par")
}else{
    alert("introduce numeros correctos");
}

