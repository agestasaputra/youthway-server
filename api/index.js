const express = require("express");
const users = require("./users");
const tshirts = require("./tshirts");
const products = require("./products");

const app = express();

app.use("/api", users);
app.use("/api", tshirts);
app.use("/api", products);

module.exports = app;
