import { SubCategory } from '../models/Subcategory.js';

const getSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.findAll();
    res.send(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSubCategoriesById = async (req, res) => {
  const { categoryId } = req.body;
  try {
    const subcategories = await SubCategory.findAll({
      where: {
        CategorySportId: categoryId,
      }
    });
    res.send(subcategories);
  }
  catch(e) {
    console.log(e);
  }
}

const createSubcategory = async (req, res) => {
  try {
    const { name_ukr, name_en, CategorySportId } = req.body;

    const subcategory = await SubCategory.create({ name_ukr, name_en, CategorySportId });
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const subcategoryController = {
  getSubCategories,
  getSubCategoriesById,
  createSubcategory
}


