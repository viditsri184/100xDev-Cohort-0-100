import { useState } from 'react'

/*
Before we begin, how do you think one should manage state?
1. Keep everything in the top level component(c1)
2. Keep everything as low as possible (at the LCA of children that need a state).

The correct answer is 2nd to keep the state at the LCA of children that need a state.
As it helps to remove unnecessary renders across the components.

if there is a tree structure of components like this
c1 -> c2 -> c3 -> c4

Note : c1 is the LCA of c1 and c4;
if there is something c4 need and that thing c1 have, and also neither of the
components c2 and c3 need them, they still need to get it as prop from c1 and pass it
down to c4.
Hence, we keep passing props down the line to make it possible to reach where it is required.
This is what we call prop drilling, it is a kind of anti-pattern, because of how
unmanageable it makes the code.

Note : Prop drilling is completely different from re-rendering, it is not the same.
Prop drilling is not necessarily a bad thing but eventually over the line it makes your code
visually unappealing to look at as the state grows or the components grow out.

Either way, you will need to drill props down through the component tree.
This gets very hard to maintain and highly verbose.
Makes code highly unreadable.

Prop drilling doesn't mean that parent re-renders children , it just means the syntactic uneasiness
when writing code.

The problem with passing props :

Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when you need to pass some prop deeply through the
tree, or if many components need the same prop. The nearest common ancestor could be far
removed from the components that need data, and lifting state up that high can lead to a situation called
"prop drilling".

Solution to prop drilling -> Context API
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount}/>
    </>
  )
}


// count component
function Count({count, setCount}){
  return <div style={{margin:10, padding:10}}>
    {count}
  <Buttons count={count} setCount={setCount}/>
  </div>
}

// button component
function Buttons({count, setCount}){
  return <div >
    <button style={{margin:10, padding:10}} onClick={() => {setCount(count + 1)}}>Increment</button>
    <button style={{margin:10, padding:10}} onClick={() => {setCount(count - 1)}}>Decrement</button>
  </div>
}

export default App
