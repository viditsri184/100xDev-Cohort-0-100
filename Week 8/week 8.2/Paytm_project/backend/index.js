const express = require("express");
const rootRouter = require("./routes/routes");
const cors = require("cors");


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);


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

// api/v1/user/signup
// api/v1/user/signin
// api/v1/user/changePassword

// api/v1/account/transferMoney/
// api/v1/account/balance