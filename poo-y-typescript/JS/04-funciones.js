//funciones
//en TS podemos definir que tipo de dato sera el parametro y cual sera el que 
// va a devolver  en este caso definimos que el dato es number y lo que 
//devolvera es un string
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es:" + numero;
}
console.log(getNumero(55));
