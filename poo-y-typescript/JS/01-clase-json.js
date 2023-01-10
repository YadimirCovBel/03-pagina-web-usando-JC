var bicicleta = {
    color:'rojo',
    modelo: 'BMX',
    frenos: 'de disco',
    velocidadMAxima: '60km/h',

    //agregamos una funcion de callback para quese aplique 
    //un cambio de color 
    cambiaColor: function(nuevo_color){
        //funciona escribiendo diretamente la variable, caracteristica y accion
//    bicicleta.color = nuevo_color;
        //tambien se realiza usando this
        this.color = nuevo_color;
}

};

console.log(bicicleta);