'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('state',
    [{
      name: 'new',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'submitted',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'returned',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'done',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('state', null, {});
  }
};
