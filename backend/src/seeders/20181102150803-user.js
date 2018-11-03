'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',

      [{
        name: 'Karel Zaměstnanec',
        email: 'karel.zamestnanec@greenhorn.com',
        password: 'karel',
        mobile:'686493573',
        avatarURL:'',
        roleID: '1',
        departmentID:'1',
        jobPositionID:'1',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Marie AdminHR',
        email: 'marie.AdminHR@greenhorn.com',
        password: 'marie',
        mobile:'653553537',
        avatarURL:'',
        roleID: '1',
        departmentID:'1',
        jobPositionID:'1',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Anna AdminIT',
        email: 'anna.AdminIT@greenhorn.com',
        password: 'anna',
        mobile:'686493573',
        avatarURL:'',
        roleID: '1',
        departmentID:'1',
        jobPositionID:'1',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Tudor AdminAcc',
        email: 'tudor.AdminAcc@greenhorn.com',
        password: 'tudor',
        mobile:'686493573',
        avatarURL:'',
        roleID: '1',
        departmentID:'1',
        jobPositionID:'1',
        createdAt: new Date(),
        updatedAt: new Date()
      }],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
