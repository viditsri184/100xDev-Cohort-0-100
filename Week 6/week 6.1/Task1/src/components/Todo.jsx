export function Todo({todos}){
    return (
        todos.map((todo) => {
            return <div key={todo.id}>
                <h4>id : {todo.id}</h4>
                <p>Title: {todo.title}</p>
                <p>Description : {todo.description}</p>
            </div>
        })
    )
}