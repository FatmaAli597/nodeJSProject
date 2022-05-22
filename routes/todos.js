const express=require('express')
const router=express.Router()

const {createtods,getall,getone,Delete_id,todosUpdate}=require('../controller/todos')

router.post("/",async(req,res,next)=>{

    await createtods(req.body).then((todos)=>{
        res.status(201).json(todos)
    }).catch(()=>{
        res.status(422).json(err)
    })
})

router.get("/",async(req,res,next)=>{

    var todos= await getall()
    res.json(todos)
})

router.get("/:name",async(req,res,next)=>{

    var {name}=req.params
    var todos= await getone(name);
    res.status(201).json(todos)

})

router.patch("/:name",(req,res,next)=>{
    var {name}=req.params; 
  
    todosUpdate(name).then(()=>{
      res.status(200).json({message:"update Successfully"})
    }).catch((err)=>{
        res.status(422).json(err)
    })
    
     
})



router.delete("/:id",(req,res,naext)=>{
    var {id}=req.params;
    Delete_id(id).then(()=>{
        res.status(200).json({message:"delete Successfully"})
    }).catch((err)=>{
        res.status(422).json(err)
    })
})

module.exports=router