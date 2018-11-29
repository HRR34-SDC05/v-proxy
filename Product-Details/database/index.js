const mongoose = require("mongoose");

const mongoUri =
  "mongodb+srv://lotsuki:Masteroffate@mongo-icj3w.mongodb.net/details";

mongoose.connect(
  mongoUri,
  {
    autoIndex: false,
    useNewUrlParser: true
  }
);

const db = mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", () => {
    console.log("Cannot connect to MongoDB");
  });

module.exports = db;
