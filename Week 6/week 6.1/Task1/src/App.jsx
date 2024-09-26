import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './components/Todo';

let counter = 4;

function App() {
  const [todo, setTodos] = useState([{
    id: 1,
    title: "Gym",
    description: "Go to gym from 6-8"
  },
  {
    id : 2,
    title: "DSA",
    description: "Learn DSA from 9-10"
  },
  {
    id : 3,
    title: "Gym",
    description: "Go to gym from 6-8"
  }]);

  function addTodo(){
    setTodos([...todo, {
      id: counter++,
      title: "New Title " + Math.random(),
      description: "New Description " + Math.random()
    }]);
  }

  return (
    <>
      <div>
      <button onClick={addTodo}>Add Todo</button>
        <Todo  todos={todo}></Todo>
      </div>
    </>
  )
}

export default App
