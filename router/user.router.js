import express from 'express';
const router = express.Router();
import {userModel} from '../model/user.model.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcryt from 'bcrypt'



router.post('/signup',async(req,res)=>{
        const { username, email,password} = req.body;

        const user = await userModel.findOne({email: email}).exec();
        console.log(user, "---------------");
        if (user) {
    
           return res.json({status:true, message: "User Created Successfully"});
        } 
        console.log(username, email, password,"****");
        const hashpassword = await bcryt.hash(password,10)
        const newUser = new userModel({
            username, email, password: hashpassword,
        })

        console.log(newUser,".......");
        await newUser.save()
        return res.json({status:true,message: "record registed"})
    
})



router.post('/login',async(req,res)=>{


    //console.log(process.env);

        const {email,password} = req.body;

        const user = await userModel.findOne({email});
        if (!user) {

           return res.json({status:false, message: "user not registered"});
        } 

        const validPassword = await bcryt.compare (password, user .password);
        if(!validPassword){
            return res.json({message: "password incorrect"})
        }

        const token= jwt.sign({username:user.username} ,'jwttokenkey')
        res.cookie('token', token,{httpOnly:true ,maxAge:360000})
        return res.json({status:true, message: "login successful"})

        
    
})

export default router;