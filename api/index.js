const express = require("express");
const user = require("./user");
const bodyParser = require("body-parser");

const app = express();

app.use("/api", user);

module.exports = app;
