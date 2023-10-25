import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";
import { SubCategory } from "./Subcategory.js";

export const SubSubcategory = sequelize.define('SubSubcategorySport', {
  name_ukr: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

SubSubcategory.belongsTo(SubCategory);
SubCategory.hasMany(SubSubcategory);
SubSubcategory.sync();