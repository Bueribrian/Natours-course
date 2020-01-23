const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkBody = (req, res, next) => {
  let { name, price } = req.body;
  if (!name || !price) {
    return res.status(404).json({
      status: 'Error',
      message:
        'Se necesita minimo el nombre y el precio del tour, para poder subirlo'
    });
  }

  next();
};

exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res
    .status(200)
    .json({ message: 'Success', results: tours.length, data: tours });
};

exports.getToursById = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id == id);

  res.status(200).json({
    status: 'success',
    data: tour
  });
};

exports.postTours = (req, res) => {
  let newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
};

exports.patchTours = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      message: 'Search failed!'
    });
  } else {
    let tour = tours.find(el => el.id == req.params.id * 1);

    res.status(200).json({
      message: 'Done!',
      data: { tour }
    });
  }
};

exports.deleteTours = (req, res) => {
  let tour = tours.find(el => el.id == req.params.id * 1);

  res.status(200).json({
    message: 'Success',
    data: { tour }
  });
};
