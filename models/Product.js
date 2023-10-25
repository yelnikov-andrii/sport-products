import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";
import { SubSubcategory } from "./SubSubcategory.js";
import { BrandSport } from "./Brand.js";

export const Product = sequelize.define('ProductSport', {
  name_ukr: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name_en: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description_en: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  description_ukr: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  color_en: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  color_ukr: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  material_en: {
    type: DataTypes.STRING,
    allowNull: true
  },
  material_ukr: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender_en: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender_ukr: {
    type: DataTypes.STRING,
    allowNull: true
  },
  age_en: {
    type: DataTypes.STRING,
    allowNull: true
  },
  age_ukr: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  logging: false
});

export const ProductPhoto = sequelize.define('ProductPhotoSport', {
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export const ProductPhotoAssociation = sequelize.define('ProductPhotoAssociation', {});

ProductPhoto.belongsToMany(Product, { through: ProductPhotoAssociation });

ProductPhoto.sync();


SubSubcategory.hasMany(Product);
BrandSport.hasMany(Product);

Product.belongsTo(SubSubcategory);
Product.belongsTo(BrandSport);

Product.belongsToMany(ProductPhoto, { through: ProductPhotoAssociation });

Product.sync();

sequelize.sync();
