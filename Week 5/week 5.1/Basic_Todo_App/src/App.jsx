import { useState } from 'react';
import './App.css';


/*
1. State : How current state of the webpage or webpage small part.(like 5 new people messaged you
hence the new true value of webpage content is changed.)(state may or may not come from DB)

2. Component : Part of a webpage which has dynamic (variable) content. (like notifications of msg, or the msg itself)

3. Role of react : Make state-component connection seamless. Calculate state difference, re-render(reload)
component(small part of webpage)according to new state.React is basically serving new need of internet which is
dynamic content.
 */

// any time a parent re-renders, it's child re-renders as well
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

  function addTodo() {
    // usual normal way to update todos using setTodos
    // let newTodos = [];
    // for(let i = 0 ; i < todos.length ; i++){
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   title : "New title",
    //   description : "Description",
    //   completed : true;
    // });

    // setTodos(newTodos);

    // using spread operator
    setTodos([...todos, {
      title: "new Title",
      description: "new description",
      completed: false
    }]);
  }

  return (
    <div>

      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description} completed={todo.completed}/>
      })}
      <DarkTodos todos={todos}/>
    </div>
  )
}

function DarkTodos(props){
  return <div style={{backgroundColor:"black", color:"grey"}} >
    {props.todos.map((todo)=>{
      return <Todo title={todo.title} description={todo.description} completed={todo.completed}/>
    })}
  </div>
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
