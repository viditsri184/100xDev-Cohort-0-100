import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "Go to gym from 7-9",
    completed: false
  },{
    title: "Study DSA",
    description: "Study DSA from 9-10",
    completed: true
  },{
    title: "Go Running",
    description: "Go running from 6-7",
    completed: false
  }]);

  function addTodo(){
    setTodos([...todo], {
      title: "new Title",
      description: "new description",
      completed: false
    });
  }

  return (
    <div>

      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description} completed={todo.completed}/>
      })}
    </div>
  )
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <b>{props.completed === true ? "Done" : "Pending"}</b>
    </div>
  )
}

export default App
