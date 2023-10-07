const Sequelize = require('sequelize')
const db = require('../config/database')

const Activity = db.define('activity', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  start_note: {
    type: Sequelize.TEXT,
  },
  end_note: {
    type: Sequelize.TEXT,
  },
  start_date: {
    type: Sequelize.DATE
  },
  end_date: {
    type: Sequelize.DATE
  }
});

module.exports = Activity;
