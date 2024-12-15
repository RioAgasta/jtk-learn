const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust if necessary

// Import all models
const User = require('./user')(sequelize, DataTypes);

// Add associations here if necessary
User.associate({});

module.exports = {
  sequelize,
  User,  // Export User model
};
