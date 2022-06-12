const router = require('express').Router()
const user = require('../models/user.model')

const bcrypt = require('bcryptjs')


router.route('/signup').post(async (req,res)=>{
    const {
        name,
        email,
        password,
    } = req.body

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = await bcrypt.hash(password, salt)

    if(name && email && password){
        const existingUser = await user.findOne({email})

        if(!existingUser){
            const newUser = user({
                name,
                email,
                password:hashedPassword,
                skills:[],
                projects:[],
            })
            newUser.save()
                .then((user)=>{res.json({status:1,msg:"Welcome to Wokeye!:)",data:user})})
                .catch((err)=>{res.status(400).json({status:0,msg:err})})
        }else{
            res.status(500).json({status:0,msg:"email already exists!"})
        }
    }else{
        res.status(500).json({status:0,msg:"data not entered"})
    }
})

router.route('/login').post(async (req,res)=>{
    const {
        email,
        password,
    } = req.body

    if(email && password){
        user.findOne({email})
            .then(userProfile=>{
                const hashedPassword = userProfile.password
                const isPassCorrect = bcrypt.hashSync(password, hashedPassword)
                if(isPassCorrect){
                    res.status(200).json({status:1,msg:"Welcome back!!:)",data:userProfile})
                }else{
                    res.status(500).json({status:0,msg:"wrong username or password"})
                }
            })
            .catch(err=>{
                res.status(500).json({status:0,msg:"wrong username or password"})
            })

    }else{
        res.status(500).json({status:0,msg:"data not entered"})
    }
})

router.route('/update/:id').post(async (req,res)=>{
    const {
        skills,
        projects
    } = req.body

    const id = req.params.id

    if(skills && projects){
        const User = await user.findOneAndUpdate({"_id":id},{skills,projects})
        User.save()
            .then(()=>{res.json({status:1,msg:"profile updated"})})
            .catch((err)=>{res.status(400).json({status:0,msg:err})})
    }else{
        res.status(500).json({status:0,msg:"data not entered"})
    }
})

module.exports = router