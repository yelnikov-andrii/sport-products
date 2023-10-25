import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize/index.js';
import { Category } from './Category.js';

export const SubCategory = sequelize.define('SubcategorySport', {
  name_ukr: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  logging: false
});

Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);
SubCategory.sync({ force: false });