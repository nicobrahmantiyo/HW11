'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'todos',
      [
        {
          title: 'Menonton vidio learning rakamin',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Mengerjakan homework rakamin',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Mengerjakan exam rakamin',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  },
};
