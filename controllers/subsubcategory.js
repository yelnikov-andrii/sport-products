import { SubSubcategory } from '../models/SubSubcategory.js';

const getSubSubCategories = async (req, res) => {
  try {
    const subsubcategories = await SubSubcategory.findAll();
    res.send(subsubcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSubSubCategoriesById = async (req, res) => {
  const { subcategoryId } = req.params;
  try {
    const subsubcategories = await SubSubcategory.findAll({
      where: {
        SubcategorySportId: subcategoryId,
      }
    });
    res.send(subsubcategories);
  }
  catch(e) {
    console.log(e);
  }
}

const createSubSubcategory = async (req, res) => {
  try {
    const { name_ukr, name_en, SubcategorySportId } = req.body;

    const Subsubcategory = await SubSubcategory.create({ name_ukr, name_en, SubcategorySportId });
    res.json(Subsubcategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const subsubcategoryController = {
  getSubSubCategories,
  getSubSubCategoriesById,
  createSubSubcategory
}


