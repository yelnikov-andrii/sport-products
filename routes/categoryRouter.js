import express from 'express';
import { categoryController } from '../controllers/category.js';
import { catchError } from '../utils/catchError.js';

export const categoryRouter = express.Router();

categoryRouter.get('/categories', catchError(categoryController.getCategories));
categoryRouter.post('/categories', catchError(categoryController.createCategory));
