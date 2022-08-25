const router = require('express').Router()
const user = require('../models/user.model')
const project = require('../models/project.model')

router.route('/fetchAll/').post(async (req,res)=>{
    const { projIds }= req.body
    let projs = []
    for(var i in projIds){
        await project.findOne({"_id":projIds[i]})
        .then(proj=>{
            projs.push(proj)
        })
    }
    res.json({status:1,msg:"fetched",data:projs})
})

router.route('/fetch/:id').get((req,res)=>{
    const projId= req.params.id;
    project.findOne({"_id":projId})
        .then(proj=>{
            res.json({status:1,msg:"fetched",data:proj})
        })
        .catch((err)=>{
            res.json({status:0,msg:"couldn't find",data:err})
        })
})

router.route('/createProject/:id').post(async (req,res)=>{
    const id = req.params.id
    const {
        projectName
    } = req.body

    const owner = await user.findOne({"_id":id})

    if(id && projectName){
        const newProject = new project({
            name:projectName,
            owner:id,
            document:""
        })

        newProject.save()
            .then(async (proj)=>{
                var ownerProjects = owner.projects
                var projId = await proj._id.valueOf()
                ownerProjects.push(projId)
                user.findOneAndUpdate({"_id":id},{projects:ownerProjects} )
                    .then(()=>res.json({status:1,msg:"project created",data:proj}))
                    .catch(()=>res.status(400).json({status:0,msg:"profile didn't updated"}))
            })
            .catch((err)=>{res.status(400).json({status:0,msg:err})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

router.route('/addMembers/:id').post(async (req,res)=>{
    const id = req.params.id
    const {
        members,
    } = req.body

    if(members && id){

        const proj = await project.findOneAndUpdate({"_id":id}, {members})

        proj.save()
            .then(()=>{res.json({status:1,msg:"members added"})})
            .catch(()=>{res.status(400).json({status:0,msg:"member not added"})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

router.route('/addTasks/:id').post(async (req,res)=>{
    const id = req.params.id
    const {
        tasks,
    } = req.body

    if(tasks && id){

        const proj = await project.findOneAndUpdate({"_id":id}, {tasks})

        proj.save()
            .then(()=>{res.json({status:1,msg:"tasks added"})})
            .catch(()=>{res.status(400).json({status:0,msg:"task not added"})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

router.route('/updateDoc/:id').post(async (req,res)=>{
    const id = req.params.id
    const {
        docs,
    } = req.body

    if(id){

        const proj = await project.findOneAndUpdate({"_id":id}, {document:docs})

        proj.save()
            .then(()=>{res.json({status:1,msg:"document updated"})})
            .catch(()=>{res.status(400).json({status:0,msg:"failed to update docs"})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

module.exports = router