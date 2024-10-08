import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  //By default, useState([]) initializes the state with an empty
  // array of type never[], which means it does not expect any
  // specific type yet.
  
  // Explicitly setting the type for todos
  const [todos, setTodos] = useState<TodoType[]>([]);;

  useEffect(() => {
    axios.get("https://dummyjson.com/todos/random/5")
    .then((res) => {setTodos([...res.data])})
  }, [])

  return (
    <>
      {todos.length === 0 ? <div>No todos</div> : todos.map((todo) => {return <Track key={todo.id} todo={todo} />})}
    </>
  )
}

interface TodoType {
  id: number;
  todo: string;
  userId: number;
}

interface TodoInput {
  todo: TodoType;
}

function Track({todo} : TodoInput) {
  return <div>
    <p>Id : {todo.id}</p>
    <p>Description : {todo.todo}</p>
    <p>userId : {todo.userId}</p>
  </div>
}

export default App
