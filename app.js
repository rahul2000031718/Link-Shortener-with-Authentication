import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import userRouter from './router/user.router.js'
import urlRouter from './router/url.router.js'


const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json({limit:'50Mb'}));
app.use(bodyParser.urlencoded({limit:'50Mb', extended:true}))

app.use('/', userRouter);
app.use('/',urlRouter);

export default app; 