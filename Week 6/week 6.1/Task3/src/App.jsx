import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://dummyjson.com/todos/random/5')
      .then(async (res) => {
        const json = await res.json();
        // if the response is 1 todo then below line will work fine
        // setTodos([...todos, json]);
        // but since we are getting a todo array of 5 todos, so below line is implemented
        setTodos([...todos, ...json]);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.todo} completed={todo.completed} userId={todo.userId}/>)}
    </div>
  )
}


function Todo({title, completed, userId}){
  return(
    <div>
      <h1>Title: {title}</h1>
      <h2>Completed: {completed === true ? "Done" : "Pending"}</h2>
      <h3>userId: {userId}</h3>
    </div>
  )
}
export default App
