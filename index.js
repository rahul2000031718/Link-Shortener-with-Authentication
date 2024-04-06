
import app from './app.js';


app.get('/',(req,res)=>{
    const { data } = req.body;
    res.send(`Hello ${data}`)
})

app.post('/auth/signup', (req,res)=>{
    console.log(req.body)

    res.send("request received")
})

app.listen(3000, () =>{
    console.log("Localhost Express running at 3000");
}) 