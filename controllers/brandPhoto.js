import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { BrandPhoto } from '../models/Brand.js';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const getPhotos = async (req, res) => {
    try {
        const photos = await BrandPhoto.findAll();
        res.send(photos);
    } catch (e) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getPhotosById = async (req, res) => {
    const { brandId } = req.params;

    try {
        const foundPhoto = await BrandPhoto.findOne({
            where: {
                brandId: brandId
            }
        });

        res.send(foundPhoto);
    } catch (e) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createBrandPhoto = async (req, res) => {
    try {
        const { imageUrl } = req.files;
        const { brandId } = req.body;
        let fileName = uuidv4() + '.jpg';

        const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);
        imageUrl.mv(absoluteFilePath);
        const brand_photo = await BrandPhoto.create({ imageUrl: fileName, BrandSportId: brandId });
        res.json(brand_photo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const brandPhotoConroller = {
    createBrandPhoto,
    getPhotos,
    getPhotosById
}