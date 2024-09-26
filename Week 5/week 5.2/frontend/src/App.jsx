import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { Navbar } from './components/Navbar';

function App() {
  const [todo, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:2000');
    const data = await response.json();

    if (Array.isArray(data)) {
        setTodos(data); // Only set if it's an array
    } else {
        console.error('Fetched data is not an array', data);
        setTodos([]); // Fallback to an empty array
    }
  }

  // fetchTodos()
  return (
    <>
      <div>
        <Navbar></Navbar>
        <CreateTodo></CreateTodo>
        <Todos todos={todo}></Todos>
      </div>
    </>
  )
}

export default App
