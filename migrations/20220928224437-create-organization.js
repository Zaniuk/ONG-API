'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      welcomeTitle: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB('long'),
      },
      welcomeImage: {
        type: Sequelize.BLOB('long'),
      },      
      facebook: {
        type: Sequelize.BLOB('long'),
      },
      linkedin: {
        type: Sequelize.BLOB('long'),
      },
      instagram: {
        type: Sequelize.BLOB('long'),
      },
      facebookUrl: {
        type: Sequelize.STRING
      },
      linkedinUrl: {
        type: Sequelize.STRING
      },
      instagramUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Organizations');
  }
};