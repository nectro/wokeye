const router = require('express').Router()
const project = require('../models/project.model')
const task = require('../models/task.model')

router.route('/fetchAll/').post(async (req,res)=>{
    const { taskIds }= req.body
    let tasks = []
    for(var i in taskIds){
        await task.findOne({"_id":taskIds[i]})
        .then(task=>{
            tasks.push(task)
        })
    }
    res.json({status:1,msg:"fetched",data:tasks})
})

router.route('/createTask/:id').post(async (req,res)=>{
    const projId = req.params.id
    const {
        taskName,
        userId
    } = req.body

    const mainProject = await project.findOne({"_id":projId})

    if(projId && taskName){
        const newTask = new task({
            status:0,
            name:taskName,
            lead:[userId]
        })

        newTask.save()
            .then(async (t)=>{
                var projectTasks = mainProject.tasks
                var taskId = await t._id.valueOf()
                projectTasks.push(taskId)
                project.findOneAndUpdate({"_id":projId},{tasks:projectTasks} )
                    .then(()=>res.json({status:1,msg:"tasks created"}))
                    .catch(()=>res.status(400).json({status:0,msg:"project didn't update"}))
            })
            .catch((err)=>{res.status(400).json({status:0,msg:err})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

router.route('/updateMembers/:id').post(async (req,res)=>{
    const taskId = req.params.id
    const {
        members,
    } = req.body

    if(members && taskId){

        const taskUpdate = await task.findOneAndUpdate({"_id":taskId}, {members})

        taskUpdate.save()
            .then(()=>{res.json({status:1,msg:"members added"})})
            .catch(()=>{res.status(400).json({status:0,msg:"member not added"})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

router.route('/updateLeads/:id').post(async (req,res)=>{
    const taskId = req.params.id
    const {
        lead,
    } = req.body

    if(lead && taskId){

        const taskUpdate = await task.findOneAndUpdate({"_id":taskId}, {lead})

        taskUpdate.save()
            .then(()=>{res.json({status:1,msg:"members added"})})
            .catch(()=>{res.status(400).json({status:0,msg:"member not added"})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

router.route('/updateDoc/:id').post(async (req,res)=>{
    const taskId = req.params.id
    const {
        docs,
    } = req.body

    if(taskId){

        const taskUpdate = await task.findOneAndUpdate({"_id":taskId}, {details:docs})

        taskUpdate.save()
            .then(()=>{res.json({status:1,msg:"details updated"})})
            .catch(()=>{res.status(400).json({status:0,msg:"failed to update detail"})})
    }else{
        res.status(400).json({status:0,msg:"data not given correctly!"})
    }
})

module.exports = router