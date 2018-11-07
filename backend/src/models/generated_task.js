'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generated_Task = sequelize.define('Generated_Task', {
    jobPositionID: DataTypes.INTEGER,
    taskTemplateID: DataTypes.INTEGER
  }, {});
  Generated_Task.associate = function(models) {
    // associations can be defined here
  };
  return Generated_Task;
};