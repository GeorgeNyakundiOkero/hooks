const router = require('express').Router()
const { getTodos, getTodo, updateTodo, deleteTodo, createTodo} = require('../controllers/todo')

//routes
//get all todos
router.get('/', getTodos)

//get specific todo
router.get('/:id', getTodo)

//create new Todo
router.post('/', createTodo)

//update todo
router.put('/:id', updateTodo)

//delete Todo
router.delete('/:id', deleteTodo)


module.exports = router