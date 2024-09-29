import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

/*Remember this useNavigate hook can only be used inside a component which is inside
the BrowserRouter component, otherwise it will give error.
Thus we have placed this Appbar inside the BrowserRouter component in the App.jsx file */

export function Appbar() {
    // this is the right way to perform client-side routing and avoid page reloading
    // in reactJs using "useNavigate" hook provided by the react-router-dom
    const navigate = useNavigate();

    const goToLanding = useCallback(() => {
        navigate('/')
    }, [])

    const goToDashboard = useCallback(() => {
        navigate('/dashboard')
    }, [])

    return <>
        <div style={styles.container}>
            This is the top bar
        </div>
        <div>
            <button onClick={goToLanding} style={styles.btn}>Landing</button>
            <button onClick={goToDashboard} style={styles.btn}>Dashboard</button>
        </div>
    </>
}


const styles = {
    container: {
        background: "#606c38",
        color: "#fefae0",
        border: "1px solid black",
        margin: 10,
        padding: 10,
        fontSize: 19,
    },
    btn: {
        margin: 10,
        padding: 10,
        background: "#4a4e69",
        color: "#f2e9e4",
        fontSize: 19,

    }
}