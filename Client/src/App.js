import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const[input, setInput] = useState('')
  const[todos, setTodos] = useState([])
  return (
    <div className='container'>
      <div className='app-wrapper'>

        <div>
          <Header />
        </div>

        <div>
          <Form  
          input={input}
          setInput={setInput} 
          todos={todos}
          setTodos={setTodos}
          />
        </div>

        <div>
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
