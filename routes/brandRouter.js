import express from 'express';
import { BrandController } from '../controllers/brand.js';
import { catchError } from '../utils/catchError.js';

export const brandRouter = express.Router();

brandRouter.get('/brands', catchError(BrandController.getAll));
brandRouter.get('/brands/:brandId', catchError(BrandController.getOneById));
brandRouter.post('/brands', catchError(BrandController.create));
brandRouter.put('/brands', catchError(BrandController.updateBrands));