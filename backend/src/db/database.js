const mongoose = require("mongoose");

// Set the strictQuery option to false to suppress the warning
mongoose.set('strictQuery', false);

// Db Config
const db = 'mongodb://127.0.0.1:27017/travel';
console.log(db);

const connectionDb = async function () {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = connectionDb;
