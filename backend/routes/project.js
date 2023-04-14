'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
//requerimos que utilice el objeto ProjectController y acceda al metodo home
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?')
module.exports = router;