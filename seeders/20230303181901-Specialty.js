'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Specialties',
    [
    {id: 1,type: "implantology",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 2,type: "denture",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 3,type: "orthodontics",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 4,type: "general orthodontics",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    {id: 5,type: "dental aesthetics",createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
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
