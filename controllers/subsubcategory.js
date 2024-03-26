import { SubSubcategory } from '../models/SubSubcategory.js';

const getSubSubCategories = async (req, res) => {
  const { subcategoryId } = req.body;
  if (!subcategoryId) {
    try {
      const subsubcategories = await SubSubcategory.findAll();
      res.send(subsubcategories);
      return;
    } catch (error) {
      res.status(500).json({ error: error.message });
      return;
    }
  } else {
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
};

const getOne = async (req, res) => {
  const { subsubcategoryId } = req.params;

  try {
    const subsubcategory = await SubSubcategory.findOne({ where: {
      id: subsubcategoryId
    }});

    res.send(subsubcategory);
  } catch(e) {
    res.status(500).json({ error: e.message })
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
  getOne,
  createSubSubcategory
}


