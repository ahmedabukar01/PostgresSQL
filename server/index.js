const express  = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const pool = require('./db')

const port = 8000;


// midlewares
app.use(cors());
app.use(express.json());

// create todo 
app.post("/todos", async (req,res)=>{
    console.log('ddd')
    try {
        console.log('ok')
        console.log(req.body);
        res.write('got it')
    } catch (error) {
        console.error(error.message)
    }
})

app.get('/', (req,res)=>{
    console.log('here we are')
})
// get all todo 

// update todo  

// delete todo


app.listen(port,()=>{
    console.log('SEVER IS RUNNING ', port);
})