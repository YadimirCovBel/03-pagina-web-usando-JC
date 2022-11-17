'use strict'
// tabla de multiplica de un numero introducido en pantalla



var numero_1 = parseInt(prompt("de que numero quieres la tabla", 1))


document.write("<h1> la tabla multiplicativa de  "+numero_1+" es:</h1>")
    for (var i = 1; i <= 10; i++){
        document.write(i+" x " +numero_1+" = "+(i*numero_1)+"<br/>");
    
    }   

//todas las tablas de multiplicar
for(var c = 1; c <= 10; c++){
document.write("<h1> la tabla multiplicativa de  "+c+" es:</h1>");
    for (var i = 1; i <= 10; i++){
        document.write(i+" x " +c+" = "+(i*c)+"<br/>");
    }
}