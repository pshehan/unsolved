const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require('morgan');
const path = require('path');
const routes = require("./routes");
const app = express();

// configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set up logger
app.use(logger('combined'))
// serve up static assets
app.use(express.static(path.join(__dirname, "client/build")));
// set up routes
app.use(routes);

// Database configuration
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/react";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start the API server
const PORT = process.env.PORT || 3003;
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}...`);
});
