const express = require("express");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


//config
if (process.env.NODE_ENV != "PRODUCTION") {
    require("dotenv").config({
        path:"backend/config/.env"
    })
}


//  ErrorHandling
app.use(ErrorHandler);


module.exports = app;