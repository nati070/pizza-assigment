import { Application } from "express";

const express = require("express")
const app: Application = express();

app.use('/api' , require('./routes/index'))


app.listen(3000,()=>{
    console.log("connect")
})