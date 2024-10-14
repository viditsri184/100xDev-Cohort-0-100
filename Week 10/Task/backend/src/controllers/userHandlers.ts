import express, { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());


async function signUpHandler(req : Request, res: Response){
    const userPayload = req.body;
    
}