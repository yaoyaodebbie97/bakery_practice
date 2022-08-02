const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://media.gettyimages.com/vectors/cupcake-flat-design-dessert-icon-vector-id980473104?s=612x612"
  },
  category: {
    type: Sequelize.ENUM('bread', 'cakes', 'cookies', 'cupcakes', 'muffins', 'pastries', 'pies' ),
    allowNull: false
  }
})

module.exports = Product
