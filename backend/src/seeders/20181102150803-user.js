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
        name: 'Hana ZamHRDev',
        email: 'hana.zamHrDev@greenhorn.com',
        password: 'hana',
        mobile:'634824517',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 1,
        jobPosition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Hugo zamHRTst',
        email: 'hugo.zamHRTst@greenhorn.com',
        password: 'hugo',
        mobile:'448504640',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 1,
        jobPosition_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Henry ZamHRMng',
        email: 'henry.zamHRMng@greenhorn.com',
        password: 'henry',
        mobile:'596202117',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 1,
        jobPosition_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Igor ZamITDev',
        email: 'igor.zamITDev@greenhorn.com',
        password: 'igor',
        mobile:'691858264',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 2,
        jobPosition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Ivan ZamITTst',
        email: 'ivan.zamITst@greenhorn.com',
        password: 'ivan',
        mobile:'792885879',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 2,
        jobPosition_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Iveta ZamITMng',
        email: 'iveta.zamITMng@greenhorn.com',
        password: 'iveta',
        mobile:'851470042',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 2,
        jobPosition_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Filip ZamFinDev',
        email: 'filip.zamFinDev@greenhorn.com',
        password: 'filip',
        mobile:'699800671',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 3,
        jobPosition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Frida ZamFinTst',
        email: 'frida.zamFinTst@greenhorn.com',
        password: 'frida',
        mobile:'823287308',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 3,
        jobPosition_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Felix ZamFinMng',
        email: 'felix.zamFinMng@greenhorn.com',
        password: 'felix',
        mobile:'690950859',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 3,
        jobPosition_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Alena ZamAccDev',
        email: 'alena.zamAccDev@greenhorn.com',
        password: 'alena',
        mobile:'723561094',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 4,
        jobPosition_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Anton ZamAccTst',
        email: 'anton.zamAccTst@greenhorn.com',
        password: 'anton',
        mobile:'688650027',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 4,
        jobPosition_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Amy ZamAccMng',
        email: 'amy.zamAccMng@greenhorn.com',
        password: 'amy',
        mobile:'647358384',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic1.png?alt=media&token=10336739-1d06-4161-8fc2-530fcf06e919',
        role_id: 1,
        department_id: 4,
        jobPosition_id: 3,
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
        name: 'Hope AdminHR',
        email: 'hope.adminHR@greenhorn.com',
        password: 'hope',
        mobile:'635389237',
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
        mobile:'889449053',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
        role_id: 2,
        department_id: 2,
        jobPosition_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Ilona AdminIT',
        email: 'ilona.AdminIT@greenhorn.com',
        password: 'ilona',
        mobile:'735679053',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
        role_id: 2,
        department_id: 2,
        jobPosition_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Franta AdminFin',
        email: 'franta.AdminFin@greenhorn.com',
        password: 'franta',
        mobile:'849928599',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
        role_id: 2,
        department_id: 3,
        jobPosition_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Fabio AdminFin',
        email: 'fabio.adminFin@greenhorn.com',
        password: 'fabio',
        mobile:'863028599',
        avatarURL:'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
        role_id: 2,
        department_id: 3,
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
      },

      {
        name: 'Adam AdminAcc',
        email: 'Adam.adminAcc@greenhorn.com',
        password: 'Adam',
        mobile:'673645573',
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
