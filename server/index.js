const express  = require('express');
const cors = require('cors')
require('dotenv').config();
const pool = require('./db')

const port = 8000;
const app = express();

// midlewares
app.use(cors);
app.use(express.json());

// create todo 
app.post('/todos', async (req,res)=>{
    try {
        console.log(req.body);
        res.write('got it')
    } catch (error) {
        console.error(error.message)
    }
})
// get all todo 

// update todo  

// delete todo

app.get('/hey',(req,res)=>{
    console.log('hi')
})

app.listen(port,()=>{
    console.log('SEVER IS RUNNING ', port);
})