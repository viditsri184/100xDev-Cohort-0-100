import { useEffect, useState } from 'react';

function useDimension() {
    const [dimension, setDimension] = useState({ x: window.innerWidth, y: window.innerHeight });

    const handleSize = () => {
        setDimension({ x: window.innerWidth, y: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }, []);

    return dimension;
}

export function UseDimensions() {
    const { x: width, y: height } = useDimension();

    return (
        <div>Current width is {width} and height is {height}</div>
    )
}