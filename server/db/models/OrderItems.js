const Sequelize = require('sequelize')
const db = require('../db')

const OrderItems = db.define('orderItems', {
  totalQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unitCost: {
    type: Sequelize.DECIMAL(10,2),
  },
  totalCost: {
    type: Sequelize.DECIMAL(10,2),
  }
})

module.exports = OrderItems
