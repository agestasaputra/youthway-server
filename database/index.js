const mongoose = require("mongoose");

const uri =
  "mongodb+srv://agestasaputra:indosatim3@youthwaycluster-mbfi6.mongodb.net/youthway_db?retryWrites=true&w=majority";

const connection = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connection;
