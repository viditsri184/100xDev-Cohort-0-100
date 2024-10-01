import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil';
import {todoAtomFamily} from'./atoms';

function App() {
  return (
    <>
      <RecoilRoot>
        <Todos id={1}/>
        <Todos id={2}/>
        <Todos id={3}/>
        <Todos id={4}/>
        <Todos id={5}/>
        <Todos id={5}/>
      </RecoilRoot>
    </>
  )
}


function Todos({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id));

  return (
    <div>
      <div><b>Title: {currentTodo.title}</b></div>
      <div><i>Description: {currentTodo.description}</i></div>
      <br />
    </div>
  )
}

export default App
