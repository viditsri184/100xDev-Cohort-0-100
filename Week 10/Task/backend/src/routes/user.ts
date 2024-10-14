import express, {Express } from 'express';
import asyncHandler from 'express-async-handler';
import { Router } from 'express';

const router : Router = express.Router();

router.post('/signup', asyncHandler(signUpHandler));

router.post('/signin', asyncHandler(signInHandler));