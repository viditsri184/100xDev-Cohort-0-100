import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil';
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

function Todo({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <div>
      <div><b>Title: {currentTodo.title}</b></div>
      <div><i>Description: {currentTodo.description}</i></div>
      <div><b>{currentTodo.completed === true ? "completed" : "pending"}</b></div>
      <br />
    </div>
  )
}

export default App
