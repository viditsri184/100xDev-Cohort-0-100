import { useState } from 'react'

/*Custom hooks : Just like useState, useEffect, you can write your own hooks.
Only condition is - It should start with a use (naming convention)

Note : We can define state variable inside only a component or a custom hook function.
We can never define a state variable inside a normal function.

Now consider this below code :

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

Now this code works fine, but looks a little less readable and also less elegant
What we can do here is create our own hook and place all that useState and useEffect logo inside that
custom hook.
The result of that will look something like below.

*/

function useTodos(){
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

  return todos;
}


// now this function looks more clean and all the backend logic is written
// somewhere else in your own custom hook
function App() {
  // custom hook
  let todos = useTodos();

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
