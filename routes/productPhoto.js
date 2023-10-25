import express from 'express';
import { productPhotoController } from '../controllers/product-photos.js';
import { catchError } from '../utils/catchError.js';

export const ProductPhotoRouter = express.Router();

ProductPhotoRouter.get('/products-photos', catchError(productPhotoController.getPhotos));
ProductPhotoRouter.get('/products-photos/:productId', catchError(productPhotoController.getPhotosById));
ProductPhotoRouter.post('/products-photos', catchError(productPhotoController.createProudctPhoto));