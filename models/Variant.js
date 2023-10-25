import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";
import { Product } from "./Product.js";

export const VariantSport = sequelize.define('VariantSport', {
  name_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name_ukr: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
});

VariantSport.belongsTo(Product);
Product.hasMany(VariantSport);
VariantSport.sync();