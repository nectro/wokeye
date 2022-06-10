const mongoose = require('mongoose')
const schema = mongoose.Schema

const todoSchema = new schema({
    details:{type:String,required:true},
    status:{type:Number,required:true},
})

const taskSchema = new schema({
    status:{type:Number,required:true},
    details:{type:String,required:false},
    members:{type:[String],required:false},
    lead:{type:[String],required:true},
    todo:{type:[todoSchema],required:false},
},{
    timestamps: true,
})

const task = mongoose.model('task', taskSchema)
module.exports = task