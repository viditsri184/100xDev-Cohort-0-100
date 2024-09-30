import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

/*
Problem with Context? Doesn't fix re-rendering, only fixes prop drilling

Why do we use contextAPI?

-> To make rendering more performant (No -X)
-> To make syntax cleaner/get rid of prop drilling (Yes -/)

Note, contextAPI doesn't guarantee about rendering optimization.
Then what is the thing that provide both of these things.

The answer is State Management libraries like
- Recoil
- Zustland
- Redux

What is State Management?

A cleaner way to store the state of your app
Until now, the cleanest thing you can do is use the contextAPI.
It lets you teleport state.

But there are better solutions that get rid of the problems that
ContextAPI has (unnecessary re-renders).

State Management using Recoil :
Recoil and all other libraries helps us to divide our project into two
different parts.
-> States and Components.


Recoil has a concept of an atom to store the state.
An atom can be defined outside the component.
Can be teleported to any component.

Docs : https://recoiljs.org/docs/introduction/getting-started

Atom
An atom represents a piece of state. Atoms can be read from and written to from
any component. Components that read the value of an atom are implicitly subscribed
to that atom, so any atom updates will result in a re-render of all components
subscribed to that atom.

Selector
A selector represents a piece of derived state. Derived state is a
transformation of state. You can think of derived state as the output of passing
state to a pure function that modifies the given state in some way.

*/


function App() {

  return (
    <>
      <div>
          <Count></Count>
      </div>
    </>
  )
}

//Components that use recoil state need RecoilRoot to appear somewhere in the
// parent tree. A good place to put this is in your root component:
function Count(){
  // console.log("Re-render");
  return <div>
    <RecoilRoot>
      <CountRenderer />
      <Buttons/>
    </RecoilRoot>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState();

  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </>
  )
}

export default App
