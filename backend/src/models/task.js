'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskTemplateID: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    stateID: DataTypes.INTEGER,
    assigneeID: DataTypes.INTEGER,
    ownerID: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};