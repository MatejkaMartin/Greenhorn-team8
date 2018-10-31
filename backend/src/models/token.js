'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiresAt: DataTypes.DATE
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};