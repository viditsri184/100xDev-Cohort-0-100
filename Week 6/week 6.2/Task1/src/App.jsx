import { useState, useEffect } from 'react'

function App() {
  const [id, setId] = useState(1);
  
  return (
    <div>
      <button onClick={function(){
        setId(1);
      }} style={{padding:"10", margin:"10"}}>1</button>
      <button onClick={function(){
        setId(2);
      }} style={{padding:"10", margin:"10"}}>2</button>
      <button onClick={function(){
        setId(3);
      }} style={{padding:"10", margin:"10"}}>3</button>
      <button onClick={function(){
        setId(4);
      }} style={{padding:"10", margin:"10"}}>4</button>
        <Todo Todo id={id}></Todo>
    </div>
  )
}



function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    fetch(`https://dummyjson.com/todos/user/${id}`)
    .then(async function(res){
      const data = await res.json();
      if(data.todos.length === 0) setTodo({todo : "Set goal", completed:false, userId: Math.random()});
      else setTodo(...data.todos);
    })
    .catch((err) => {
      console.log(`Error fetching data : ${err}`);
    })
  }, [id]);

  
  return <div>
    <h2>Title : {todo.todo}</h2>
    <h3>Status : {todo.completed === true ? "Done" : "Pending"}</h3>
    <h3>userId : {todo.userId}</h3>
  </div>
}


export default App
