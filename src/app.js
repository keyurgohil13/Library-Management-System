require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 8001;
const dbConnection = require("./config/dbConfig");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded())
app.use(express.json())


app.use("/api", require('./routes'))
app.listen(port, (err) => {
  if (err) {
    console.log("Error : ", err);
    return false;
  }
  console.log("Server is started....");
});
