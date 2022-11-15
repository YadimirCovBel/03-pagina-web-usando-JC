'use strict'
/*
en esta sesion veremos como podemos revisar errores

se usa el codigo try catch en el cual ingresamos todo el codigo
suseptible a errores 

try {
    
} catch (error) {
    
}

ejemplo con un error en el alert y nos dira que hay un fallo en el codigo

try {
    var year = 2019

alert(yeaa);
    
} catch (error) {
    alert(a ocurrido un error en el codigo de la fecha)
}


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
decodeURIComponent es para codificar un url de una pagina web

console.log(decodeURIComponent("https://victorroblesweb.es"));

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

try catch tiene limitaciones como links no codificados o arrays demasiado 
grandes

ar vector = new Array(9999999999999999);

RangeError: Invalid array length

*/
try {
    var year = 2019

alert(year);

//console.log(decodeURIComponent("https://victorroblesweb.es"));

var vector = new Array(9999999999999999);
    
} catch (error) {
    console.log(error)
    alert("a ocurrido un error en el codigo ");
}
