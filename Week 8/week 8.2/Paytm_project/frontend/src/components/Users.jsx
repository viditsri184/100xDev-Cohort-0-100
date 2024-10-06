import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { User } from "./User";

// custom hook to perform debouncing
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timeout if the value changes before the delay
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}


export function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const debouncedFilter = useDebounce(filter, 500); // Adjust delay as necessary

    useEffect(() => {
        if (debouncedFilter || debouncedFilter === "") { // Only fetch if there's a debounced filter value
            axios.get(`http://localhost:3000/api/v1/user/bulk/?filter=${debouncedFilter}`)
                .then((response) => {
                    setUsers(response.data.user);
                });
        }
    }, [debouncedFilter]);


    return <div className="mt-5">
        <div className="font-bold text-lg">Users</div>
        <input type="text" onInput={(e) => { setFilter(e.target.value)}} placeholder="Search users" className="block border w-full h-10 mt-3 mb-3 rounded-lg outline-none placeholder:pl-1 pl-5" />
        <div className="mt-2">
        {users.length === 0 ? <div className="text-xl font-semibold text-gray-500 mt-2 ml-2">No Users found!!</div> : users.map((user) => {return <User key={user.id} user={user}/>})}
        </div>
    </div>
}