const httpStatus = require("http-status");
const destinationService = require("../services/destination.service");
const catchAsync = require("../utils/catchAsync");

const addDestination = catchAsync(async (req, res) => {
  console.log(req.body, "data")
  const destination = await destinationService.addDestination(req.body)
  res.status(httpStatus.CREATED).send(destination);
});

const getDestination = catchAsync(async (req, res) => {
  const destination = await destinationService.getDestination();
  res.status(httpStatus.OK).send(destination);
});

const updateDestination = catchAsync(async (req, res) => {
  const destination = await destinationService.updatedestination(req.body);
  res.status(httpStatus.CREATED).send(destination);
});

module.exports = {
  addDestination,
  getDestination,
  updateDestination,
};
