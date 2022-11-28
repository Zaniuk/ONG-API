'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Inicio',
      description: 'Página de bienvenida.',
      path: '/',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Nosotros',
      description: 'Miembros de la organización',
      path: '/about',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Actividades',
      description: 'Actividades que realiza la organización.',
      path: '/activities',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedades',
      description: 'Listado de todas las novedades',
      path: '/news',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonios',
      description: 'Testimonios de personas.',
      path: '/testimonials',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Contacto',
      description: 'Formulario para contactar a la organización.',
      path: '/contact',
      createdAt: new Date,
      updatedAt: new Date
    } 
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
