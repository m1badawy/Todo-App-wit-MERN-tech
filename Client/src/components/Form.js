import React from 'react'
import axios from "axios"
import { v4 } from 'uuid'
import "./Form.css"


const create_URL = 'http://localhost:5000/create-todo'


const Form = ({input, setInput, todos, setTodos}) => {
    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const formSubmit = (e) =>{
      e.preventDefault()
      let todo = {
        todo: input,
        id: v4(),
        completed: false
      }

      axios.post(create_URL, todo)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err)
      })

      setTodos([...todos, todo])
      setInput("")
    }

  return (
    <form onSubmit={formSubmit} className="form">
      <input type="text" placeholder='Add a Todo...' className='item-input' value={input} required onChange={inputChange}/>
      <button className='button-add' type='submit'>Add task</button>
    </form>
  )
}

export default Form
