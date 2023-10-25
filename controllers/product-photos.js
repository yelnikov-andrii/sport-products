import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { ProductPhoto, ProductPhotoAssociation } from '../models/Product.js';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const getPhotos = async(req, res) => {
  try {
    const photos = await ProductPhoto.findAll();
    res.send(photos);
  } catch(e) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getPhotosById = async (req, res) => {
  const { productId } = req.params;

  try {
    const productPhotoAssociations = await ProductPhotoAssociation.findAll({
      where: {
        ProductSportId: productId
      }
    });
    const photoIds = productPhotoAssociations.map(association => association.ProductPhotoSportId);
    const photos = await ProductPhoto.findAll({
      where: {
        id: photoIds
      }
    });
    res.send(photos);
  } catch(e) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

const createProudctPhoto = async (req, res) => {
  try {
    const productIds = req.body.productIds.split(',');
    const cleanedProductIds = productIds.map(id => +id.trim());
    const { imageUrl } = req.files;
    let fileName = uuidv4() + '.jpg';

    const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);
    imageUrl.mv(absoluteFilePath);
    const product_photo = await ProductPhoto.create({ imageUrl: fileName });
    await product_photo.addProductSport(cleanedProductIds);
    res.json(product_photo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const productPhotoController = {
  createProudctPhoto,
  getPhotos,
  getPhotosById
}