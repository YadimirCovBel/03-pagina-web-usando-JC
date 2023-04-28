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
    //controller de proyect

    saveProject: async function(req, res){
        var project = new Project();

        var params = req.body;

    
        project.name = params.name;
        project.description= params.description;
        project.category= params.category;
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

        getProject: async function(req, res){
                var projectId = req.params.id;

                if(projectId == null) return res.status(404).send({message: 
                    'el proyecto no existe.'});
                
                    try{
                        const project = await Project.findById(projectId);
                        if(!project) return res.status(404).send({message:
                             'el proyecto no existe'});
                        return res.status(200).send({project});
                    } catch (err) {
                        return res.status(500).send({message: 
                            'error al devolver los datos'});
                    }
                  /* codigo que ya no funciona en la actualidad  2023  
                Project.findById(projectId, (err, project)=>{
                   if(err) return res.status(500).send({message: 'error al devolver los datos'});
                    if(!project) return res.save(404).send({message: 'el proyecto no existe.'});
                    return res.status(200).send({
                        project
                    });
 
                //});
                */
        },

       
        getProjects: async function (req, res){
           try{
            project.find({}).sort('+year')
            .then((projects)=>{
                return res.status(200).send({projects})
            })
            //probando
            //.apply((projects) => {
              //  return res.status(200).send({projects})
            //});
            } catch (err) {
                return res.status(404).send({
                    message: 'error'
                });
            }


            /*    no funciona 

              getProjects: async function (req, res){
         
            Project.find({}).exec((err, projects) =>{
                if(err) return res.status(500).send({message: 
                    'error al devolver los datos.'});
                if(!project) return res.status(404).send({message: 
                    'no hay projectos que mostrar.'})

                return res.status(200).send({projects})
            });
                */
            },

            updateProject: async function(req, res){
                
                var projectId = req.params.id;
                var update = req.body;

              //nueva prueba
            
             project.findByIdAndUpdate(projectId, update, {new:true})
             .then((projectUpdate)=>{
                return res.status(200).send({project: projectUpdate})
             })
             .catch(()=>{
                return res.status(404).send({message: 
                    'Proyecto no econtrado para actualizar'});
             })  
        },
                /*

                no esta funcionando

                
                 project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {

                    if(err) {return res.status(500).send({message: 'error al actualizar'});}

                    if(!projectUpdated){return res.status(404).send({message: 'no existe el proyecto para actualzar'});}                    
              
                   else{ return res.status(200).send({ project: projectUpdated});}

                try{
            project.find({}).sort('+year')
            .then((projects)=>{
                return res.status(200).send({projects})
            })

                //primera forma del curso

                



                //segundo intento
                if(projectUpdated == null) return res.status(404).send({message: 
                    'el proyecto no existe.'});
                try{
                    project.findByIdAndUpdate(projectId,update, (projectUpdated) =>
                    return res.status(200).send({
                        project: projectUpdated
                    })
                }catch(err){
                    return res.status(500).send({message:'error al actualizar'});
                   };
                   */

    deleteProject: function(req, res){
        var projectId = req.params.id;
 
        Project.findByIdAndDelete(projectId)
        .then((projectRemoved) => {
            return res.status(200).send({
                project: projectRemoved
            })
        })
        .catch((err, projectRemoved) =>{
            if(err) return res.status(500).send({message: 'No se pudo eliminar el proyecto.'});
 
            if(!projectRemoved) return res.status(404).send({message: 'No se pudo encontrar el proyecto para ser eliminado.'});
        })

        /*no funciona
        project.findByIdAndDelete(projectId, (err, projectDelete)=> {
            if(err) return res.status(500).send({message: 'no se ha podido borrar el proyecto '});
            if(!projectDelete) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});
            return res.status(200).send({
                project: projectDelete
            })

        })
        */
    },
    
    uploadImage: function(req,res){
        var projectId = req.params.id;
        var fileName = 'imagen no subida...';

        if(req.files){
        
            return res.status(200).send( {
                files: req.files
            });
        }else{
            return res.status(200).send( {
                message: fileName
            });
        }
    }
          
};

module.exports = controller;