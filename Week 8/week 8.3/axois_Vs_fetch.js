// axios vs fetch
const axios = require("axios");

// .then syntax
// function main() {
//     fetch('https://dummyjson.com/todos/1')
//         .then(res => res.json())
//         .then(console.log);
// }

// async await syntax
// async function main(){
//     const response = await fetch('https://dummyjson.com/todos/1');
//     const json = await response.json();
//     console.log(json);
// }

// GET request in axios
async function main() {
    const response = await axios.get('https://dummyjson.com/todos/13');
    // response.data {we always get response back in response.data}
    console.log(response.data);
}

// POST request in fetch
// async function main2(){
//     const response = await fetch('https://dummyjson.com/todos/add', {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             todo: 'Use DummyJSON in the project',
//             completed: false,
//             userId: 5,
//         })
//     })
//     const json = await response.json();
//     console.log(json);
// }

async function main2() {
    const response = await axios.post('https://dummyjson.com/todos/add', {
        todo: 'Learn Axios',
        completed: false,
        userId: 1,
    },
        {
            headers: {
                Authorization: "Bearer 123"
            }
        })
    console.log(response.data);
}

main2();