/*
Hooks that you create yourself, so other people can use them are called custom hooks.
A custom hook is effectively a function, but with the following properties -
Uses another hook internally (useState, useEffect, another custom hook)
Starts with use

A few good examples of this can be
Data fetching hooks
Browser functionality related hooks - useOnlineStatus , useWindowSize, useMousePosition
Performance/Timer based - useInterval, useDebounce
*/
import axios from "axios";
import { useEffect, useState } from "react";

// docs : https://projects.100xdevs.com/tracks/3Vhp7rCJUVjnvFuPxZSZ/Custom-Hooks-3

// custom hook
function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let intervalId = setInterval(() => {
            axios.get('https://dummyjson.com/todos/random/5')
                .then((res) => {
                    setTodos([...res.data]);
                    setLoading(false);
                });
        }, n * 1000);

        axios.get('https://dummyjson.com/todos/random/5')
            .then((res) => {
                setTodos([...res.data]);
                setLoading(false)
            });


        return () => {
            clearInterval(intervalId);
        }
    }, [n]);

    return { todos, loading };
}

export function AutoRefresher() {
    const { todos, loading } = useTodos(3);

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <>
            {todos.map((todo) => <Track key={todo.id} todo={todo} />)}
        </>
    )
}

function Track({ todo }) {
    return <div key={todo.id}>
        Title: {todo.todo}
        <br />
        UserId: {todo.userId}
    </div>
}