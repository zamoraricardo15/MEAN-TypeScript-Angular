const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type:String,  
        required:true,
        minlength:[3, 'must be at least 3 characters']
     },   
     description: String, 
     completed: Boolean, default: false
    
}, {timestamps:true})

const Task = mongoose.model('Task', TaskSchema)

module.exports = {
    Task: Task,
    TaskSchema: TaskSchema
}