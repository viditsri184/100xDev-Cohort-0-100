import './App.css'
import {useState} from 'react'

// state and components {two main things}

function App(){
  const [count, setCount] = useState(0); // [1, 2] {destructuring}

  return(
    <>
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
        <CustomButton count={count - 1} setCount={setCount}></CustomButton>
        <CustomButton count={count + 1} setCount={setCount}></CustomButton>
        <CustomButton count={count * 100} setCount={setCount}></CustomButton>
      </div>
    </>
  )
}

// component
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }


  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App

