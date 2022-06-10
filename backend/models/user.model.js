const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    skills:{type:[String],required:false},
    projects:{type:[String],required:false},
},{
    timestamps: true,
})

const user = mongoose.model('user', userSchema)
module.exports = user