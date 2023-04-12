'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home)
//requerimos que utilice el objeto ProjectController y acceda al metodo home