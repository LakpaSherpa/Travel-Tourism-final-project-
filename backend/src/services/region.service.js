const Region = require('../models/region')

const addRegion = async (regionData) => {
  const region = await Region.create(regionData);
  return region;
};

const getRegion = async () => {
  const regions = await Region.find();
  return regions;
};

const updateRegion = async (regionData) => {
  const { id, ...update } = regionData;
  const updatedRegion = await Region.findByIdAndUpdate(id, update, { new: true });
  return updatedRegion;
};

module.exports = {
  addRegion,
  getRegion,
  updateRegion,
};
