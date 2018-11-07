'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    name: DataTypes.STRING,
    documentURL: DataTypes.STRING,
    taskTemplateID: DataTypes.INTEGER
  }, {});
  Document.associate = function(models) {
    // associations can be defined here
  };
  return Document;
};