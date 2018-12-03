'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user',

      [{
        name: 'Karel Zaměstnanec',
        email: 'karel.zamestnanec@greenhorn.com',
        password: 'karel',
        mobile:'686493573',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 1,
        jobPosition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Marie AdminHR',
        email: 'marie.AdminHR@greenhorn.com',
        password: 'marie',
        mobile:'653553537',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 2,
        department_id: 1,
        jobPosition_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Anna AdminIT',
        email: 'anna.AdminIT@greenhorn.com',
        password: 'anna',
        mobile:'686493573',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
        role_id: 2,
        department_id: 2,
        jobPosition_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Tudor AdminAcc',
        email: 'tudor.AdminAcc@greenhorn.com',
        password: 'tudor',
        mobile:'686493573',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
        role_id: 2,
        department_id: 4,
        jobPosition_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
