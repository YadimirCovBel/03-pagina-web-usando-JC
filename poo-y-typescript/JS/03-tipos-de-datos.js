//string
// de esta forma se define la variable y tipo de dato en el TS
var cadena = "solo puedo agregar un string aqui";
///////////////////////////////////////////////////////////////////////////////////////////////////
// de esta forma no funciona el modificar un objeto ya que no 
// es lenguaje de ts cuando se le aplique el tsc para convertir
// el ts a js nos arrojara error que al ser menor y convertir
// seguramente agarrara pero no debe realizarse asi.
//cadena = 12;
//Number
var numero = 12;
//////////////////////////////////////////////////////////////////////////////////////////
// boleano
// son el valor de verdadero o falso
var verdadero_falso = true;
///////////////////////////////////////////////////////////////////////////////////////////////////
//any
var cualquiera = "hola soy una variable any de TS";
///////////////////////////////////////////////////////////////////////////////////////////
//arrays
// podemos crear arrays  en TS  y le podemos definir que tipo de array es 
//  escribiendo Array<string> para puro string Array<Numer> para numeros
// Array<any> para cualquiera 
var lenguajes = ["PHP", "JS", "CSS", 12];
//tambien podemos definir arrays de esta otra manera
var years = [12, 13, 14];
//////////////////////////////////////////////////////////////////////////////////////////
//se puede dar multiples tipos de datos a una variable agregandolo con | y el tipo
var cadena2 = "solo puedo agregar un string aqui";
cadena2 = 12;
var tipoPrdonslizado = 12;
tipoPrdonslizado = "soy un tipo costumizado";
// con esto creamos un tipo de dato que acepte string y numeros 
//////////////////////////////////////////////////////////////////////////////////////////////
//let es para crear una variable en un bloque definido 
//var es para crear una variable global que funcionara en todo 
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 22;
    console.log("soy el console del if" + " " + numero1_1 + " " + numero2);
}
;
console.log("soy el console fuera del if" + " " + numero1 + " " + numero2);
//////////////////////////////////////////////////////////////////////////////////////////////////
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
console.log(cadena2);
console.log(tipoPrdonslizado);
