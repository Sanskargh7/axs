const express=require('express')
const mongoose=require('mongoose')
const helmet = require("helmet");
const morgan = require("morgan");
const app=express();
const dotenv=require('dotenv')
dotenv.config();

const userAuth=require('./routes/auth')

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database is connected')
}).catch(()=>console.log('connnection field'))
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/auth',userAuth)


app.listen(7000,()=>{
    console.log('server is started')
})