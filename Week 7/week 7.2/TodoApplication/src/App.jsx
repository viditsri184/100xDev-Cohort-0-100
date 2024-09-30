import {RecoilRoot} from 'recoil';
import Todos from './components/Todos';
import Todo from './components/Todo';

function App(){
  return(
    <RecoilRoot>
      <Todo></Todo>
      <Todos></Todos>
    </RecoilRoot>
  )
}



export default App;
