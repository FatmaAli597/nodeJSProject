
const express = require('express')
const fs=require('fs')
const mongoose=require('mongoose')
const userModel=require("../models/users")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

function getone(name){
    // var users=JSON.parse(fs.readFileSync("./data.json",{encoding:"utf-8"}))
    // var user= users.find((user)=>user.id==id)
   var user= userModel.findOne({firstName:name})
    return user;
}

function getall(){
    // var data= JSON.parse(fs.readFileSync("./data.json", {encoding:"utf-8"}))
    var data=userModel.find({})
    if(data)
    {
        return data
    }else{
        res.json({message:"not Data Found"})
    }
}

function createUser(User){
    var user=userModel.create(User)
    return user
}

function userUpdate(name)
{
    var newUser=userModel.findOneAndUpdate({firstName:name})
    
    return newUser
}

function Delete_id(id)
{
    var userDel=userModel.deleteOne({_id:id})
    return userDel
    
}
async function login({ name, password }) {
    var user = await userModel.findOne({ firstName: name });
  
    if (user) {
      var valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return jwt.sign(
          {
            name: user.firstName,
            id: user._id,
          },
          "w6ef77fe7eew6f7ew67",
          { expiresIn: "1h" }
        );
      } else {
        res.status(401).end();
      }
    } else {
      res.status(422).end();
    }
  }

// module.exports={getall,getone ,createUser,userUpdate,Delete_id,login}
module.exports={getall,getone ,createUser,userUpdate,Delete_id,login}