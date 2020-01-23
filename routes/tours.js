const express = require('express');
const toursRoute = express.Router();
const {
  getAllTours,
  postTours,
  getToursById,
  patchTours,
  deleteTours,
  checkId,
  checkBody
} = require('../controllers/tours');

toursRoute.param('id', checkId);

toursRoute
  .route('/')
  .get(getAllTours)
  .post(checkBody, postTours);

toursRoute
  .route('/:id')
  .get(getToursById)
  .patch(patchTours)
  .delete(deleteTours);

module.exports = toursRoute;
