import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

import { Category } from '../models/Category.js';

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name_ukr, name_en } = req.body;
    const { photo } = req.files;
    let fileName = uuidv4() + '.jpg';

    const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);
    photo.mv(absoluteFilePath);
    const category = await Category.create({ name_ukr, name_en, photo: fileName });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const categoryController = {
  getCategories,
  createCategory
}


