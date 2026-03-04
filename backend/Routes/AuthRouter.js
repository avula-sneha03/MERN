const express= require('express');
const router=express.Router();

router.post('/login',AuthValidation,LoginController);



module.exports= router;
