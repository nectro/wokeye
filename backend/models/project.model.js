const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = new schema({
    name:{type:String,required:true},
    members:{type:[String],required:false},
    owner:{type:String,required:true},
    tasks:{type:[String],required:false},
    document:{type:String,required:false}
},{
    timestamps: true,
})

const project = mongoose.model('project', projectSchema)
module.exports = project