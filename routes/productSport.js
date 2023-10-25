import express from 'express';
import { ProductController } from '../controllers/product.js';
import { catchError } from '../utils/catchError.js';

export const productsSportRouter = express.Router();


productsSportRouter.get('/products', catchError(ProductController.getAll));
productsSportRouter.get('/products/:productId', catchError(ProductController.getOne));
productsSportRouter.get('/products-by-category', catchError(ProductController.getProductsByCategory));
productsSportRouter.post('/products', catchError(ProductController.create));
