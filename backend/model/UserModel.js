const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        reuired: true
    },
    password:{
        type:string,
        reuired:true
    }
})

const userModel=mongoose.model('User',UserSchema);
module.exports=userModel;