"use strict"

//condicional if
var edad = 34
var nombre = "Yadimir Covarrubias"

if (edad >= 18){
    //es mayor de edad
console.log(nombre+"tiene "+edad+", es mayor de edad")
if(edad<=33){ console.log("eres milenial")
}else if(edad>=70){ console.log("eres anciano")
}else{
console.log("ya no eres milenial")    
}

}else{
    //es menor de edad
console.log(nombre+"tiene "+edad+", es menor de edad")    
}