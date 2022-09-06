const express  = require('express');
const cors = require('cors')

const app = express();

// midlewares
app.use(cors);
app.use(express.json());

app.listen(5000,()=>{
    console.log('SEVER IS RUNNING ');
})