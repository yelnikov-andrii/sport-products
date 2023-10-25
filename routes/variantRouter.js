import express from 'express';
import { VariantController } from '../controllers/variant.js';
import { catchError } from '../utils/catchError.js';

export const variantRouter = express.Router();

variantRouter.get('/variants/:productId', catchError(VariantController.getAll));
variantRouter.post('/variants', catchError(VariantController.create));
variantRouter.put('/variants/:id', catchError(VariantController.update));