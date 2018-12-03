'use strict';
module.exports = (sequelize, DataTypes) => {
  const create - document_task_rel = sequelize.define('create-document_task_rel', {
    task_id: DataTypes.NUMBER
  }, {});
  create - document_task_rel.associate = function(models) {
    // associations can be defined here
  };
  return create - document_task_rel;
};