import {selector} from 'recoil';
import { countAtom } from './count';


export const evenOddState = selector({
    key: "evenOddState",
    get: ({get}) => {
        const count = get(countAtom);

        return (count & 1) === 0 ? "even" : "odd";
    }
});