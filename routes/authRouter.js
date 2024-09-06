import express from 'express';
import { catchError } from '../utils/catchError.js';
import { authController } from '../controllers/auth.js';

export const authRouter = express.Router();

authRouter.post('/registration', catchError(authController.register));
authRouter.get('/activation/:activationToken', catchError(authController.activate));
authRouter.post('/login', catchError(authController.login));
authRouter.get('/refresh', catchError(authController.refresh));
authRouter.get('/logout', catchError(authController.logout));