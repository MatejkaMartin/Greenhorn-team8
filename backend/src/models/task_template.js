'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task_Template = sequelize.define('Task_Template', {
    name: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {});
  Task_Template.associate = function(models) {
    // associations can be defined here
  };
  return Task_Template;
};