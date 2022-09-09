'use strict'

//parametros rest y spread

function listadoFrutas(fruta1, fruta2, ...RestoDeFrutas){
    //los ... tres puntos son un rest que permite que arroje el resto de datos ingresados
    console.log("fruta 1: " + fruta1)
    console.log("fruta 2: " + fruta2)
    console.log("resto de fruta" + RestoDeFrutas)

}
listadoFrutas("narajna", "manzana", "sandia", "pera", "melon", "Coco")
var frutas = ["naranja", "manzana"]
// esto es un parametro sprad el cual al poner los ... tres puntos te los agrega
listadoFrutas(...frutas, "narajna", "manzana", "sandia", "pera", "melon", "Coco")