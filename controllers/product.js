import { Product } from "../models/Product.js";
import { SubSubcategory } from "../models/SubSubcategory.js";
import { SubCategory } from "../models/Subcategory.js";
import { Op, Sequelize } from "sequelize";
import { VariantSport } from "../models/Variant.js";
import { BrandSport } from "../models/Brand.js";
import { Category } from "../models/Category.js";

async function withFilters(colors, ages, materials, genders, brands, sizes, sort) {
  const whereClause = {};

  if (colors) {
    whereClause.color_en = { [Op.overlap]: colors.split(',') };
  }

  if (ages) {
    whereClause[Op.or] = ages.split(',').map((age) => {
      return Sequelize.literal(`age_en = '${age}'`);
    });
  }

  if (materials) {
    whereClause[Op.or] = materials.split(',').map((material) => {
      return Sequelize.literal(`material_en = '${material}'`);
    });
  }

  if (genders) {
    whereClause[Op.or] = genders.split(',').map((gender) => {
      return Sequelize.literal(`gender_en = '${gender}'`);
    });
  }

  if (brands) {
    const brandsFromServer = await BrandSport.findAll();
    whereClause[Op.or] = brands.split(',').map((brand) => {
      const foundBrand = brandsFromServer.find(b => b.name === brand);
      return { BrandSportId: foundBrand?.id };
    });
  }

  if (sizes) {
    const sizesArr = sizes.split(',');
    const variants = await VariantSport.findAll({
      where: {
        name_en: {
          [Op.or]: sizesArr.map((size) => {
            return Sequelize.literal(`name_en = '${size}'`);
          })
        }
      }
    });
    const productIds = variants.map(variant => variant.ProductSportId);

    whereClause[Op.or] = productIds.map((productId) => {
      return { id: +productId };
    });

  }

  return whereClause;
}

const getAll = async (req, res) => {
  let { limit, page, brandId, latest, colors, brands, materials, ages, genders, sizes, sort, lang } = req.query;
  let offset;
  offset = page * limit - limit;
 
  let order = [];
  const nameField = lang === 'en' ? 'name_en' : 'name_ukr';

  if (sort === 'alphAsc' || !sort) {
    order.push([nameField, 'ASC']);
  } else if (sort === 'alphDesc') {
    order.push([nameField, 'DESC']);
  } else if (sort === 'priceAsc') {
    order.push(['price', 'ASC']);
  } else if (sort === 'priceDesc') {
    order.push(['price', 'DESC']);
  }

  let products = [];

  const whereClause = await withFilters(colors, ages, materials, genders, brands, sizes);

  if (latest) {
    if (!page || !limit) {
      products = await Product.findAll({
        order: [['createdAt', 'DESC']]
      });
      res.send(products);
      return;
    }

    products = await Product.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    res.send(products);
    return;
  }

  if (brandId) {
    if (!page || !limit) {
      products = await Product.findAll({
        where: {
          BrandSportId: brandId
        }
      });
    } else {
      products = await Product.findAndCountAll({
        where: {
          BrandSportId: brandId
        }, limit, offset
      });
    }
  } else {
    if (!page || !limit) {
      products = await Product.findAll({ where: whereClause, order: order });
    } else {
      products = await Product.findAndCountAll({ where: whereClause, limit, offset, order: order });
    }
  }

  res.send(products);
}

const getOne = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOne({
    where: {
      id: productId
    }
  });
  res.send(product);
}

const getProductsByCategory = async (req, res) => {
  let { category, subcategory, subsubcategory, limit, page, colors, brands, materials, ages, genders, sizes } = req.query;
  const whereClause = await withFilters(colors, ages, materials, genders, brands, sizes);

  let offset = 0;
  if (limit && page) {
    offset = page * limit - limit;
  }

  if (category) {
    const decodedCategory = category.replace(/-and-/g, ' & ').replace(/-/g, ' ');
    const foundCategory = await Category.findOne({ where: { name_en: decodedCategory } });
    const subcategories = await SubCategory.findAll({
      where: {
        CategorySportId: foundCategory.id,
      }
    });
    const subcategoryIds = subcategories.map(subcategory => subcategory.id);
    const subsubcategories = await SubSubcategory.findAll({
      where: {
        SubcategorySportId: subcategoryIds,
      }
    });

    const subsubcategoryIds = subsubcategories.map(subsubcategory => subsubcategory.id);
    whereClause.SubSubcategorySportId = subsubcategoryIds;
  }

  if (subcategory) {
    const decodedSubcategory = subcategory.replace(/-and-/g, ' & ').replace(/-/g, ' ');
    const foundSubcategory = await SubCategory.findOne({ where: { name_en: decodedSubcategory } });
    const subsubcategories = await SubSubcategory.findAll({
      where: {
        SubcategorySportId: foundSubcategory.id,
      },
      limit: limit,
      offset: offset
    });

    const subsubcategoryIds = subsubcategories.map(subsubcategory => subsubcategory.id);

    whereClause.SubSubcategorySportId = subsubcategoryIds;
  }

  if (subsubcategory) {
    const decodedSubsubcategory = subsubcategory.replace(/-and-/g, ' & ').replace(/-/g, ' ');
    const foundSubsubcategory = await SubSubcategory.findOne({ where: { name_en: decodedSubsubcategory } });
    whereClause.SubSubcategorySportId = foundSubsubcategory.id;
  }

  if (!page || !limit) {
    const products = await Product.findAll({
      where: whereClause,
    });
    res.send(products);
    return;
  } else {
    const products = await Product.findAndCountAll({ where: whereClause, limit, offset });
    res.send(products);
  }
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