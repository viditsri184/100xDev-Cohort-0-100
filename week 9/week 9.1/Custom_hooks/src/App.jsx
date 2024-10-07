import {useState, useEffect } from 'react'
import './App.css'
import { AutoRefresher } from './hooks/AutoRefresher'
import { UseIsOnline } from './hooks/useIsOnline'
import { UseMousePinter } from './hooks/UseMousePointer'
import { UseDimensions } from './hooks/UseDimensions'
import { UseInterval } from './hooks/UseInterval'
import { UseDebounce } from './hooks/UseDebounce'

function App() {
  // const [render, setRender] = useState(true);
  
  // to unmount the component
  // useEffect(() => {
  //   setTimeout(() => {
  //     setRender(false);
  //   }, 10000)
  // }, [])

  return (
    <>
      {/* {render ? <MyComponent /> : <div></div>} */}
      {/* <UseIsOnline/> */}
      {/* <AutoRefresher/> */}
      {/* <UseMousePinter/> */}
      {/* <UseDimensions /> */}
      {/* <UseInterval /> */}
      <UseDebounce />
    </>
  )
}

// ---------- useState ------------

// function based components
// function MyComponent(){
//   const [count, setCount] = useState(0);

//   function inCrementCount(){
//     setCount(count + 1);
//   }

//   return <div>
//     <button onClick={inCrementCount}>Counter {count}</button>
//   </div>
// }

// class based components
// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count : 0};
//   }

//   inCrementCount = () => {
//     this.setState({count : this.state.count + 1});
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.inCrementCount}>Increment</button>
//       </div>
//     );
//   }
// }


// ---------Life cycle events -----------
// ----------- useEffect -----------

// function MyComponent(){
//   useEffect(() => {
//     console.log("component mounted");

//     return () => {
//       console.log("component unmounted");
//     }
//   }, []);

//   return <div>
//     From inside my component
//   </div>
// }

// class MyComponent extends React.Component{
//   componentDidMount(){
//     // perform setup or data fetching here
//     console.log("component mounted")
//   }

//   componentWillUnmount(){
//     // Clean up {e.g remove event listeners or cancel subscription}
//     console.log("component unmounted");
//   }

//   render(){
//     // Render UI
//     return <div>hi there</div>
//   }
// }




export default App
