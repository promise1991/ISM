const mongoose = require('mongoose')
const URL = process.env.URL

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(URL);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
