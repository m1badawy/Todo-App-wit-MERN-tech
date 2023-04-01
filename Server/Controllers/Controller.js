const Todo = require('../Models/TodoModel')
const connection = require('../db')
const { default: mongoose } = require('mongoose')


exports.home = async function (req, res) {
   res.send("Welcome to our To Do - App")
}


exports.todos = async function (req, res) {
    try {
        let todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        res.send(err)
    }
} 


exports.addTodo = async function (req, res) {
    try {
        let todo = new Todo(req.body)
        await Todo.create(todo)
        res.send("Todo added successfully")
    } catch (err) {
        res.send(err)  
    }
} 


exports.updateTodo = async function (req, res) {
    const id = req.params.id
    try {
        await Todo.updateOne({id: id}, req.body)
        res.send("Todo updated successfully")
    } catch (error) {
        res.send(error)
    }
} 

exports.deleteTodo = async function (req, res) {
    const id = req.params.id
    try {
        await Todo.deleteOne({id: id}, req.body)
        res.send("Todo deleted successfully")
    } catch (error) {
        res.send(error)
    }
} 


exports.updateStatus = async function (req, res) {
    const id = req.params.id
    try {
        await Todo.updateOne({id: id}, req.body)
        res.send("Todo updated successfully")
    } catch (error) {
        res.send(error)
    }
} 