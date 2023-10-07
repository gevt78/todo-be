const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./config/database')

db.authenticate()
  .then(() => console.log('Databse connected ...'))
  .catch(err => console.log('ERR: ' + err))

const app = express()

app.get('/', (req, res) => res.send('INDEX'))

// Routes
app.use('/activity', require('./routes/activity'))

const PORT = process.env.PORT || 3200;

app.listen(PORT, console.log(`Server started on port ${PORT}`));