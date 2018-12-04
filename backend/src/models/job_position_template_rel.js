'use strict';
module.exports = (sequelize, DataTypes) => {
  const job_position_template_rel = sequelize.define('job_position_template_rel', {
    id: DataTypes.INTEGER,
    template_id: DataTypes.INTEGER,
    job_position_id: DataTypes.INTEGER
  }, {});
  job_position_template_rel.associate = function(models) {
    // associations can be defined here
  };
  return job_position_template_rel;
};