const express = require("express");
const port = 5000;
const db = require("./config/db");
const app = express();

const customer = require("./Model/CustomerSchema");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/", require("./Route/customerRoute"));

app.use(express.urlencoded());

// app.use(route);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server start : ${port}`);
  }
});
