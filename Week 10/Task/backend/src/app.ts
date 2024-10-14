import express, { Express } from "express";
import rootRouter from "./routes/routes";
import cors from "cors";


const port: string | number = process.env.PORT || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', rootRouter);

const start = () : void => {
    try {
        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();


