const userModel = require("../model/UserModel");
const jwt=reuire('jsonwebtoken');
const  LoginController=async(req,res)=>{
   const {email,password}=req.body;
   const user= await userModel.findOne({email});

   if(!user){
    res.status(404).json({message:"email not found"});
   }
   if(user.password!==password){

   }
   const token= await jwt.sign({
    id:user._id,
    email:user.email
   },
   process.env.SECRET_KEY
)

   res.status(200).json({
    token: token,
    email: user.email
   })
}