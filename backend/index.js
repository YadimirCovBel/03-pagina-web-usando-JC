'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>{
        console.log("conexion a la base de datos establecida...satisfactoriamente");
    
        //Creasion de Servidor
        app.listen(port,()=>{
            console.log("servidor corriendo de forma correcta en la url: localhost:3700")
        });
    })
    .catch(err => console.log(err));  