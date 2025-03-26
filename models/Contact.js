import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";

export const Contact = sequelize.define('ContactSports', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


Contact.sync();
