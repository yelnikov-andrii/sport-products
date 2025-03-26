import express from 'express';
import { contactController } from '../controllers/contact.js';
import { catchError } from '../utils/catchError.js'

export const contactRouter = express.Router();

contactRouter.post('/contacts', catchError(contactController.create));