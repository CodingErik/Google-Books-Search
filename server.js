const express = require("express");
// I have to set up the env in the back end to use the api key 
require('dotenv').config(); 
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// const socket = require('socket.io');

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});


// let io = socket(listen)

// io.on('connection', (socket) => {
//   console.log(`made a socket connection ${socket.id}`); 
// }); 