const express = require("express");
const z = require("zod");
const cors = require("cors"); // import cors
const port = 4000;

const app = express();
app.use(cors()); // Enable CORs
const numberSchema = z.number();

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    // console.log(typeof a);
    const b = parseInt(req.query.b);
    // console.log(typeof b);
    const response1 = numberSchema.safeParse(a);
    const response2 = numberSchema.safeParse(b);
    // console.log(response1);
    // console.log(response2);
    if(!response1.success || !response2.success){
        return res.status(403).send("Invalid input");
    }
    const result = a + b;
    res.status(200).send(result.toString());
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});