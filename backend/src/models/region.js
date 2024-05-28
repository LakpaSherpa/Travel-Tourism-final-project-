const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Region", regionSchema);
