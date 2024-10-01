const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get('/notifications', (req, res) => {
    const data = {
        "network": Math.floor(Math.random() * 200),
        "jobs": Math.floor(Math.random() * 50),
        "messaging": Math.floor(Math.random() * 90),
        "notifications": Math.floor(Math.random() * 20),
    }
    res.status(200).json(data);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})