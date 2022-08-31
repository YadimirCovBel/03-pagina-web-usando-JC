'use strict'

/*
 usar un bucle para mostrar media y suma de los numeros introducidos hasta ingresar negativos
*/

var suma = 0;
var contador = 0;

do{

    var numero = parseInt(prompt("introduce numeros hasta que metas uno negativo", 0));

    if(isNaN(numero)){
    numero = 0;
    }else if(numero>= 0){
        suma = suma + numero;
        /* suma += numero; esto es lo mismo que suma = suma = numero; ya que toma el numero de numero 
        lo suma y luego vuelve a colocar suma para que se agrege el nuevo numero
        */
    
        contador++;
    }

        console.log(suma);
        console.log(contador);
}while(numero >= 0)

alert("la suma de todos los numeros es: " + suma)
alert("La media de todos los numeros es: " + (suma/contador))