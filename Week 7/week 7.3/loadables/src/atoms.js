import {atomFamily, selectorFamily} from 'recoil';
import axios from 'axios';

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosAtomFamilySelector",
        get: (id) => async ({get}) => {
            // adding user defined delay
            await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get(`http://localhost:2000/todos/?id=${id}`);
            return res.data.todo;
        }
    })
});