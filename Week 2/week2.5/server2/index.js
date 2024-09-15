const express = require("express");

const port = 3001;
const app = express();

function sumOfTwoNumbers(a, b){
    return a + b;
}

// req, res => request and response
app.get('/', (req, res)=>{
    const a = Number.parseInt(req.query.a);
    const b = Number.parseInt(req.query.b);
    const sum = sumOfTwoNumbers(a, b);
    res.send(`Sum of ${a} and ${b} is ${sum}`);
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});