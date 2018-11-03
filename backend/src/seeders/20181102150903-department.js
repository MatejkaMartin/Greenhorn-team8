'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departments',
    [{
      name: 'Human resources',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'IT',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Finances',
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
    return queryInterface.bulkDelete('Departments', null, {});
  }
};
