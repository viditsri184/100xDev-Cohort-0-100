import React, { useState } from 'react'
import './App.css'
// import { Header } from './components/Header'
// import { HeaderWithButton } from './components/HeaderWithButton'

/*
React component returns -
In React, you can only return a single child from a component because each
component must return a single element (usually represented as a tree).
This single element can either be a native DOM element (like div, span) or a
custom React component.

-------------------------------------------------------------------------------------------------------

In React, component names must start with a capital letter due to how JSX
distinguishes between HTML elements and custom components.

Reason:
Lowercase names (e.g., div, span) are treated as built-in HTML elements.
Capitalized names (e.g., MyComponent) are treated as custom React components.
This distinction allows React to differentiate between native DOM elements and user-defined components.

--------------------------------------------------------------------------------------------------------

Re-rendering in react

A re-render means that
1. React did some work to calculate what all should update in this component
2. The component actually got called (you can put a log to confirm this)
3. The inspector shows you a bounding box around the component

It happens when
1. A state variable that is being used inside a component changes
2. A parent component re-render triggers all children re-rendering


You want to minimize the number of re-renders to make a highly optimal react app.
The more the components that are getting re-rendered the worse.

1st way : Pushing the state down i.e if we sure shot know that some state is going to use
by only a defined component then why not place that state inside that component only,
rather than placing in the parent component
That is why we changed the title state from App component to inside only the HeaderWithButton
component, as only Header uses it.
Thus now only HeaderComponent re-renders rather than the whole App component.

2nd way : using React.memo

React.memo() is a higher-order component that we can use to wrap components
that we do not want to re-render unless props within them change. 
 */

function App() {
//   const [title, setTitle] = useState("My name is Vidit");

    // Issue with this is the whole app getting re-rendered
//   return (
//     <>
//       <button onClick={changeTitle}>Click to change the title of first Header</button>
//       <Header title={title}></Header>
//       <Header title={"My name is vidit1"}></Header>
//     </>
// )


//   function changeTitle(){
//     const a = Math.random();
//     setTitle("My name is " + a);
//   }

  // 1st way to reduce re-rendering of whole
  // return (
  //   <>
  //     <HeaderWithButton/>
  //     <Header title={"my name is raman"}></Header>
  //   </>
  // )

  // 2nd way is to use the React.memo to perform some sort of memoization
  const [title, setTitle] = useState("My name is Vidit");

  function changeTitle(){
    const a = Math.random();
    setTitle("My name is " + a);
  }

  return (
        <div>
          <button onClick={changeTitle}>Click to change the title of first Header</button>
          <Header title={title}></Header>
          <Header title="My name is vidit1"></Header>
          <Header title="My name is vidit12"></Header>
          <Header title="My name is vidit21"></Header>
          <Header title="My name is vidit123"></Header>
        </div>
  )

}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
});



export default App
