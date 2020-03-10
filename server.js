const express = require("express");
const connectDB = require("./database/index");
const api = require("./api");

const app = express();
const port = process.env.port || 4000;

connectDB();
app.use(api);

app.listen(port, () => console.log(`server is listening on port ${port}`));
