const express  = require('express');
const cors = require('cors')
require('dotenv').config();
const pool = require('./db')

const app = express();

// midlewares
app.use(cors);
app.use(express.json());

// create todo 

// get all todo 

// update todo  

// delete todo

app.listen(5000,()=>{
    console.log('SEVER IS RUNNING ');
})