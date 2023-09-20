const sequelize = require('../config/connection');
const seedUser = require('./userData');

// seeds all of the data
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  process.exit(0);
};

seedAll();