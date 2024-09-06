import express from 'express';
import { brandRouter } from './brandRouter.js';
import { ProductPhotoRouter } from './productPhoto.js';
import { productsSportRouter } from './productSport.js';
import { subSubCategoryRouter } from './subsubcategoryRouter.js';
import { subcategoryRouter } from './subcategoryRouter.js';
import { variantRouter } from './variantRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { brandPhotoRouter } from './brandPhoto.js';
import { authRouter } from './authRouter.js';

export const router = express.Router();

router.use(brandRouter);
router.use(categoryRouter);
router.use(ProductPhotoRouter);
router.use(productsSportRouter);
router.use(subSubCategoryRouter);
router.use(subcategoryRouter);
router.use(variantRouter);
router.use(brandPhotoRouter);
router.use(authRouter);
