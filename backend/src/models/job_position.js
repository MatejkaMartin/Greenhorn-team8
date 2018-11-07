'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job_Position = sequelize.define('Job_Position', {
    name: DataTypes.STRING
  }, {});
  Job_Position.associate = function(models) {
    // associations can be defined here
  };
  return Job_Position;
};