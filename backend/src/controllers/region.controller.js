const httpStatus = require("http-status");
const regionService = require("../services/region.service");
const catchAsync = require("../utils/catchAsync");

const addRegion = catchAsync(async (req, res) => {
  const region = await regionService.addRegion(req.body);
  res.status(httpStatus.CREATED).send(region);
});

const getRegion = catchAsync(async (req, res) => {
  const region = await regionService.getRegion();
  res.status(httpStatus.OK).send(region);
});

const updateRegion = catchAsync(async (req, res) => {
  const region = await regionService.updateRegion(req.body);
  res.status(httpStatus.CREATED).send(region);
});

module.exports = {
  addRegion,
  getRegion,
  updateRegion,
};
