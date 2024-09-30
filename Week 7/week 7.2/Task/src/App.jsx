import './App.css'
import { countAtom } from './store/atoms/count'
import { evenOddState } from './store/atoms/evenOdd'
import {useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
function App() {

  return (
    <RecoilRoot>
    <EvenOddCountRenderer></EvenOddCountRenderer>
    </RecoilRoot>
  )
}

function EvenOddCountRenderer(){
  const [count, setCount] = useRecoilState(countAtom);
  const evenOdd = useRecoilValue(evenOddState);

  return (
    <div>
      <p>{count}</p> <br />
      <button style={{margin:10, padding:10}} onClick={() => setCount(count => count + 1)}>Increase</button>
      <button style={{margin:10, padding:10}} onClick={() => setCount(count => count - 1)}>Decrease</button>
      <br />
      <p>It is {evenOdd}</p>
    </div>
  )
}

export default App
