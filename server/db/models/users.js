var Sequelize = require('sequelize');
var db = require('../database');
var Review = require('./users');
var Order = require('./orders');

var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  rol: {
    type: Sequelize.STRING,
    defaultValue: 'user',
  },
});

module.exports = User;
