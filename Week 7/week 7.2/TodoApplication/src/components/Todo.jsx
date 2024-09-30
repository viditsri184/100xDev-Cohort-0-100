import { filterAtom } from "../store/atoms/filter";
import { useSetRecoilState, useRecoilState } from 'recoil';
import { todoAtom } from "../store/atoms/todo";
import { useState } from "react";

export default function Todo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const setFilter = useSetRecoilState(filterAtom);
    const [todos, setTodos] = useRecoilState(todoAtom);

    const updateTodo = () =>{
        setTodos([...todos, {
            title: title,
            description: description,
        }]);
        setTitle("");
        setDescription("");
    }

    return (
            <div style={styles.container}>
                <div >
                    <label style={styles.labels} htmlFor="">Title</label>
                    <input style={styles.input_boxes} onInput={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title" />
                </div>
                <div>
                    <label style={styles.labels} htmlFor="">Description</label>
                    <input style={styles.input_boxes} onInput={(e) => setDescription(e.target.value)} type="text" placeholder="Enter description" />
                </div>
                <div>
                    <label style={styles.labels} htmlFor="">Filter</label>
                    <input style={styles.input_boxes} onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Enter any filter"/>
                </div>
                <div>
                    <button style={styles.button} onClick={updateTodo}>Add Todo</button>
                </div>
            </div>
    )
}

const styles = {
    container: {
        background:"#22223b",
        border: "1px solid black",
        borderRadius:"5px",
        display:"flex",
        justifyContent:"center"
    },
    input_boxes:{
        background: "#ede0d4",
        fontSize:18,
        color:"#9c6644",
        padding:10,
        margin:12
    },
    labels:{
        fontSize:20,
        color:"#edf6f9",
        padding:10,
        margin: 10
    },
    button:{
        position:"relative",
        top:7,
        padding:10,
        margin:10,
        background:"#fdfdff",
        color:"#393d3f",
        border:"1px solid white",
        borderRadius:"5px"
    }
}