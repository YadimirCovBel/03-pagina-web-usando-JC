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

numero_1 = parseInt (prompt("introduce el primer numero", 0))
numero_2 = parseInt (prompt("introduce el primer numero", 0))
}

var resutados = "la suma es: "+(numero_1+numero_2)+"<br/>"+
                "la resta es: "+(numero_1-numero_2)+"<br/>"+
                "la multiplicasion es: "+(numero_1*numero_2)+"<br/>"+
                "la division es: "+(numero_1/numero_2)+"<br/>";


var resutadosCMD = "la suma es: "+(numero_1+numero_2)+"\n"+
                "la resta es: "+(numero_1-numero_2)+"\n"+
                "la multiplicasion es: "+(numero_1*numero_2)+"\n"+
                "la division es: "+(numero_1/numero_2)+"\n";

document.write(resutados);

alert(resutadosCMD);

console.log(resutadosCMD);