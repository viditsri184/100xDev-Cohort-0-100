import { filterAtom } from "../store/atoms/filter";
import { filteredTodoState } from "../store/atoms/filteredTodos";
import { useRecoilValue } from 'recoil';

let globalId = 1;
export default function Todos() {
    const todos = useRecoilValue(filteredTodoState);

    return (
        <div>
            {todos.map((todo) => <div key={globalId++}>
                <div style={styles.title}>
                    <b style={{fontSize:"20px"}}>Title : {todo.title}</b>
                </div>
                <div style={styles.description}>
                    <i>Description : {todo.description}</i>
                </div>
            </div>)}
        </div>
    )
}

const styles = {
    title: {
        padding:5,
        margin:4,
        color:"#001233"
    },
    description: {
        padding:4,
        margin:2,
        color:"#172a3a"
    }
}