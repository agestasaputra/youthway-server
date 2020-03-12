const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"]
  }
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
