const Sequelize = require('sequelize')
const db = require('../db')

const OrderItems = db.define('orderItems', {
  productQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = OrderItems
