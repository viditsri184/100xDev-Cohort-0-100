import { Header } from "./Header";
import {useState} from 'react';
export function HeaderWithButton(){
    const [title, setTitle] = useState("My name is Vidit");

    function updateTitle(){
        setTitle("My name is " + Math.random());
    }

    return <>
        <button onClick={updateTitle}>Click to update the title</button>
        <Header title={title}></Header>
    </>
} 