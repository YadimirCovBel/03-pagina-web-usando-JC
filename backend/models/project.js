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