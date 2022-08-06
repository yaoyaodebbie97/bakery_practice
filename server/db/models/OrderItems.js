const Sequelize = require('sequelize');
const db = require('../db');

const OrderItems = db.define('orderItems', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  totalQuantity: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 5,
  },

  totalCost: {
    type: Sequelize.INTEGER,
    defaultValue: 400,
  },
});

module.exports = OrderItems;
