const Todo = require('../models/Todo')

//get all todos
const getTodos = async (req, res, next) => {
    try{
        const todos= await Todo.find()
        res.status(200).json(todos)
    } catch(err) {
        res.status(500).send(err)
    }
}

//get specific todo
const getTodo = async (req, res, next) => {
    try{
        const todo = await Todo.findById(req.params.id)
        if(!todo) {
            return res.status(404).send("Todo not found")
        }
        res.status(200).json(todo)
    } catch(err){
        res.status(500).send(err)
    }
}

//update todo
const updateTodo =async (req, res, next) => {
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedTodo)
    } catch(err) {
        res.status(500).send(err)
    }
}

//delete todo
const deleteTodo = async (req, res, next) => {
    try{
         const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).send("Todo deleted sucessfully...")
    } catch(err){
        res.status(500).send(err)
    }
   
}

//create todo
const createTodo = async (req, res, next) => {
    const newTodo = new Todo(req.body)
    try{
        const savedTodo = await newTodo.save()
        res.status(201).json(savedTodo)
    } catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    createTodo,
}