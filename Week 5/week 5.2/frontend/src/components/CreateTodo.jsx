import { useState } from "react";

export function CreateTodo(){
    const [id, setId] = useState(1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = async () => {
        if (!title || !description) {
            alert("Please provide both a title and description.");
            return;
        }

        try {
            const response = await fetch("http://localhost:2000/todo", {
                method: "POST",
                body: JSON.stringify({
                    // If using an auto-generated ID, remove the id field
                    id : id,
                    title: title,
                    description: description,
                    completed: false,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to add todo");
            }

            // Reset the input fields
            setTitle("");
            setDescription("");
            setId(1);

            alert("Todo added successfully");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add todo. Please try again.");
        }
    };

    return <div>
        id : <input type="number" placeholder="id"
            onChange={(e)=>{
                const value = e.target.value;
                setId(value);
            }}
        />
        Title: <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title"
            onChange={(e)=>{
                    const value = e.target.value;
                    setTitle(value);
                }}
        /><br />
        Description: <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description"
            onChange={(e)=>{
                    const value = e.target.value;
                    setDescription(value);
                }}
        /><br />

        <button style={{
            padding:10,
            margin:10
        }} onClick={handleAddTodo}>Add a todo</button>
    </div>
}