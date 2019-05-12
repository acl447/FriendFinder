//Dependencies
let express = require("express");

let path = require("path");

//Creates an instance of an express app
let app = express();


//Lets Heroku assign PORT or defaults to 8080
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
