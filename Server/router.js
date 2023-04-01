const express = require('express')
const router = express.Router()
const Controller = require("./Controllers/Controller")


router.get('/', Controller.todos)
router.post('/create-todo', Controller.addTodo)
router.put('/update-todo/:id', Controller.updateTodo)
router.delete('/delete-todo/:id', Controller.deleteTodo)
router.put('/update-status/:id', Controller.updateStatus)


module.exports = router