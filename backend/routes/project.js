'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

router.get('/home', ProjectController.home);
//get es para extraer info
router.post('/test', ProjectController.test);
//requerimos que utilice el objeto ProjectController y acceda al metodo home
//post es para agregar informacion
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
//put es para la actualizacion de recursos en un api
module.exports = router;