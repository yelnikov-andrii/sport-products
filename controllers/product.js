import { Product } from "../models/Product.js";
import { SubSubcategory } from "../models/SubSubcategory.js";
import { SubCategory } from "../models/Subcategory.js";

const getAll = async (req, res) => {
  let { limit, page, brandId, latest } = req.query;
  page = page || 1;
  limit = limit || 9;
  let offset = page * limit - limit;
  let products = [];

  if (latest) {
    products = await Product.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    res.send(products);
    return;
  }

  if (brandId) {
    products = await Product.findAndCountAll({where: {
      BrandSportId: brandId
    }, limit, offset});
  } else {
    products = await Product.findAndCountAll( { limit, offset });
  }
  
  res.send(products);
}

const getOne = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOne({where: {
    id: productId
  }});
  res.send(product);
}

const getProductsByCategory = async (req, res) => {
  let { category, subcategory, subsubcategory, limit, page } = req.query;
  
  limit = limit || 10;
  page = page || 1;
  const offset = page * limit - limit;

  if (category) {
      const subcategories = await SubCategory.findAll({ where: {
      CategorySportId: category,
    }});
    const subcategoryIds = subcategories.map(subcategory => subcategory.id);
    const subsubcategories = await SubSubcategory.findAll({
      where: {
        SubcategorySportId: subcategoryIds,
      }
    });
    
    const subsubcategoryIds = subsubcategories.map(subsubcategory => subsubcategory.id);
    const products = await Product.findAndCountAll({where: {
      SubSubcategorySportId: subsubcategoryIds,
    },
    limit,
    offset
  });
    res.send(products);
    return;
  }

  if (subcategory) {
    const subsubcategories = await SubSubcategory.findAll({
      where: {
        SubcategorySportId: subcategory,
      },
      limit: limit,
      offset: offset
    });
    
    const subsubcategoryIds = subsubcategories.map(subsubcategory => subsubcategory.id);
    const products = await Product.findAndCountAll({where: {
      SubSubcategorySportId: subsubcategoryIds,
    },
    limit: limit,
    offset: offset
  });
    res.send(products);
    return;
  }

  if (subsubcategory) {
    const products = await Product.findAndCountAll({where: {
      SubSubcategorySportId: subsubcategory,
    },
    limit,
    offset
  });

    res.send(products);
    return;
  }

  const products = await Product.findAndCountAll({ limit, offset });
  res.send(products);
}

const create = async (req, res) => {
  const { name_ukr, name_en, description_ukr, description_en, price, color_en, color_ukr, material_ukr, material_en, age_ukr, age_en, gender_ukr, gender_en, BrandSportId, SubSubcategorySportId } = req.body;

  const newProduct = { name_ukr, name_en, description_ukr, description_en, price, color_en, color_ukr, material_ukr, material_en, age_ukr, age_en, gender_ukr, gender_en, BrandSportId, SubSubcategorySportId }

  const product = await Product.create(newProduct);
  res.send(product);
}

export const ProductController = {
  getAll,
  create,
  getProductsByCategory,
  getOne
}