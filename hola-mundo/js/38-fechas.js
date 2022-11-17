'use strict'

/*
con new date podemosa gregar la fecha  actual y se queda 
registrada en el codigo

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var year = fecha.getFullYear();
con esto se crea una variable que arrojara el año
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
creamos variables para que nos mostraran la fecha de forma 
ordenada
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

math random arroja un numero alazar

math ceil quita los decimales

console.log(Math.ceil(Math.random()*100000));

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


*/


var fecha = new Date
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
    el año es: ${year} 
    el mes es: ${mes}
    el dia es: ${dia}
    la hora es: ${hora}
`

console.log(textoHora)

console.log(Math.ceil(Math.random()*100000));