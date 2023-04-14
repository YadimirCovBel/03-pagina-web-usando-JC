'use strict'
const project = require('../models/project');
var Project = require('../models/project')
var controller = {

    home:function(req, res){
        return res.status(200).send({
            message: 'soy la home'
        });

    },
    test: function(req, res){
        return res.status(200).send({
            message: 'soy el metodo o accion test del controlador de project'
        });

    },

    saveProject: async function(req, res){
        var project = new Project();

        var params = req.body;

    
        project.name = params.name;
        project.description= params.description;
        project.categoty= params.categoty;
        project.lang= params.lang;
        project.year = params.year;
        project.image = null;
            /*Forma que no me ha funcionado
        project.save((err, projectStored) => {
            if (err) return res.status(500).send({
                message: 'Error al guardar el documento.'
            });
            
            if(!projectStored)return res.status(404).send({
                message: 'nose ha podido guardar el proyecto.'
            });
        
            return res.status(200).send({ project: projectStored });
            
        });
            */

        //nuevo metodo para guardar documentos se tubo que usar un try y un catch para que funcionara 
        try{
            await project.save();
            return res.status(200).send({
                message: project});
        } catch (err){
            return res.status(500).send({
                message: 'Error al guardar el objeto', error:err});
        }
    },

        getProject: function(req, res){
                var projectId = req.params.id;

                Project.findById(projectId, (err, project)=>{
                    if(err) return res.status(500).send({message: 'error al devolver los datos'});
                    if(!project) return res.save(404).send({message: 'el proyecto no existe.'});
                    return res.status(200).send({
                        project
                    });
 
                });
        }
};

module.exports = controller;