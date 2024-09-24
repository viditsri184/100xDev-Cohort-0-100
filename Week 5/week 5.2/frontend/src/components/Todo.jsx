export function Todo(props){
    return <>
        <h3>{props.id}</h3>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <button style={{
            padding:10,
            margin:10
        }}>{props.completed === false ? "Pending" : "Done"}</button>
    </>
}