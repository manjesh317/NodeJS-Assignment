const express=require('express')
const path=require('path')
const bodyParser = require("body-parser");
const session = require("express-session");

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)





app.listen(8080,()=>console.log('server started at localhost'))