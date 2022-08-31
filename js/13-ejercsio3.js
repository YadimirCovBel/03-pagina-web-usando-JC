'use strict'

/* 
crear un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/


var numero_1 = parseInt(prompt("introduce el primer numero", 0))
var numero_2 = parseInt(prompt("introduce el segundo numero", 0))
var contador = 0;
do{


    if(isNaN(numero_1)){
    numero_1 = 0;
    }else if(numero_1 >= 0){
        numero_1 = numero_1 + 1 ;
        /* suma += numero; esto es lo mismo que suma = suma = numero; ya que toma el numero de numero 
        lo suma y luego vuelve a colocar suma para que se agrege el nuevo numero
        */
    
        contador++;
    }

        console.log(numero_1);
        console.log(contador);
}while(numero_1 >= numero_2)

alert("la suma de todos los numeros es: " + numero_1)