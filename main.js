

const express=require('express');
const fs=require('fs');
var app = express() ;
const cors=require('cors');
const mogoose=require('mongoose')


app.use(cors())
mogoose.connect('mongodb://localhost:27017/iti_project',()=>{
   console.log("connect thanks")
})
const RouterUser=require("./routes/users")
const RouteTodos=require("./routes/todos")
app.use(express.json());

app.use((req,res,next)=>{
    next();
})

app.use(express.static("./static"))
app.use("/users",RouterUser)
app.use("/todos",RouteTodos)


app.listen(3500 , ()=>{
    console.log(' hello on port 3500');
})