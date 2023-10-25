import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize/index.js';

export const Category = sequelize.define('CategorySport', {
  name_ukr: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name_en: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: { 
    type: DataTypes.STRING, 
    allowNull: false },
}, {
  logging: false
});

Category.sync({ force: false });

