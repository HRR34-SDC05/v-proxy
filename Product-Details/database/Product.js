const mongoose = require("mongoose");
const db = require("./index.js");

mongoose.Promise = global.Promise;

const productSchema = mongoose.Schema({
  _id: Number,
  name: String,
  rating: Number,
  reviewCount: Number,
  itemNum: Number,
  price: Number,
  mainImage: String,
  images: Array
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
