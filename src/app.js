require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 8001;

const dbConnection = require("./config/dbConfig");

const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log("Error : ", err);
    return false;
  }
  console.log("Server is started....");
});
