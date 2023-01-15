//funciones

//en TS podemos definir que tipo de dato sera el parametro y cual sera el que 
// va a devolver  en este caso definimos que el dato es number y lo que 
//devolvera es un string
function getNumero(numero:number = 12):string{
    return "el numero es:"+numero;

}

console.log(getNumero(55));