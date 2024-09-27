import { useCallback } from 'react';
import { memo } from 'react';
import { useState } from 'react'

/*'useCallback' is a hook in React, a popular javascript library for building user interfaces.
It is used to memoize functions, which can help in optimizing the performance of your application.
especially in cases involving child components that rely on reference equality to prevent unnecessary renders.

Now what does reference equality means?

In js when we do this:
var a = 1;
var b = 1;
a == b -> it returns true;
since both has same values, but in reality it should return false, since both are not
equal by reference, a must be alloted a different memory in space and b must be alloted a different
memory in space.

Similarly let a = "123" and let b = "123". Then a == b -> returns true!

But, now
let us do this :
let a = {};
let b = {};
a == b -> it will return false.

So in js except numbers and strings, all other things are compared by reference first.

Now for example we do this:
function sum1(a, b){return a + b}
function sum2(a, b){return a + b}

sum1 == sum2 -> It will return false. Since they are not equal by reference, even though
they perform exactly same operation.

Now how does this property effects user interface in React?
See if we create a child component which takes a normal variable as prop and we memoize that child component.
Then it should only be re-rendered when the prop value changes technically, right? remember React.memo property!
Now the question is when does React re-render? obviously when a state variable is changed.


function App() {
  const [count, setCount] = useState(0)

  var a = 1;

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Counter ({count})</button>
      <Demo a={a}></Demo>
    </div>
  )
}

const Demo = memo(({a}) => {
  console.log("re-render");
  return <div>
    hi there {a}
  </div>
});

now in the above code even when the state variable is getting changed always then the App component will
render again and the variable a must be declared again with 1, then even though the new declared variable a is same by value
but not same by reference, the Demo component doesn't re-render, React somehow internally knows
with strings and numbers that when their values changes or not.
But, its not same with objects , functions and other things.

For example consider the below code:

function App() {
  const [count, setCount] = useState(0)

  // the normal variable now replaced with a function!
  function a(){
    console.log("hello there")
  }

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Counter ({count})</button>
      <Demo a={a}></Demo>
    </div>
  )
}

const Demo = memo(({a}) => {
  console.log("re-render");
  return <div>
    hi there {a}
  </div>
});


Now this time again the Demo component will not re-rendered? No, it will be actually
re-render every-time the state variable is changed, WHy? Because every time the state variable is changed
the App component gets re-render again the function gets declared again and now this time
when react checks that prev func and this new func are they same it returns false,
Thus it acts as that the prop a was changed and thus the demo component gets re-rendered again.

Now since the function is same and its not changing then why does Demo component keeps getting
re-rendered again and again? because the new func getting declared is not reference equal to the previous one.
Thus React thinks that there is change made in the func, where in reality there is no change made at all.
Hence, to stop this we use the hook useCallback, which helps to memoize functions.

useMemo => helps to memoize variables
useCallback => helps to memoize functions
React.memo/memo => helps to memoize components and only re-render them
                  when an actual change is made to the props passed to them

The solution using useCallback is show below:

*/


function App() {
  const [count, setCount] = useState(0)

  const a = useCallback(()=> {
    console.log("Hi there");
  }, []);

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Counter ({count})</button>
      <Demo a={a}></Demo>
    </div>
  )
}

const Demo = memo(({a}) => {
  console.log("re-render");
  return <div>
    hi there {a}
  </div>
});

export default App
