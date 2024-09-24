/*
todos = [
{
    id: id
    title: "title",
    description: "description",
    completed: true/false
}]
*/

import { Todo } from "./Todo"

export function Todos({todos}){
    return (<div>
    {todos.map((todo)=>{
        return <Todo id={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></Todo>
    })}
    </div>)
}