
var express=require('express')
var router=express.Router();
const fs=require('fs')

const {getall ,getone ,createUser,userUpdate,Delete_id}=require("../controller/users")

router.get("/",async(req,res,next)=>{

    var users= await getall()
    res.json(users)
})

router.get("/:name",async(req,res,next)=>{

    var {name}=req.params
    var user= await getone(name);
    res.status(201).json(user)

})

router.patch("/:d",(req,res,next)=>{
    var {d}=req.params; 
    var {name}=req.body;
    userUpdate(d,name).then(()=>{
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

router.post("/",async(req,res,next)=>{
    var body=req.body;
    try{
    var user=await createUser(body)
      
    res.json(user)
    }catch(err)
    {
        res.status(422).json({err})
    }
})


module.exports=router