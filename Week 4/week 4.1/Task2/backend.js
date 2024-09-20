const express = require("express");
const zod = require("zod");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());

const numberSchema = zod.number();

app.get("/si", (req, res)=>{
    const p = parseFloat(req.query.a);
    const r = parseFloat(req.query.b);
    const t = parseInt(req.query.c);

    const response1 = numberSchema.safeParse(p);
    const response2 = numberSchema.safeParse(r);
    const response3 = numberSchema.safeParse(t);
    if(!response1.success || !response2.success || !response3.success){
        return res.status(403).send("Invalid Input");
    }
    const result = (p * r * t)/100;
    res.status(200).send(result.toPrecision(5).toString());
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});