'use strict';

const phones = require('../public/api/phones.json');
const tablets = require('../public/api/accessories.json');
const accessories = require('../public/api/tablets.json');

const productsInfo = [...phones, ...tablets, ...accessories]
  .map(product => ({
    ...product,
    description: JSON.stringify(product.description),
}));


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_info', productsInfo);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_info', null);
  }
};