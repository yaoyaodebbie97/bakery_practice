const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('Confirmed', 'Processing', 'Complete'),
    allowNull: false
  },
  totalQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalCost: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
})

module.exports = Order
