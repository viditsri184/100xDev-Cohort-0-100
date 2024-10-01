import {atomFamily, selectorFamily} from 'recoil';
import axios from 'axios';

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosAtomFamilySelector",
        get: (id) => async ({get}) => {
            const res = await axios.get(`http://localhost:2000/todos/?id=${id}`);
            return res.data.todo;
        }
    })
});