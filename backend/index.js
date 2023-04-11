'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(()=>{
        console.log("conexion a la base de datos establecida...satisfactoriamente");
    
        //Creasion de Servidor
    
    })
    .catch(err => console.log(err));  