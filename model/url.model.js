import mongoose from 'mongoose';
import {connection} from '../configuration/database.js';

import { userModel } from './user.model.js';

const {Schema} = mongoose;

const urlSubmitionSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    longUrl:{
        type: String
        
    },
    shortUrl:{
        type:String
    }
});

const urlSubmitionModel = connection.model('urlSubmition, url', urlSubmitionSchema);
export {urlSubmitionModel};