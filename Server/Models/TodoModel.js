const mongoose = require('mongoose')


const schema = new mongoose.Schema({
        todo: String,
        id: String,
        completed: {type: Boolean, default: false},
    }
)


const Todo = mongoose.model("Todo", schema)


module.exports = Todo