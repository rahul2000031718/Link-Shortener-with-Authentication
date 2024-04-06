
import mongoose from 'mongoose';
import { connection } from '../configuration/database.js';


const userSchema= new mongoose.Schema({
    username:{
        type:String,required:true, unique:true

    },

    email:{
        type:String,required:true, unique:true
    },

    password:{
        type:String,required:true, unique:true
    }
})

const userModel = connection.model('users', userSchema);
export { userModel };