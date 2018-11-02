'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        name: 'Karel Zaměstnanec',
        email: 'karel.zamestnanec@greenhorn.com',
        password: 'karel',
        role: 'employee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marie AdminHR',
        email: 'Marie.AdminHR@greenhorn.com',
        password: 'marie',
        role: 'AdminHR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anna AdminIT',
        email: 'anna.AdminIT@greenhorn.com',
        password: 'anna',
        role: 'AdminIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tudor AdminAcc',
        email: 'tudor.AdminAcc@greenhorn.com',
        password: 'tudor',
        role: 'AdminAcc',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
