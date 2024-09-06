import { sequelize } from "../sequelize/index.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('user_sportproducts', {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    },
    activationToken: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });

  User.sync();

  export const Token = sequelize.define('token_sportproducts', {
    // Model attributes are defined here
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {
    // Other model options go here
  });
  
  Token.sync();
  User.hasOne(Token);
  Token.belongsTo(User);