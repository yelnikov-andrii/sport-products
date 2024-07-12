import express from 'express';
import { brandPhotoConroller } from '../controllers/brandPhoto.js';
import { catchError } from '../utils/catchError.js';

export const brandPhotoRouter = express.Router();

brandPhotoRouter.get('/brand-photos', catchError(brandPhotoConroller.getPhotos));
brandPhotoRouter.get('/brand-photos/:brandId', catchError(brandPhotoConroller.getPhotosById));
brandPhotoRouter.post('/brand-photos', catchError(brandPhotoConroller.createBrandPhoto));