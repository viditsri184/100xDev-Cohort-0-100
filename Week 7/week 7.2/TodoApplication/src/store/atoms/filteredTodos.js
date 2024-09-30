import {selector} from 'recoil';
import { todoAtom } from './todo';
import { filterAtom } from './filter';

export const filteredTodoState = selector({
    key:"filteredTodoState",
    get: ({get}) => {
        const todos = get(todoAtom);
        const filter = get(filterAtom).toLowerCase();

        if(filter === ""){
            return todos;
        }
        return todos.filter(todo =>
            todo.title.toLowerCase().includes(filter) ||
            todo.description.toLowerCase().includes(filter)
        );
    }
})