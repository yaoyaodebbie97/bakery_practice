'use strict';

const {
  db,
  models: { User, Product, Order, OrderItems },
} = require('../server/db');
const { mockUsers, mockOrders, mockProducts } = require('../seedData.js');

async function addOrders() {
  for (let i = 1; i <= 45; i++) {
    let order = await Order.findByPk(i);
    let randomUser = Math.floor(Math.random() * 50);
    await order.setUser(randomUser);
  }
}
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  await Promise.all(
    mockUsers.map((user) => {
      return User.create(user);
    }),
    mockOrders.map((order) => {
      return Order.create(order);
    }),
    mockProducts.map((product) => {
      return Product.create(product);
    })
  );
  await addOrders();

  console.log(`seeded users`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
