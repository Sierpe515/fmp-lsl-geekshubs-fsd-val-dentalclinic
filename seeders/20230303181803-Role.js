'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles',
    [
     {id: 1, privilege: "admin", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 2, privilege: "doctor", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 3, privilege: "patient", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
 ],
  {});
 },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
