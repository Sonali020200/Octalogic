const sequelize = require('../config/db');
const Vehicle = require('../models/Vehicle');

async function seedData() {
  await sequelize.sync({ force: true });

  // Adding vehicle types
  await Vehicle.bulkCreate([
    { type: 'Hatchback', model: 'Toyota Yaris', wheels: 4 },
    { type: 'SUV', model: 'Ford Explorer', wheels: 4 },
    { type: 'Sedan', model: 'Honda Accord', wheels: 4 },
    { type: 'Cruiser', model: 'Harley Davidson', wheels: 2 },
    { type: 'Sports', model: 'Yamaha R1', wheels: 2 }
  ]);

  console.log('Seeding complete');
}

seedData();
