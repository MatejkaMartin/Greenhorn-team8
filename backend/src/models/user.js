'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.INTEGER,
    avatarURL: DataTypes.STRING,
    roleID: DataTypes.INTEGER,
    departmentID: DataTypes.INTEGER,
    jobPositionID: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
