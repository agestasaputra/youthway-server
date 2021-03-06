const express = require("express");
const connectDB = require("./database/index");
const api = require("./api");

const app = express();
const port = process.env.port || 4000;

/* For Body Parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use(api);

app.listen(port, () => console.log(`server is listening on port ${port}`));
