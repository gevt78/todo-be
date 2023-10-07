const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Activity = require('../models/Activity')

router.get('/', (req, res) =>
  Activity.findAll()
    .then(activities => {
      console.log(activities);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
