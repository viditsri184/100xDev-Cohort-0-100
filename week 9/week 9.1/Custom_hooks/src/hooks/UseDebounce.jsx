import { useState, useEffect } from 'react';
import axios from 'axios';
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

export function UseDebounce() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState(0);
    const [secondInputValue, setSecondInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay
    const debouncedSecondValue = useDebounce(secondInputValue, 500);

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
    useEffect(() => {
        axios.get(`https://dummyjson.com/todos/user/${debouncedValue}`)
            .then((res) => setTodos([...res.data.todos]))
            .catch((err) => console.error(err));
    }, [debouncedValue]);



    return (
        <>
        <div>Debounced second input value is :{debouncedSecondValue}</div>
        <input type="text" value={secondInputValue} onChange={(e) => setSecondInputValue(e.target.value)} placeholder='search'/>
        <br />
        <br />
        <div>First debounced Value : {debouncedValue}</div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
            />
            {todos.length > 0 ? (
                todos.map((todo) => <Track key={todo.id} todo={todo} />)
            ) : (
                <div>No todos found</div>
            )}
        </>
    );
}

function Track({ todo }) {
    return <div>
        <div>id: {todo.id}</div>
        <div>description: {todo.todo}</div>
        <div>userId: {todo.userId}</div>
    </div>
}