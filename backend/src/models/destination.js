const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String },
  description: { type: String },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  price:{ 
    type:Number,
    required:true
  },
  imageURL: {
    type: String,
    required: true,
  },
  attractions: [
    {
      type: String,
    },
  ],
  activities: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Destination", destinationSchema);
