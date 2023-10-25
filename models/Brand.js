import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";

export const BrandSport = sequelize.define('BrandSport', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

BrandSport.sync();