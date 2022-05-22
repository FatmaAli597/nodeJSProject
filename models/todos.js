const mongoose=require('mongoose')

const todosSchema=mongoose.Schema({
    userId:{type: mongoose.SchemaTypes.ObjectId,ref: "User",required: true},
    title:{ type:String, required:true, minlength:5, maxlength:20},
    // status: String, optional, default is “to-do” [‘to-do’, ‘in progress’, ‘done’]
    // tags:[String], optional, max length for each tag is 10
    // createdAt: Date, timeStamp,
    // updatedAt: Date, timeStamp 
})


var todosModel=mongoose.model('Todos',todosSchema)

module.exports=todosModel