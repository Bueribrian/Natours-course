const express = require('express');
const usersRoute = express.Router();
const { getAllUsers, createUser } = require('../controllers/users');

usersRoute
  .route('/')
  .get(getAllUsers)
  .post(createUser);

module.exports = usersRoute;
