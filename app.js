// Requires
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./config');
// Routes requires
const toursRoute = require('./routes/tours');
const usersRoute = require('./routes/users');

// Configurations
app.use(express.json());
app.use(morgan(config.morganConfig));
app.use(express.static(`${__dirname}/public`));

// Middlewares
morgan.token('id', req => req.id);

// Routes
app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/users', usersRoute);
app.get('/overview', (req, res) => {
  res.sendfile('overview');
});
app.get('/', (req, res) => {
  if (process.env.OS.toLowerCase().includes('windows')) {
    console.log(process.env);
    res.send('Este tiene windows ojota!!!!' + process.env.OS);
  }
});
// Starting server
module.exports = app;
