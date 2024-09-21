const button = document.getElementById("btn");
let globalId = 1


function addTodo(){
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const parent = document.getElementById("todo-lists");
    parent.appendChild(createNewChild(title, description, globalId++));
}

function markAsDone(todoId){
    const todo = document.getElementById(todoId).children[2];
    todo.innerHTML = "Done";
}

function createNewChild(title, description, id){
    const parent = document.createElement("div");
    const firstChild = document.createElement("div");
    firstChild.setAttribute("class", "titles");
    firstChild.innerHTML = `Task ${id} title : ${title}`;
    const secondChild = document.createElement("div");
    secondChild.setAttribute("class", "description");
    secondChild.innerHTML = `Task ${id} description : ${description}`;
    const thirdChild = document.createElement("button");
    thirdChild.innerHTML = "Mark as done";
    thirdChild.setAttribute("onclick", `markAsDone(${id})`);
    parent.appendChild(firstChild);
    parent.appendChild(secondChild);
    parent.appendChild(thirdChild);
    parent.setAttribute("id", id);
    return parent;
}


button.addEventListener("click", addTodo);

