const express = require("express");
const cors = require("cors");
const app = express();
const TODOS = require("./todos");

app.use(cors());

app.get("/todos", (req, res) => {
    const id = parseInt(req.query.id, 10); // Convert id from string to number
    const todo = TODOS.find((x) => x.id === id);
    if (todo) {
        res.status(200).json({ todo });
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

app.listen(2000, ()=> {
    console.log('http://localhost:2000');
})