'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
la suma es:        ${numero1 + numero2}
la resta es:       ${numero1 - numero2}
la multiplicacion: ${numero1 * numero2}
la division:       ${numero1 / numero2}
`;

console.log(plantilla);
console.log("Hola Mundo con NodeJS");

