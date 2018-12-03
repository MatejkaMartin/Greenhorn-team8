'use strict';
module.exports = (sequelize, DataTypes) => {
  const reset_password = sequelize.define('reset_password', {
    task_id: DataTypes.NUMBER
  }, {});
  reset_password.associate = function(models) {
    // associations can be defined here
  };
  return reset_password;
};