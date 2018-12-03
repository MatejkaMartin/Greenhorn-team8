'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('token', {
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};
