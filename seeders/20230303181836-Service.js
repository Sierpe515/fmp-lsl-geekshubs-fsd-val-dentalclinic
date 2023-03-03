'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services',
    [
     {id: 1, treatment: "single dental implant", description:"Dental implant surgery that replaces tooth roots with metal, screwlike posts and replaces damaged or missing teeth with artificial teeth that look and function much like real ones" ,price: 150, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 2, treatment: "fixed dental prosthesis", description:"Replacement and / or restoration of teeth by artificial substitutes that cannot be removed or removed from the mouth. The fixed prosthesis can be cemented, or securely retained in natural teeth, dental roots and / or pillars of dental implants.", price: 250 ,createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 3, treatment: "invisible orthodontic", description:"Clear Aligner Therapy is an orthodontic treatment modality in which the patient wears a series of customized clear, removable aligners that gradually moves the teeth to a desired position.", price: 1200, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 4, treatment: "dental cavities", description:"Fix holes in teeth that form when acid in the mouth erodes tooth enamel", price: 50, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
     {id: 5, treatment: "whitening", description:"Processes that aim to make someone’s natural teeth appear brighter and whiter. Teeth whitening methods include sanding down stains, bleaching, ultraviolet (UV) light therapy, and more.",price: 130, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
   
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
