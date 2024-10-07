import { useState, useEffect } from 'react';

// useOnline hook
function useOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => setIsOnline(true));

        window.addEventListener("offline", () => setIsOnline(false));

        return () => {
            window.removeEventListener("online");
            window.removeEventListener("offline");
        }
    }, []);
    return isOnline;
}


export function UseIsOnline() {
    const isOnline = useOnline();

    return <div>
        {isOnline ? <div>Online</div> : <div>Offline</div>}
    </div>
}