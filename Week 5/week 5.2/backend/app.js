const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const routes = require("./routes/routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send("All todos are shown below");
// });

// middleware or to set routes
app.use("/", routes);
app.use("/todo", routes);
app.use("/updateTodos", routes);
app.use("/deleteTodos", routes);



const start = () => {
    try {
        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();