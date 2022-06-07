const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // menggunakan docker mongoDB
    await mongoose.connect("mongodb://localhost:2000/longue404");
    console.log("DB Connected");
  } catch (error) {
    console.log("Error DB Not Connected");
  }
}

module.exports = connectDB;