import express from 'express';
import { subcategoryController } from '../controllers/subcategory.js';
import { catchError } from '../utils/catchError.js';

export const subcategoryRouter = express.Router();

subcategoryRouter.get('/subcategories', catchError(subcategoryController.getSubCategories));
subcategoryRouter.get('/subcategories/:categoryId', catchError(subcategoryController.getSubCategoriesById));
subcategoryRouter.post('/subcategories', catchError(subcategoryController.createSubcategory));