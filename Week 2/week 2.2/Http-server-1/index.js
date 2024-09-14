const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

// middlewares
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<b> Hello from the server</b>");
});

app.post('/conversation', (req, res) =>{
    // console.log(req.headers);
    // console.log(req.headers["authorization"]);
    console.log(req.body);
    res.send({
        msg : "what is 2 + 2 ?"
    });
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});