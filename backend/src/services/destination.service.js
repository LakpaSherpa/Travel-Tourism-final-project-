const Destination = require("../models/destination");
const Region = require("../models/region");

const addDestination = async (destinationData) => {
  console.log(destinationData, "dd")
  try {
    const existingDestination = await Destination.findOne({
      name: destinationData.name,
    });
    if (existingDestination) {
      throw new Error("Destination name already exists");
    }

    const regionExists = await Region.exists({ _id: destinationData.region });
    if (!regionExists) {
      throw new Error("Region does not exist");
    }

    const destination = await Destination.create(destinationData);
    return destination;
  } catch (error) {
    throw new Error(`Error adding destination: ${error.message}`);
  }
};

const getDestination = async () => {
  const regions = await Destination.find();
  return regions;
};

const updateDestination = async (regionData) => {
  const { id, ...update } = regionData;
  const updatedRegion = await Destination.findByIdAndUpdate(id, update, {
    new: true,
  });
  return updatedRegion;
};

module.exports = {
  addDestination,
  getDestination,
  updateDestination,
};
