import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('user_sportproducts', {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  }, {
    // Other model options go here
  });

  User.sync();