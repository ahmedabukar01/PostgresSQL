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
    
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
}) 

// get all todo 
app.get('/todos', async (req,res)=>{
   try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos)
   } catch (error) {
    console.error(error.message)
   }
})
// Single todo
app.get('/todos/:id', async(req,res)=>{
   try {
    const { id } = req.params;
    const singleTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

    res.json(singleTodo.rows);
   } catch (error) {
    console.error(error.message)
   }
})

// update todo
app.put('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updated = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description,id])

        const updatedDesc = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json({message: "updated", updated: updatedDesc.rows[0]})
    } catch (error) {
        console.error(error.message)
        
    }
})

// delete todo

app.listen(port,()=>{
    console.log('SEVER IS RUNNING ', port);
})