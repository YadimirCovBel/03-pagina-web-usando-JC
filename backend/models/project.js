'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//definimos esquema 

var ProjectSchema = Schema({
    name:String,
    description:String,
    categoty:String,
    lang:[String],
    year:Number
});

module.exports = mongoose.model('projects', ProjectSchema);
// projects --> guarda los documentos en la coleccion
// definimos el nombre de la coleccion donde se guardara la informacion y despues que variables se agregaran lo cual se definio con ProjectSchema