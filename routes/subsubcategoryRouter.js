import express from 'express';
import { subsubcategoryController } from '../controllers/subsubcategory.js';
import { catchError } from '../utils/catchError.js';

export const subSubCategoryRouter = express.Router();

subSubCategoryRouter.get('/subsubcategories', catchError(subsubcategoryController.getSubSubCategories));
subSubCategoryRouter.get('/subsubcategories/:subcategoryId', catchError(subsubcategoryController.getSubSubCategoriesById));
subSubCategoryRouter.post('/subsubcategories', catchError(subsubcategoryController.createSubSubcategory));