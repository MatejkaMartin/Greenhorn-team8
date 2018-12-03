'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('job_position',
    [{
      name: 'Developer',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Tester',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('job_position', null, {});
  }
};
