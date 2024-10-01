import './App.css'
import {RecoilRoot, useRecoilValueLoadable} from 'recoil';
import {todosAtomFamily} from './atoms';
function App() {
  return (
    <>
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={3}/>
      <Todo id={4}/>
      <Todo id={5}/>
      <Todo id={6}/>
    </RecoilRoot>
    </>
  )
}


// Note we can use Suspense and ErrorBoundary API instead of this loadable thing
// These are more cleaner.
function Todo({id}){
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));
  /*
  Now the above thing returns two things
  {
    contents : The actual content,
    state : The state : loading , hasValue, hasError etc..
  }
  */
  if(currentTodo.state === "loading"){
    return <div><b>Loading....</b></div>
  }
  else if(currentTodo.state === "hasValue"){
    return (
      <div>
        <div><b>Title: {currentTodo.contents.title}</b></div>
        <div><i>Description: {currentTodo.contents.description}</i></div>
        <div><b>{currentTodo.contents.completed === true ? "completed" : "pending"}</b></div>
        <br />
      </div>
    )
  }
  else if(currentTodo.state === "hasError"){
    return <div><b>Error while fetching backend data</b></div>
  }
}

export default App
