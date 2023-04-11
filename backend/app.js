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
app.get('/', (req, res) => {
    //req request datos que puedo enviar desde el cliente
    //res responce la respuesta que se enviara 
    res.status(200).send(
       "<h1>Pagina de Inicio</h1>"
    );
});
app.get('/test', (req, res) => {
    //req request datos que puedo enviar desde el cliente
    //res responce la respuesta que se enviara 
    res.status(200).send({
        message: "hola Mundo desde mi API de NodeJS"
    });
});



// Exportar

module.exports = app;