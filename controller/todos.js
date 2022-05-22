const todosModel=require("../models/todos")

function createtods(todos)
{
    var todos=todosModel.create(todos)
    return todos
}

function getall(){
    var todos=todosModel.find({})
    return todos

}

function getone(title)
{
    var todos=todosModel.findOne({title:title})
    return todos
}

function todosUpdate(titl)
{
    var newTodos=todosModel.findOneAndUpdate({title:titl})
    return newTodos
}

function Delete_id(title)
{
    var todosDel=todosModel.deleteOne({title:title})
    return todosDel
    
}

module.exports={createtods,getall,getone,Delete_id,todosUpdate}