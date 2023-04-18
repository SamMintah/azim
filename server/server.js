const app = require("./app");
const connectDatabase = require("./db/Database");

require('dotenv').config();

// connect db
connectDatabase();

//Handling uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server for handling uncaught exeception")
}) 


//config
if (process.env.NODE_ENV != "PRODUCTION") {
    require("dotenv").config({
        path:"backend/config/.env"
    })
}


// create server
const server = app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT}`
    );
  });

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`shutting down the server for unhandle promise rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });