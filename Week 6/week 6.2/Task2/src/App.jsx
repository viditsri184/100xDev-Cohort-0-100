import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

// useMemo
/*Here if we increment the counter then the whole app is getting re-rendered again
so the expensive for loop is getting calculated again and again even though the input
hasn't changed even.
Thus we can memoize this for loop to stop getting calculated again and again.*/

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1);

  function incrementCount(){
    setCount(count + 1);
  }

  // we could have used useEffect to solve this task to like this
  // const [sum, setSum] = useState(1);
  // useEffect(() => {
  //   let count = 0;
  //   for(let i = 0 ; i <= inputValue ; i++){
  //     count += i;
  //   }
  //   setSum(count);
  // }, [inputValue])

  // the problem with the above approach is the introduction of one extra state variable first of all
  // and secondly everytime inputvalue changes the app re-renders and also since every-time
  // a change inputValue causes a change in sum state variable too, thus causing an extra re-render
  // this time again which is in-efficient.


  
  // similar to useEffect, takes a function and a dependency array as input.
  // But a better, cleaner and efficient solution for this problem
  let newSum = useMemo(() => {
    let sum = 0;
    for(let i = 1 ; i <= inputValue ; i++){
      sum += i;
    }
    return sum;
  }, [inputValue]);
  
  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder={"Find sum from 1 to n"}/>
      <br />
      <p>Sum from 1 to {inputValue} is {newSum}</p>
      <br />
      <button style={{margin:10, padding:10}} onClick={incrementCount}>Counter ({count})</button>
    </div>
  )
}

export default App
