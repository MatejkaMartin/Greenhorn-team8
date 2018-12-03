'use strict';
module.exports = (sequelize, DataTypes) => {
  const document_template_rel = sequelize.define('document_template_rel', {
    task_id: DataTypes.NUMBER
  }, {});
  document_template_rel.associate = function(models) {
    // associations can be defined here
  };
  return document_template_rel;
};