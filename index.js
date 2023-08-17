const http = require('http');
const express = require('express');
const { connectDB } = require("./src/db/dbConnection");
const routes = require("./src/routes/v1/index");
const config = require("./src/config/config");


const app = express();

/** create server using http */
const server = http.createServer(app);

/** Routes with Namespace (/v1) */
app.use("/v1" , routes);


/** Database connection */
connectDB();

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});