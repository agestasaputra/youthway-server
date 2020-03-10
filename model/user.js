const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
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
  Address: AddressSchema
});

const User = mongoose.model("user", userSchema);

module.exports = User;
