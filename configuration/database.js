import mongoose from 'mongoose';


const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/url_short')

/*const connection = mongoose.createConnection('mongodb://localhost:27017/url_short', , {
  useNewUrlParser:true,useUnifiedTopology: true
}, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("successful")
    }
}) */

connection.on('connected',() =>{
    console.log("DB Connected");
})

export {connection};