'use strict'

var express = require('express');
var bodyParser = require('body-parser');
//bodyParser es para convertir lo que llega en un json
var app = express();

//Cargar Archivos de rutas

var project_routes = require('./routes/project');

//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//convertira todo lo que llegue a un json


//CORS
// Configurar cabeceras y cors

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
    
    });

//RUTAS
app.use('/api', project_routes);
//con esto cambiamos la ruta agregandole /api o cualquier cosa que se desee completando la ruta que se estan importandodesde prokect.js routes



// Exportar

module.exports = app;