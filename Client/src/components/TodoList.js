import React, { useEffect } from 'react'
import axios from "axios"
import "./TodoList.css"

const get_Todos_URL= 'http://localhost:5000/'
const update_Todo_URL= 'http://localhost:5000/update-todo/'
const delete_Todo_URL = 'http://localhost:5000/delete-todo/'
const update_Status_URL = 'http://localhost:5000/update-status/'



const TodoList = ({todos, setTodos}) => {

  useEffect(() => {
    async function fetchData() {
      const res =  await axios.get(get_Todos_URL) 
      setTodos(res.data)
    } fetchData()
  }, [setTodos])


    const del = async ({id}) =>{
      let res = await axios.delete(delete_Todo_URL + id)
      setTodos(res.data)
      setTodos(todos.filter((todo) => todo.id !== id))
      }



  const checked = async ({id, completed}) =>{
    let newStatus = !completed
    try {
      let res = await axios.put(update_Status_URL + id, {completed: newStatus})
      setTodos(res.data)
      setTodos(todos.map((todo) => todo ))
      // window.location.reload()
    } catch (error) {
      console.log(error)
    }
 
  }

  
  const edit = async ({id}) =>{
    let newTask = prompt("Enter the desired new item...")
    let res = await axios.put(update_Todo_URL + id, {todo: newTask})
    setTodos(res.data)
    setTodos(todos.map((todo) =>{
      if (todo.id === id) {
        return {...todo, todo: newTask}
      }
      return todo
    }))
  }


  return (
    <div className='task-list'>
      {todos.map((todo) =>(
        <li className='task' key={todo.id}>
          <div className='task-details'>
            <input className='checkbox' type='checkbox'  onChange={() => checked(todo)} checked={todo.completed}/>
            <span className='task-text'>{todo.todo}</span>
          </div>

          <div className='ctrl-btns'>
                <button className='edit' onClick={() => edit(todo)}>Edit</button>
                <button className='del' onClick={() => del(todo)}>Delete</button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
