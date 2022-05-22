const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')


const userSchema2=mongoose.Schema({

    firstName:{ type:String, minlength:3, maxlength:15, required:true },
    lastName: { type:String, minlength:3, maxlength:15, required:true },
    password: { type:String, required:true },
    // birthDay: { Date },
    // createdAt:updatedAt:
        
})


// userSchema2.pre('save',function(){

//     var salt = bcrypt.genSaltSync(10);
//    this.password = bcrypt.hashSync(this.password, salt);
// })


var userModel=mongoose.model('User',userSchema2);
module.exports=userModel
// var todosModel=mongoose.model('todos',userSchema);

// userModel.create({firstName:"yara",lastName:"nady",password:"124"})
