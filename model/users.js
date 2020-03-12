const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: [true, "Street is required!"]
  },
  city: {
    type: String,
    required: [true, "City is required!"]
  },
  province: {
    type: String,
    required: [true, "Province is required!"]
  },
  postal: {
    type: Number,
    required: [true, "Postal is required!"]
  },
  country: {
    type: String,
    required: [true, "Country is required!"]
  }
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!"]
  },
  email: {
    type: String,
    required: [true, "Email is required!"]
  },
  password: {
    type: String,
    required: [true, "Password is required!"]
  },
  address: addressSchema
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
