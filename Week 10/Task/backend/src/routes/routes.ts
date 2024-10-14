import express, { Express, Router} from "express";

const router : Router = express.Router();

router.use('/user/', userRouter);

export default router;