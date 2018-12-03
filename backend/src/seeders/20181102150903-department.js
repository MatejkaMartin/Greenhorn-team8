'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('department',
    [{
      name: 'HR',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'IT',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Accounting',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('department', null, {});
  }
};
