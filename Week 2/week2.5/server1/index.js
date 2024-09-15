// creating an http server
// using express
// express is not a default node library
// we need to explicitly include this library by running the command in the shell
// command -> npm install express

const express = require("express");
const port = 3000;
const app = express();

const sumUptoN = (n) =>{
    let ans = 0;
    for(let i = 1 ; i <= n ; i++){
        ans += i;
    }
    return ans;
}

// req, res => request and response
app.get('/', (req, res)=>{
    const n = req.query.n;
    const ans = sumUptoN(n);
    res.send(`${ans}`);
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});