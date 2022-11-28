'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
      */
      return queryInterface.bulkInsert('Contacts', [{
         name: 'Geronimo',
         email: "geroza49@gmail.com",
         phone: 129831892389,
         message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur.',
         createdAt: new Date(),
         deletedAt: new Date(),
         updatedAt: new Date()
      }])
   },

   down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contacts', null, {});
   }
};
