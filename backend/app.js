'use strict'

var express = require('express');
var bodyParser = require('body-parser');
//bodyParser es para convertir lo que llega en un json
var app = express();

//Cargar Archivos de rutas

//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//convertira todo lo que llegue a un json


//CORS

//RUTAS




// Exportar

module.exports = app;