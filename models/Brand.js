import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";

export const BrandSport = sequelize.define('BrandSport', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING
  }
});

export const BrandPhoto = sequelize.define('BrandPhoto', {
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


BrandPhoto.belongsTo(BrandSport);
BrandSport.hasOne(BrandPhoto);

BrandPhoto.sync();
BrandSport.sync();
