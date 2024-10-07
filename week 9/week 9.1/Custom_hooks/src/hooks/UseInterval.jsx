import { useEffect, useState } from 'react';

function useInterval(fn, timeout){
    useEffect(() => {
        let intervalId = setInterval(() => {
            fn();
        }, timeout);

        return () => clearInterval(intervalId);
    }, [fn, timeout])
}


export function UseInterval() {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(c => c + 1);
    }, 1000)

    return (
        <>
            Timer is at {count}
        </>
    )
}